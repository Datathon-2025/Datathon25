
import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore";

export default function MarketTrendsModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [keywordPerformance, setKeywordPerformance] = useState("");
  const [benchmarks, setBenchmarks] = useState("");

  if (!isOpen || selectedNode?.type !== "marketTrends") return null;

  const handleSave = () => {
    // Save market trends data logic
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Market Trends Configuration</h2>
      <div>
        <label>Keyword Performance</label>
        <input
          type="text"
          value={keywordPerformance}
          onChange={(e) => setKeywordPerformance(e.target.value)}
        />
      </div>
      <div>
        <label>Benchmarks</label>
        <input
          type="text"
          value={benchmarks}
          onChange={(e) => setBenchmarks(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
