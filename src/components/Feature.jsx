import { ArrowRight, ArrowDown } from "lucide-react"; // Import ArrowDown
import scrollImage from "../assets/image.png";

const features = [
  {
    icon: "🗺️",
    title: "Hotspot Mapping",
    description: "Dynamic mapping helps locate people in need as well as connecting donors or people willing to donate food.",
    link: "#hotspot-mapping",
  },
  {
    icon: "⚡",
    title: "Realtime Connectivity",
    description: "Connect in real-time with users or restaurants willing to donate food.",
    link: "#realtime-connectivity",
  },
  {
    icon: "📱",
    title: "Easy Accessibility",
    description: "Receive notifications and alerts via WhatsApp and SMS services.",
    link: "#easy-accessibility",
  },
  {
    icon: "📢",
    title: "Manage Campaigns with Ease",
    description: "Easily create and manage food donation campaigns to reach a larger audience.",
    link: "#manage-campaigns",
  },
];

const scrollToFeatures = () => {
  document.getElementById("features-section").scrollIntoView({ behavior: "smooth" });
};

const Feature = () => {
  return (
    <section className="py-12 bg-gray-100" id="features-section">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <button onClick={scrollToFeatures} className="flex flex-col items-center">
            <ArrowDown size={48} className="animate-bounce mb-2" />
            <span className="text-xl font-bold mb-4 text-gray-500">Scroll to Features</span>
          </button>
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-500">
          Automate decision-making, allocate budgets efficiently, and personalize marketing strategies with our multi-agent AI system.
        </h3>
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="mt-4 text-blue-500 flex items-center justify-center">
                Learn More <ArrowRight className="ml-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;