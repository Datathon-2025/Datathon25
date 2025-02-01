import { create } from 'zustand';
import { Node } from 'reactflow';


type ModalType = "edit" | "start" | "campaign" | "platformMetrics" | "audienceDemographics" | "budgetAllocation" | "marketTrends" | "analysis";


type ModalStore = {
  isOpen: boolean;
  selectedNode: Node | null;
  modalType: ModalType | null;
  openModal: (node: Node, type: ModalType) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedNode: null,
  modalType: null,
  openModal: (node: Node, type: ModalType) => set({ isOpen: true, selectedNode: node, modalType: type }),
  closeModal: () => set({ isOpen: false, selectedNode: null, modalType: null }),
}));