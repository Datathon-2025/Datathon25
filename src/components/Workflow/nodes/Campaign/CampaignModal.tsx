import React, { useState, useEffect } from 'react';
import { Switch } from "@headlessui/react"; // For toggle switch
import { useModalStore } from "../../../../stores/modalStore";
import { useWorkflowStore } from '../../../../stores/workflowStore';

export default function CampaignModal({campaignData}) {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const {setCampaignData, setisSimulationMode} = useWorkflowStore();
  const [formA, setFormA] = useState({
    businessName: '',
    headlines: ['', '', '', '', '', ''],
    siteLink: '',
    toggle: false,
    description: '',
    adStrength: '',
    bidStrategyBudget: '',
    weeklyCost: ''
  });

  const [shuffledHeadline, setShuffledHeadline] = useState('');
  const [showForm, setShowForm] = useState(false);

  const getD = () => {
    setFormA({
      businessName: 'CSI KJSCE',
      headlines: ['iDEA Hackathon', 'KJSCE Hackathon', 'Union Bank Hackathon', '', '', ''],
      siteLink: 'https://ideahackathon.com',
      toggle: false,
      description: 'iDEA Hackathon by Union Bank of India and CSI KJSCE',
      adStrength: '',
      bidStrategyBudget: '1.2',
      weeklyCost: '1000'
    })
    setShowForm(true);
    setisSimulationMode(false);

  }

  useEffect(() => {
    if (formA.headlines.length > 0) {
      const shuffleHeadlines = () => {
        const shuffled = formA.headlines[Math.floor(Math.random() * formA.headlines.length)];
        setShuffledHeadline(shuffled);
      };
      const interval = setInterval(shuffleHeadlines, 3000);
      return () => clearInterval(interval);
    }
  }, [formA.headlines]);

  const handleInputChange = (form, setForm, field, index = null) => (e) => {
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

  if (!isOpen || selectedNode?.type !== "campaign") return null;

  const handleSave = () => {
    console.log(formA);
    setCampaignData(formA);
    closeModal();
  };

  const handleSimulate = () => {
    setShowForm(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mx-4 md:mx-auto overflow-y-auto max-h-full relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {!showForm ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Select a Campaign</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded shadow hover:shadow-lg cursor-pointer" onClick={getD}>
                <h3 className="text-lg font-medium">Campaign #1</h3>
                <p className="text-sm text-gray-500">22nd Jan 2025 - 2nd Feb 2025</p>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSimulate}>
                Simulate Campaign
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Google Ads - New Campaign</h2>

            <div className="mb-4">
              <label className="text-sm font-medium">Business Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder="Your business name"
                value={formA.businessName}
                onChange={handleInputChange(formA, setFormA, 'businessName')}
              />
            </div>

            {formA.headlines.map((headline, index) => (
              <div className="mb-4" key={index}>
                <label className="text-sm font-medium">Headline</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Headline"
                  value={headline}
                  onChange={handleInputChange(formA, setFormA, 'headlines', index)}
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
                onChange={handleInputChange(formA, setFormA, 'siteLink')}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Make descriptions unique</span>
              <Switch
                checked={formA.toggle}
                onChange={() => setFormA((prev) => ({ ...prev, toggle: !prev.toggle }))}
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

            <div className="mb-4">
              <label className="text-sm font-medium">Descriptions (3/4)</label>
              <textarea
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your ad description..."
                rows="3"
                value={formA.description}
                onChange={handleInputChange(formA, setFormA, 'description')}
              ></textarea>
            </div>

            <div className="mb-4 p-3 border rounded bg-gray-50">
              <p className="text-sm font-medium">Ad Strength: <span className="font-semibold">{formA.adStrength}</span></p>
              <p className="text-xs text-gray-500">Add more headlines to increase performance</p>
            </div>

            <div className="border p-3 rounded mb-4">
              <h3 className="text-sm font-medium">Preview</h3>
              <div className="p-3 border rounded bg-gray-100 text-sm">
                <p className="font-semibold">Sponsored</p>
                <p className="text-blue-500">{formA.siteLink ? formA.siteLink : 'www.example.com'}</p>
                <p>{shuffledHeadline || 'Site Headline'}</p>
                {formA.description && <p>{formA.description}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 border rounded relative">
                <label className="font-medium">Bid Strategy Budget</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Enter budget"
                  value={formA.bidStrategyBudget || ''}
                  onChange={handleInputChange(formA, setFormA, 'bidStrategyBudget')}
                />
                <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">₹</span>
                <div className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer" title="Enter the budget for your bid strategy">
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
              <div className="p-3 border rounded relative">
                <label className="font-medium">Weekly Cost</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Enter weekly cost"
                  value={formA.weeklyCost || ''}
                  onChange={handleInputChange(formA, setFormA, 'weeklyCost')}
                />
                <span className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">₹</span>
                <div className="absolute top-0 right-0 mt-2 mr-8 text-gray-500 cursor-pointer" title="Enter the estimated weekly cost">
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={handleSave}>
                Save Campaign
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
