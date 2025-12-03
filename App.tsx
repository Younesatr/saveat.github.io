import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import DealsPreview from './components/DealsPreview';
import ImpactStats from './components/ImpactStats';
import PartnerCTA from './components/PartnerCTA';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Modal from './components/Modal';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for Legal Modal
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalType(type);
    setIsLegalModalOpen(true);
  };
  const closeLegal = () => setIsLegalModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <ProblemSolution />
      <HowItWorks />
      <AppPreview onOpenModal={openModal} />
      <DealsPreview onOpenModal={openModal} />
      <ImpactStats />
      <PartnerCTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} onOpenLegal={openLegal} />
      <AIChat />
      
      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <LegalModal isOpen={isLegalModalOpen} onClose={closeLegal} type={legalType} />
    </div>
  );
};

export default App;