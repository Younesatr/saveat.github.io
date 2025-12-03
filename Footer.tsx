import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal, onOpenLegal }) => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" onClick={scrollToTop} className="inline-block">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Sav</span>
                <span className="text-green-400">Eat</span>
              </h3>
            </a>
            <p className="text-gray-400 mb-4">Less Planning - More Saving 🤩 !</p>
            <p className="text-gray-400">Built by Food Lovers for Food Lovers.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><Instagram size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">For Users</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  How it works
                </a>
              </li>
              <li>
                <a 
                  href="#download-app" 
                  onClick={(e) => scrollToSection(e, 'download-app')}
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Download app
                </a>
              </li>
              <li><a href="mailto:support@saveat.lt" className="hover:text-green-400 transition">Help center</a></li>
              <li><a href="mailto:hello@saveat.lt" className="hover:text-green-400 transition">Contact us</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">For Business</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={onOpenModal}
                  className="hover:text-green-400 transition text-left cursor-pointer"
                >
                  Become a partner
                </button>
              </li>
              <li>
                <a 
                  href="#for-business"
                  onClick={(e) => scrollToSection(e, 'for-business')} 
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Business dashboard
                </a>
              </li>
              <li>
                 {/* Success stories links to Impact section for now */}
                <a href="#impact" onClick={(e) => scrollToSection(e, 'impact')} className="hover:text-green-400 transition">Success stories</a>
              </li>
              <li><a href="#for-business" onClick={(e) => scrollToSection(e, 'for-business')} className="hover:text-green-400 transition">Resources</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" onClick={scrollToTop} className="hover:text-green-400 transition">About us</a></li>
              <li>
                <a 
                  href="#impact" 
                  onClick={(e) => scrollToSection(e, 'impact')}
                  className="hover:text-green-400 transition cursor-pointer"
                >
                  Our mission
                </a>
              </li>
              <li><a href="mailto:jobs@saveat.lt" className="hover:text-green-400 transition">Careers</a></li>
              <li><a href="mailto:press@saveat.lt" className="hover:text-green-400 transition">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 SavEat. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition">Privacy Policy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;