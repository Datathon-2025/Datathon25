import type React from "react"
import { useState } from "react"
import { useModalStore } from "../../../../stores/modalStore"

export default function AudienceDemographicsModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore()
  const [isSimulationMode, setIsSimulationMode] = useState(false)
  const [formData, setFormData] = useState({
    campaignId: "",
    date: "",
    age: "",
    gender: "",
    location: "",
    device: "",
  })
  const [selectedFields, setSelectedFields] = useState({
    age: false,
    gender: false,
    location: false,
    device: false,
  })

  if (!isOpen || selectedNode?.type !== "audienceDemographics") return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFields({ ...selectedFields, [e.target.name]: e.target.checked })
  }

  const handleSave = () => {
    // Save audience demographics data logic
    const dataToSave = isSimulationMode ? formData : { ...formData, selectedFields }
    console.log("Saving data:", dataToSave)
    closeModal()
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Audience Demographics</h2>
        <div className="mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSimulationMode}
              onChange={(e) => setIsSimulationMode(e.target.checked)}
              className="mr-2"
            />
            <span>Simulation Mode</span>
          </label>
        </div>
        {isSimulationMode ? (
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Target Age Range</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="e.g., 25-34"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Target Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="All">All</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Target Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., New York, USA"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Target Device</label>
              <select
                name="device"
                value={formData.device}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Device</option>
                <option value="Mobile">Mobile</option>
                <option value="Desktop">Desktop</option>
                <option value="Tablet">Tablet</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Campaign ID</label>
              <input
                type="text"
                name="campaignId"
                value={formData.campaignId}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            {["age", "gender", "location", "device"].map((field) => (
              <div key={field} className="flex items-center">
                <input
                  type="checkbox"
                  id={field}
                  name={field}
                  checked={selectedFields[field as keyof typeof selectedFields]}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-end space-x-4">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
          <button onClick={closeModal} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

