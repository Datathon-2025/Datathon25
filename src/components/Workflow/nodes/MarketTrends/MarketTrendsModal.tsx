import React from "react"
import { useState } from "react"
import { useModalStore } from "../../../../stores/modalStore"
import { useWorkflowStore } from "../../../../stores/workflowStore"

const fieldDescriptions = {
  keyword: "The specific search term or phrase being analyzed",
  keywordPerformance: "Metrics indicating how well the keyword is performing in campaigns",
  industryBenchmarks: "Standard performance metrics for the keyword in the industry",
}

export default function MarketTrendsModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore()
  const {isSimulationMode} = useWorkflowStore()
  const [formData, setFormData] = useState({
    keyword: "",
    keywordPerformance: "",
    industryBenchmarks: "",
  })
  const [selectedFields, setSelectedFields] = useState({
    keyword: true,
    keywordPerformance: false,
    industryBenchmarks: false,
  })

  if (!isOpen || selectedNode?.type !== "marketTrends") return null

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <textarea
          name={field}
          value={formData[field as keyof typeof formData]}
          onChange={handleInputChange}
          className="w-full border p-2 rounded h-24"
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
    <div className="fixed inset-0 bg-black/30  flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[32rem] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Market Trends Configuration</h2>
        <div className="space-y-4">
          {renderField("keyword", "Keyword")}
          {renderField("keywordPerformance", "Keyword Performance")}
          {renderField("industryBenchmarks", "Industry Benchmarks")}
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

