
import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore";

export default function BudgetAllocationModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [dailySpend, setDailySpend] = useState("");
  const [cumulativeSpend, setCumulativeSpend] = useState("");
  const [roi, setRoi] = useState("");

  if (!isOpen || selectedNode?.type !== "budgetAllocation") return null;

  const handleSave = () => {
    // Save budget allocation data logic
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Budget Allocation Configuration</h2>
      <div>
        <label>Daily Spend</label>
        <input
          type="text"
          value={dailySpend}
          onChange={(e) => setDailySpend(e.target.value)}
        />
      </div>
      <div>
        <label>Cumulative Spend</label>
        <input
          type="text"
          value={cumulativeSpend}
          onChange={(e) => setCumulativeSpend(e.target.value)}
        />
      </div>
      <div>
        <label>ROI</label>
        <input
          type="text"
          value={roi}
          onChange={(e) => setRoi(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
