import React, { useState } from "react";
import { Switch } from "@headlessui/react"; // For toggle switch

const Form = () => {
  const [adStrength, setAdStrength] = useState("Poor");
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex space-x-8 w-full justify-center mt-10">
      {/* Form 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Google Ads - New Campaign A</h2>

        {/* Headline Inputs */}
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>

        {/* Descriptions */}
        <div className="mb-4">
          <label className="text-sm font-medium">Descriptions (3/4)</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your ad description..."
            rows="3"
          ></textarea>
        </div>

        {/* Business Name */}
        <div className="mb-4">
          <label className="text-sm font-medium">Business Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Your business name"
          />
        </div>

        {/* Toggle: Make Descriptions Unique */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Make descriptions unique</span>
          <Switch
            checked={toggle}
            onChange={setToggle}
            className={`${
              toggle ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                toggle ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>

        {/* Ad Strength */}
        <div className="mb-4 p-3 border rounded bg-gray-50">
          <p className="text-sm font-medium">Ad Strength: <span className="font-semibold">{adStrength}</span></p>
          <p className="text-xs text-gray-500">Add more headlines to increase performance</p>
        </div>

        {/* Preview Section */}
        <div className="border p-3 rounded mb-4">
          <h3 className="text-sm font-medium">Preview</h3>
          <div className="p-3 border rounded bg-gray-100 text-sm">
            <p className="font-semibold">Sponsored</p>
            <p className="text-blue-500">www.example.com</p>
            <p>Sample Ad Headline - Improve Your Marketing Now</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 border rounded">
            <p className="font-medium">Weekly Conversions</p>
            <p className="font-semibold text-blue-600">100</p>
          </div>
          <div className="p-3 border rounded">
            <p className="font-medium">Weekly Cost</p>
            <p className="font-semibold text-red-600">₹4,219</p>
          </div>
        </div>

        {/* Submit Button */}
        <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded">
          Save Campaign
        </button>
      </div>

      {/* Form 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Google Ads - New Campaign B</h2>

        {/* Headline Inputs */}
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Headline"
          />
        </div>

        {/* Descriptions */}
        <div className="mb-4">
          <label className="text-sm font-medium">Descriptions (3/4)</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your ad description..."
            rows="3"
          ></textarea>
        </div>

        {/* Business Name */}
        <div className="mb-4">
          <label className="text-sm font-medium">Business Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Your business name"
          />
        </div>

        {/* Toggle: Make Descriptions Unique */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Make descriptions unique</span>
          <Switch
            checked={toggle}
            onChange={setToggle}
            className={`${
              toggle ? "bg-blue-500" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                toggle ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>

        {/* Ad Strength */}
        <div className="mb-4 p-3 border rounded bg-gray-50">
          <p className="text-sm font-medium">Ad Strength: <span className="font-semibold">{adStrength}</span></p>
          <p className="text-xs text-gray-500">Add more headlines to increase performance</p>
        </div>

        {/* Preview Section */}
        <div className="border p-3 rounded mb-4">
          <h3 className="text-sm font-medium">Preview</h3>
          <div className="p-3 border rounded bg-gray-100 text-sm">
            <p className="font-semibold">Sponsored</p>
            <p className="text-blue-500">www.example.com</p>
            <p>Sample Ad Headline - Improve Your Marketing Now</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 border rounded">
            <p className="font-medium">Weekly Conversions</p>
            <p className="font-semibold text-blue-600">100</p>
          </div>
          <div className="p-3 border rounded">
            <p className="font-medium">Weekly Cost</p>
            <p className="font-semibold text-red-600">₹4,219</p>
          </div>
        </div>

        {/* Submit Button */}
        <button className="mt-5 w-full bg-blue-500 text-white py-2 rounded">
          Save Campaign
        </button>
      </div>
    </div>
  );
};

export default Form;
