import Img1 from '../assets/image1.png';
import Img2 from '../assets/image2.png';
import Img3 from '../assets/image3.png';
import Img4 from '../assets/image4.png';
import Img5 from '../assets/image5.png';
import Img6 from '../assets/image6.png';

export function Feature() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
        <div className="space-y-24">
          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-4 xl:pr-16">
              <img
                alt="Hotspot Mapping"
                src={Img1}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <h3 className="text-8xl font-semibold text-gray-900">Hotspot Mapping.</h3>
              <p className="mt-4 text-2xl text-gray-700">
                Uses dynamic mapping technology to identify areas where food donations are needed the most.
                Connects donors, volunteers, and organizations with people in need in real time.
                Uses AI to analyze trends and predict future hotspots for better resource distribution.
              </p>
            </div>
          </section>

          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 lg:pl-4 xl:pl-16">
              <img
                alt="Realtime Connectivity"
                src={Img2}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8">
              <h3 className="text-8xl font-semibold text-gray-900">Realtime Connectivity.</h3>
              <p className="mt-4 text-2xl text-gray-700">
                Enables instant connections between donors, recipients, and volunteers.
                Uses a messaging system for direct communication between restaurants, donors, and individuals.
                Allows real-time updates on donation availability and requests.
              </p>
            </div>
          </section>

          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-4 xl:pr-16 h">
              <img
                alt="Easy Accessibility"
                src={Img3}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 h-100">
              <h3 className="text-8xl font-semibold text-gray-900">Easy Accessibility.</h3>
              <p className="mt-4 text-2xl text-gray-700">
                Sends alerts and notifications via WhatsApp and SMS for seamless communication.
                Ensures users stay updated on new campaigns, donation requests, and AI insights.
                Provides a mobile-friendly interface for quick and easy access.
              </p>
            </div>
          </section>

          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 lg:pl-4 xl:pl-16">
              <img
                alt="Manage Campaigns with Ease"
                src={Img4}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8">
              <h3 className="text-7xl font-semibold text-gray-900">Manage Campaigns with Ease.</h3>
              <p className="mt-4 text-2xl text-gray-700">
                Allows users to create, edit, and track donation campaigns effortlessly.
                Uses AI-driven recommendations to improve campaign reach and impact.
                Provides real-time analytics on campaign performance.
              </p>
            </div>
          </section>

          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-4 xl:pr-16 h">
              <img
                alt="Easy Accessibility"
                src={Img5}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 h-100">
              <h3 className="text-8xl font-semibold text-gray-900">Automated Decision Making.</h3>
              <p className="mt-4 text-2xl text-gray-700">
              Uses intelligent agents to analyze campaign performance and suggest next steps.
                Automates A/B testing to determine the best-performing strategies.
                Reduces manual effort by making data-driven marketing decisions automatically.
              </p>
            </div>
          </section>

          <section aria-labelledby="features-heading" className="relative flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 lg:pl-4 xl:pl-16">
              <img
                alt="Manage Campaigns with Ease"
                src={Img6}
                className="h-3/4 w-3/4 object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8">
              <h3 className="text-7xl font-semibold text-gray-900">Performance Analytics.</h3>
              <p className="mt-4 text-2xl text-gray-700">
              Fetches and visualizes data from Google Search Console.
               Provides insights on site traffic, search rankings, and user engagement.
               Uses AI to suggest improvements for better SEO and site performance.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Feature;