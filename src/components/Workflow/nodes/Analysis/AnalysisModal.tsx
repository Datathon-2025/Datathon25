
import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore.ts";

export default function AnalysisModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [filter, setFilter] = useState("");
  const [aggregation, setAggregation] = useState("");
  const [calculation, setCalculation] = useState("");

  if (!isOpen || selectedNode?.type !== "analysis") return null;

  const handleSave = () => {
    // Save analysis data logic
    closeModal();
  };
  return null;
  return (
    <div className="modal">
      <h2>Analysis Configuration</h2>
      <div>
        <label>Filter</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div>
        <label>Aggregation</label>
        <input
          type="text"
          value={aggregation}
          onChange={(e) => setAggregation(e.target.value)}
        />
      </div>
      <div>
        <label>Calculation</label>
        <input
          type="text"
          value={calculation}
          onChange={(e) => setCalculation(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
