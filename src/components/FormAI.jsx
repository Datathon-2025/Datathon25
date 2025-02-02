import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react"; // For toggle switch

const FormAI = () => {
  const [formA, setFormA] = useState({
    businessName: "",
    headlines: ["", "", "", "", "", ""],
    siteLink: "",
    toggle: false,
    description: "",
    adStrength: "",
    bidStrategyBudget: "",
    weeklyCost: "",
  });

  const [formB, setFormB] = useState({
    businessName: "",
    headlines: ["", "", "", "", "", ""],
    siteLink: "",
    toggle: false,
    description: "",
    adStrength: "",
    bidStrategyBudget: "",
    weeklyCost: "",
  });

  const [shuffledHeadline, setShuffledHeadline] = useState("");

  useEffect(() => {
    if (formA.headlines.length > 0) {
      const shuffleHeadlines = () => {
        const shuffled =
          formA.headlines[Math.floor(Math.random() * formA.headlines.length)];
        setShuffledHeadline(shuffled);
      };
      const interval = setInterval(shuffleHeadlines, 3000);
      return () => clearInterval(interval);
    }
  }, [formA.headlines]);

  const handleInputChange =
    (form, setForm, field, index = null) =>
    (e) => {
      const value = e.target.value;
      setForm((prev) => {
        if (index !== null) {
          const headlines = [...prev.headlines];
          headlines[index] = value;
          return { ...prev, headlines };
        }
        return { ...prev, [field]: value };
      });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { formA };
    console.log("Form A:", JSON.stringify(formA, null, 2));

    try {
      const response = await fetch("http://13.61.152.203:8000/generate_formB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      const resultObj = JSON.parse(result);
      const resultObj2 = JSON.parse(resultObj);
      console.log("Result:", resultObj2);
      setFormB(resultObj2);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex space-x-8 w-full justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
          <h2 className="text-xl font-semibold mb-4">
            Google Ads - New Campaign
          </h2>

          <div className="mb-4">
            <label className="text-sm font-medium">Business Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Your business name"
              value={formA.businessName}
              onChange={handleInputChange(formA, setFormA, "businessName")}
            />
          </div>

          {/* Headline Inputs */}
          {formA.headlines.map((headline, index) => (
            <div className="mb-4" key={index}>
              <label className="text-sm font-medium">Headline</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Headline"
                value={headline}
                onChange={handleInputChange(
                  formA,
                  setFormA,
                  "headlines",
                  index
                )}
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="text-sm font-medium">Site Link</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Site Link"
              value={formA.siteLink}
              onChange={handleInputChange(formA, setFormA, "siteLink")}
            />
          </div>

          {/* Toggle: Make Descriptions Unique */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">
              Make descriptions unique
            </span>
            <Switch
              checked={formA.toggle}
              onChange={() =>
                setFormA((prev) => ({ ...prev, toggle: !prev.toggle }))
              }
              className={`${
                formA.toggle ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formA.toggle ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>

          {/* Descriptions */}
          <div className="mb-4">
            <label className="text-sm font-medium">Descriptions (3/4)</label>
            <textarea
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your ad description..."
              rows="3"
              value={formA.description}
              onChange={handleInputChange(formA, setFormA, "description")}
            ></textarea>
          </div>

          {/* Ad Strength */}
          <div className="mb-4 p-3 border rounded bg-gray-50">
            <p className="text-sm font-medium">
              Ad Strength:{" "}
              <span className="font-semibold">{formA.adStrength}</span>
            </p>
            <p className="text-xs text-gray-500">
              Add more headlines to increase performance
            </p>
          </div>

          {/* Preview Section */}
          <div className="border p-3 rounded mb-4">
            <h3 className="text-sm font-medium">Preview</h3>
            <div className="p-3 border rounded bg-gray-100 text-sm">
              <p className="font-semibold">Sponsored</p>
              <p className="text-blue-500 outline-black">
                {formA.siteLink ? formA.siteLink : "www.example.com"}
              </p>
              <p>{shuffledHeadline || "Site Headline"}</p>
              {formA.description && <p>{formA.description}</p>}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 border rounded relative">
              <label className="font-medium">Bid Strategy Budget</label>
              <input
                type="number"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter budget"
                value={formA.bidStrategyBudget || ""}
                onChange={handleInputChange(
                  formA,
                  setFormA,
                  "bidStrategyBudget"
                )}
              />
              <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
                ₹
              </span>
              <div
                className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer"
                title="Enter the budget for your bid strategy"
              >
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
            <div className="p-3 border rounded relative">
              <label className="font-medium">Weekly Cost</label>
              <input
                type="number"
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter weekly cost"
                value={formA.weeklyCost || ""}
                onChange={handleInputChange(formA, setFormA, "weeklyCost")}
              />
              <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
                ₹
              </span>
              <div
                className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer"
                title="Enter the estimated weekly cost"
              >
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 w-full bg-blue-500 text-white py-2 rounded cursor-pointer"
          >
            Transform
          </button>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
          <h2 className="text-xl font-semibold mb-4">
            Google Ads - AI Generated
          </h2>

          <div className="mb-4">
            <label className="text-sm font-medium">Business Name</label>
            <input
              type="text"
              disabled
              className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
              placeholder="Your business name"
              value={formB.businessName}
              onChange={handleInputChange(formB, setFormB, "businessName")}
            />
          </div>

          {/* Headline Inputs */}
          {formB.headlines.map((headline, index) => (
            <div className="mb-4" key={index}>
              <label className="text-sm font-medium">Headline</label>
              <input
                type="text"
                disabled
                className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
                placeholder="Headline"
                value={headline}
                onChange={handleInputChange(
                  formB,
                  setFormB,
                  "headlines",
                  index
                )}
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="text-sm font-medium">Site Link</label>
            <input
              type="text"
              disabled
              className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
              placeholder="Site Link"
              value={formB.siteLink}
              onChange={handleInputChange(formB, setFormB, "siteLink")}
            />
          </div>

          {/* Toggle: Make Descriptions Unique */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">
              Make descriptions unique
            </span>
            <Switch
              checked={formB.toggle}
              onChange={() =>
                setFormB((prev) => ({ ...prev, toggle: !prev.toggle }))
              }
              className={`${
                formB.toggle ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  formB.toggle ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>

          {/* Descriptions */}
          <div className="mb-4">
            <label className="text-sm font-medium">Descriptions (3/4)</label>
            <textarea
              className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
              disabled
              placeholder="Enter your ad description..."
              rows="3"
              value={formB.description}
              onChange={handleInputChange(formB, setFormB, "description")}
            ></textarea>
          </div>

          {/* Ad Strength */}
          <div className="mb-4 p-3 border rounded bg-gray-50">
            <p className="text-sm font-medium">
              Ad Strength:{" "}
              <span className="font-semibold">{formB.adStrength}</span>
            </p>
            <p className="text-xs text-gray-500">
              Add more headlines to increase performance
            </p>
          </div>

          {/* Preview Section */}
          <div className="border p-3 rounded mb-4">
            <h3 className="text-sm font-medium">Preview</h3>
            <div className="p-3 border rounded bg-gray-100 text-sm">
              <p className="font-semibold">Sponsored</p>
              <p className="text-blue-500 outline-black">
                {formB.siteLink ? formB.siteLink : "www.example.com"}
              </p>
              <p>{shuffledHeadline || "Site Headline"}</p>
              {formB.description && <p>{formB.description}</p>}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 border rounded relative">
              <label className="font-medium">Bid Strategy Budget</label>
              <input
                type="number"
                disabled
                className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
                placeholder="Enter budget"
                value={formB.bidStrategyBudget || ""}
                onChange={handleInputChange(
                  formB,
                  setFormB,
                  "bidStrategyBudget"
                )}
              />
              <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
                ₹
              </span>
              <div
                className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer"
                title="Enter the budget for your bid strategy"
              >
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
            <div className="p-3 border rounded relative">
              <label className="font-medium">Weekly Cost</label>
              <input
                type="number"
                disabled
                className="w-full p-2 border rounded mt-1 text-blue-500 outline-black"
                placeholder="Enter weekly cost"
                value={formB.weeklyCost || ""}
                onChange={handleInputChange(formB, setFormB, "weeklyCost")}
              />
              <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">
                ₹
              </span>
              <div
                className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer"
                title="Enter the estimated weekly cost"
              >
                <i className="fas fa-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAI;
