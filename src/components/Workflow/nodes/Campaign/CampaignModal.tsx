import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore";

export default function CampaignModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");

  if (!isOpen || selectedNode?.type !== "campaign") return null;

  const handleSave = () => {
    // Save campaign data logic
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Campaign Configuration</h2>
      <div>
        <label>Campaign Name</label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
      </div>
      <div>
        <label>Campaign Description</label>
        <input
          type="text"
          value={campaignDescription}
          onChange={(e) => setCampaignDescription(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
