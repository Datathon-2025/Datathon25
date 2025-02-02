from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from supabase import create_client, Client


app = Flask(__name__)
CORS(app)

supabase_url='..'
supabase_key='...'
            
supabase: Client = create_client(supabase_url, supabase_key)
app.config['UPLOAD_FOLDER'] = "uploads"
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

GEMINI_API_KEY = "..."  # Replace with your API Key
genai.configure(api_key=GEMINI_API_KEY)

@app.route("/upload", methods=["POST"])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Empty filename"}), 400
    
    # Change the file extension to .txt
    filename = os.path.splitext(file.filename)[0] + ".txt"
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    
    myfile = genai.upload_file(file_path)
    schema = """
    result= {
        campaign_name: str,
        campaign_id: str,
        campaign_start_date: str,
        campaign_end_date: str
    }
    """
    model = genai.GenerativeModel("gemini-1.5-flash")
    result = model.generate_content([
        myfile, "\n\n", "Can you analyze this file and provide insights?", schema
    ], generation_config={"response_mime_type": "application/json"})
    print(result.text)
    response_file_path = os.path.join(app.config['UPLOAD_FOLDER'], "response.json")
    with open(response_file_path, "w") as response_file:
        response_file.write(result.text)
    
    return jsonify({"message": "File processed successfully", "response_file": response_file_path})

@app.route("/ab", methods=["POST"])
def ab():
    data = request.get_json()
    formA = data.get('formA')
    formB = data.get('formB')
    schema = """
    result = {
    "formA": {
        "businessName": "string",
        "headlines": ["suggestion", "suggestion", "suggestion", "suggestion", "suggestion", "suggestion"],
        "siteLink": "string",
        "toggle": "boolean",
        "description": "suggestion",
        "adStrength": "suggestion",
        "bidStrategyBudget": "suggestion number",
        "weeklyCost": "suggestion number"
    },
    "formB": {
        "businessName": "string",
        "headlines": ["suggestion", "suggestion", "suggestion", "suggestion", "suggestion", "suggestion"],
        "siteLink": "string",
        "toggle": "boolean",
        "description": "suggestion",
        "adStrength": "suggestion",
        "bidStrategyBudget": "suggestion number",
        "weeklyCost": "suggestion number"
    }
    }
    """
    model = genai.GenerativeModel("gemini-1.5-flash" , system_instruction="AB Test two forms and provide suggestions for google ads campaign")
    result = model.generate_content([
        {"text": str(formA)}, {"text": str(formB)}, "\n\n", "Can you please analyze these forms and provide suggestions based on trending keywords for google ads campaign", {"text": schema}
    ], generation_config={"response_mime_type": "application/json"},)
    print(result.text)
    
    
    return jsonify(result.text)

@app.route('/generate_formB', methods=['POST'])
def generate_formB():
    formA = request.json.get('formA')
    if not formA:
        return jsonify({"error": "formA is required"}), 400
    schema = """
    result = {"formB": {
        "businessName": "string",
        "headlines": ["suggestion", "suggestion", "suggestion", "suggestion", "suggestion", "suggestion"],
        "siteLink": "string",
        "toggle": "boolean",
        "description": "suggestion",
        "adStrength": "suggestion",
        "bidStrategyBudget": "suggestion number",
        "weeklyCost": "suggestion number"
    }
    }
    """
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="Generate formB based on formA for google ads campaign")
    result = model.generate_content([
        {"text": str(formA)}, "\n\n", "Can you please generate formB based on this formA for google ads campaign which will be more optimised and perform better"
    ], generation_config={"response_mime_type": "application/json"})

    return jsonify(result.text)

@app.route('/ai_insights', methods=['GET'])
def ai_insights():
    schema = """
    response = { campaign_insights: {
        "campaign_name": "string",
        "campaign_id": "string",
        "campaign_start_date": "string",
        "campaign_end_date": "string",
        "campaign_performance": {
            "clicks": "number",
            "impressions": "number",
            "ctr": "number",
            "average_cpc": "number",
            "cost": "number",
            "conversions": "number",
            "conversion_rate": "number",
            "cpa": "number",
            "roas": "number"
        }
    }
    
    keywords = [ new optimised keywords ],
    }

    """    

    data= fetch_data()
    print(data)
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google ads campaign insights and optimised keywords for the campaign , please provide the insights and optimised keywords")
    result = model.generate_content([
        {"text": str(data)}, "\n\n", "Can you please provide insights and optimised keywords for this google ads campaign", {"text": schema}
    ], generation_config={"response_mime_type": "application/json"})
    print(result.text)
    return (result.text)

def fetch_data():
    response = supabase.table("google_ads_keyword_report").select("*").execute()
    print(response.data)
    return (response.data)

def fetch_search():
    response = supabase.table("google_search_console").select("*").execute()
    return (response.data)

@app.route('/analyse_google_search', methods=['GET'])
def analyse_google_search():
    schema = """
    response = {
        "search_insights": {
            "search_queries": ["string"],
            "clicks": "number",
            "impressions": "number",
            "ctr": "number",
            "average_position": "number"
        },
        future_insights: {
            "search_queries": ["string"],
            "clicks": "number",
            "impressions": "number",
            "ctr": "number",
            "average_position": "number"
        },
        "trending_keywords": ["string"],
        "seo_suggestions": ["string"]
        
    }
    """
    data= fetch_search()
    print(data)
    with open("google_search_data.txt", "w") as file:
        file.write(str(data))
    myfile = genai.upload_file("google_search_data.txt")
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google search console insights, please provide the asked data ")
    result = model.generate_content([
        "\n\n", "Can you please provide insights for this google search console data , according to the data provide the trending keywords and seo suggestions for improvement", {"text": schema}
    ,myfile], generation_config={"response_mime_type": "application/json"})
    return (result.text)


@app.route('/google_metrics', methods=['POST'])
# google ads metrics
def google_metrics():
    print(request.json)
    # form = request.json.get('formA')
    # print(form)
    

    schema = """
    response = {
        "campaign_insights": {
            "campaign_name": "string",
            "campaign_id": "string",
            "campaign_start_date": "string",
            "campaign_end_date": "string",
            "campaign_performance": {
                "clicks": "number",
                "impressions": "number",
                "ctr": "number",
                "average_cpc": "number",
                "cost": "number",
                "conversions": "number",
                "conversion_rate": "number",
                "cpa": "number",
                "roas": "number"
            }
        },
        "keywords": ["string"]
        
    }
    """
    
    myfile = genai.upload_file("google_ads_data.txt")
    print(myfile)
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google ads campaign insights and optimised keywords for a campaign and you'll be provided a new campaign - give me simulation of the new campaign / future metrics")   
    result = model.generate_content([myfile, str(request.json) + schema, "\n\n", "Can you please provide insights and simulate the future metrics for this google ads campaign?"], generation_config={"response_mime_type": "application/json"})
    return jsonify(result.text)

@app.route('/get_all_stats' , methods=['GET'])
def get_all_stats():
    file1=genai.upload_file("google_ads_data.txt")
    schema = """
    {
    number_of_clicks: "number",
    number_of_impressions: "number",
    ctr: "number",
    average_cpc: "number",
    cost: "number",
    search_queries: ["string"],
    average_position: "number"
    keywords_impressions: { keyword: "string", impressions: "number" }
    }
    """
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google ads campaign insights and google search console insights, please provide the asked data ")
    result = model.generate_content([file1, "\n\n", "Can you please provide insights for this google ads campaign and google search console data"+ schema], generation_config={"response_mime_type": "application/json"})
    return jsonify(result.text)

@app.route('/get_stats', methods=['GET'])
def get_stats():
    file2 = genai.upload_file("google_search_data.txt")
    schema = """
    {
    country: [], 
    device: { desktop: "number", mobile: "number", tablet: "number" },
    search_type: { web: "number"},
    }
    """
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google search data, please provide the asked data")
    result = model.generate_content([file2, "\n\n", "Can you please provide insights for this google search data" + schema], generation_config={"response_mime_type": "application/json"})
    return jsonify(result.text)

@app.route('/get_campaigns', methods=['GET'])
def get_campaigns():
    schema = """
    response={
    [campaign_name: "string",
    campaign_id: "string",
    campaign_start_date: "string",
    campaign_end_date: "string",
    campaign_performance: {
        clicks: "number",
        impressions: "number",
        ctr: "number",
        average_cpc: "number",
        cost: "number",
        conversions: "number",
        conversion_rate: "number",
        cpa: "number",
        roas: "number"
    }]
    }
    """
    
    
    model = genai.GenerativeModel("gemini-1.5-flash", system_instruction="You'll be provided with the google ads campaign insights, please provide the asked data ")
    with open("goog_ads.txt", "r") as f:
        file_content = f.read()
    result = model.generate_content([file_content, "\n\n", "Can you please provide insights for this google ads campaign" + schema], generation_config={"response_mime_type": "application/json"})
    return jsonify(result.text)

if __name__ == "__main__":
    app.run(debug=True)
