
import React, { useState } from "react";
import { useModalStore } from "../../../../stores/modalStore";

export default function AudienceDemographicsModal() {
  const { isOpen, selectedNode, closeModal } = useModalStore();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");

  if (!isOpen || selectedNode?.type !== "audienceDemographics") return null;

  const handleSave = () => {
    // Save audience demographics data logic
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Audience Demographics Configuration</h2>
      <div>
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
