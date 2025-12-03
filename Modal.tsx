import React, { useState } from 'react';
import { X, Check, Loader2, AlertTriangle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState<'user' | 'business'>('user');
  
  // Form State
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Vilnius');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare data using FormData (Mimics standard HTML <form> submission)
    const formData = new FormData();
    
    // Core settings
    formData.append("email", email); // Using 'email' is better for FormSubmit validation
    formData.append("_subject", `New SavEat Signup: ${type === 'business' ? 'Partner Request' : 'Early Access'}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false"); // Prevents redirect to captcha page
    
    // Custom fields
    formData.append("user_type", type);
    formData.append("selected_city", city);
    if (type === 'business') {
      formData.append("business_name", businessName);
    }

    try {
      // Sending to the AJAX endpoint to keep user on the page
      const response = await fetch("https://formsubmit.co/ajax/a.you7nes@gmail.com", {
        method: "POST",
        body: formData // fetch automatically sets the correct Content-Type for FormData
      });

      const result = await response.json();
      console.log("FormSubmit Result:", result);

      if (response.ok) {
        setSubmitted(true);
        // Reset inputs
        setEmail('');
        setBusinessName('');
      } else {
        alert(`Submission failed: ${result.message || "Please check your internet connection."}`);
      }
    } catch (error) {
      console.error("Submission Network Error:", error);
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
              
              {/* IMPORTANT: Activation Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-left">
                <div className="flex gap-2 items-start mb-2">
                  <AlertTriangle className="text-blue-500 shrink-0" size={20} />
                  <p className="text-sm font-bold text-blue-800">One Last Step</p>
                </div>
                <p className="text-sm text-blue-700">
                  If this is your first time using this form, you <strong>must activate it</strong>. 
                  Check your inbox (and Spam) for an email from <strong>FormSubmit</strong> and click "Activate".
                </p>
              </div>

              <p className="text-gray-600 mb-6">
                Once activated, this submission (and all future ones) will appear in your inbox instantly.
              </p>
              
              <button 
                onClick={onClose}
                className="w-full bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
              >
                Got it
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get Early Access 🚀</h2>
              <p className="text-gray-600 mb-6">
                Be the first to rescue food and save money in Lithuania.
              </p>

              <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
                <button 
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${type === 'user' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setType('user')}
                  type="button"
                >
                  I want to Eat 🍽️
                </button>
                <button 
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${type === 'business' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setType('business')}
                  type="button"
                >
                  I'm a Business 💼
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-slate-900 placeholder:text-gray-400"
                  />
                </div>
                
                {type === 'business' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input 
                      type="text" 
                      name="business_name"
                      required 
                      placeholder="Your Restaurant / Cafe"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-slate-900 placeholder:text-gray-400"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <select 
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white text-slate-900 font-medium"
                  >
                    <option value="Vilnius" className="text-slate-900">Vilnius</option>
                    <option value="Kaunas" className="text-slate-900">Kaunas</option>
                    <option value="Klaipėda" className="text-slate-900">Klaipėda</option>
                    <option value="Šiauliai" className="text-slate-900">Šiauliai</option>
                    <option value="Panevėžys" className="text-slate-900">Panevėžys</option>
                    <option value="Other" className="text-slate-900">Other</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    type === 'user' ? 'Join Waitlist' : 'Partner Request'
                  )}
                </button>
              </form>
              <p className="text-xs text-center text-gray-400 mt-4">
                No spam, just savings. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;