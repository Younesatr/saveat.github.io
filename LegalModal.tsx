import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            {type === 'privacy' ? <Shield className="text-green-600" /> : <FileText className="text-green-600" />}
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <div className="prose prose-green max-w-none text-gray-600">
            {type === 'privacy' ? (
              <>
                <p className="text-sm text-gray-500 mb-4">Last updated: May 20, 2024</p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">1. Information We Collect</h3>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact customer support. This may include your name, email address, phone number, and location data to show you relevant food deals.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">2. How We Use Your Information</h3>
                <p className="mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including to facilitate surplus food reservations, process transactions, and send you related information, including confirmations and receipts.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">3. Data Security</h3>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-4">Last updated: May 20, 2024</p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">1. Acceptance of Terms</h3>
                <p className="mb-4">
                  By accessing or using the SavEat platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">2. Food Rescue Reservations</h3>
                <p className="mb-4">
                  SavEat acts as an intermediary between users and food businesses. We do not prepare the food. While we strive to ensure accurate descriptions, the actual contents of "Surprise Bags" may vary based on daily surplus.
                </p>
                <h3 className="text-lg font-bold text-slate-800 mb-2">3. User Conduct</h3>
                <p className="mb-4">
                  You agree to pick up reserved food within the specified time window. Failure to collect reserved items may result in restricted access to the platform.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;