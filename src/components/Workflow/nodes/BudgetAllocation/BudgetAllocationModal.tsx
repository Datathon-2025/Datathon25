import type React from "react"
import { useState } from "react"
import { useModalStore } from "../../../../stores/modalStore"

const fieldDescriptions = {
  campaignId: "Unique identifier for the campaign",
  date: "Date of the budget allocation",
  dailySpend: "Amount spent on this day",
  cumulativeSpend: "Total amount spent so far",
  roi: "Return on Investment",
  wasteAnalysis: "Analysis of inefficient spending",
}

export default function BudgetAllocationModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore()
  const [isSimulationMode, setIsSimulationMode] = useState(false)
  const [formData, setFormData] = useState({
    campaignId: "",
    date: "",
    dailySpend: "",
    cumulativeSpend: "",
    roi: "",
    wasteAnalysis: "",
  })
  const [selectedFields, setSelectedFields] = useState({
    campaignId: true,
    date: true,
    dailySpend: false,
    cumulativeSpend: false,
    roi: false,
    wasteAnalysis: false,
  })

  if (!isOpen || selectedNode?.type !== "budgetAllocation") return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFields({ ...selectedFields, [e.target.name]: e.target.checked })
  }

  const handleSave = () => {
    const dataToSave = isSimulationMode ? formData : { selectedFields, formData }
    console.log("Saving data:", dataToSave)
    closeModal()
  }

  const renderField = (field: string, label: string) => (
    <div key={field} className="mb-4">
      <label className="block mb-1">
        {label}
        <span className="text-sm text-gray-500 ml-1">
          ({fieldDescriptions[field as keyof typeof fieldDescriptions]})
        </span>
      </label>
      {isSimulationMode ? (
        <input
          type={field === "date" ? "date" : "text"}
          name={field}
          value={formData[field as keyof typeof formData]}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          placeholder={`Target ${label}`}
        />
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            id={field}
            name={field}
            checked={selectedFields[field as keyof typeof selectedFields]}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor={field}>Include {label}</label>
        </div>
      )}
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[32rem] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Budget Allocation</h2>
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
        <div className="space-y-4">
          {renderField("campaignId", "Campaign ID")}
          {renderField("date", "Date")}
          {renderField("dailySpend", "Daily Spend")}
          {renderField("cumulativeSpend", "Cumulative Spend")}
          {renderField("roi", "ROI")}
          {renderField("wasteAnalysis", "Waste Analysis")}
        </div>
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

