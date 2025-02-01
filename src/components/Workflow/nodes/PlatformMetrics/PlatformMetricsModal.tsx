
import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore";

export default function PlatformMetricsModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [ctr, setCtr] = useState("");
  const [cpc, setCpc] = useState("");
  const [cpa, setCpa] = useState("");

  if (!isOpen || selectedNode?.type !== "platformMetrics") return null;

  const handleSave = () => {
    // Save platform metrics data logic
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Platform Metrics Configuration</h2>
      <div>
        <label>CTR</label>
        <input
          type="text"
          value={ctr}
          onChange={(e) => setCtr(e.target.value)}
        />
      </div>
      <div>
        <label>CPC</label>
        <input
          type="text"
          value={cpc}
          onChange={(e) => setCpc(e.target.value)}
        />
      </div>
      <div>
        <label>CPA</label>
        <input
          type="text"
          value={cpa}
          onChange={(e) => setCpa(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
