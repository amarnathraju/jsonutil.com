import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 lg:py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">JS</span>
              </div>
              <span className="text-lg font-bold text-white">JSONUtil.com</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              The complete JSON utility toolkit for developers. Validate, format, convert, and analyze JSON data with ease. All processing happens in your browser for maximum privacy and speed.
            </p>
            <p className="text-xs text-slate-500">
              © 2024 JSONUtil.com. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">JSON Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/validator" className="hover:text-blue-400 transition-colors">JSON Validator</Link></li>
              <li><Link to="/formatter" className="hover:text-blue-400 transition-colors">JSON Formatter</Link></li>
              <li><Link to="/converter" className="hover:text-blue-400 transition-colors">JSON Converter</Link></li>
              <li><Link to="/diff" className="hover:text-blue-400 transition-colors">JSON Diff Tool</Link></li>
              <li><Link to="/path" className="hover:text-blue-400 transition-colors">JSONPath Tester</Link></li>
              <li><Link to="/schema" className="hover:text-blue-400 transition-colors">Schema Generator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
              <li><a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">JSON Tutorial</a></li>
              <li><Link to="/docs#best-practices" className="hover:text-blue-400 transition-colors">Best Practices</Link></li>
              <li><Link to="/docs#tools" className="hover:text-blue-400 transition-colors">API Guide</Link></li>
              <li><Link to="/docs#getting-started" className="hover:text-blue-400 transition-colors">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs#faq" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
              <li><a href="mailto:support@jsonutil.com" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-slate-400 space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p>Made with ❤️ for developers worldwide. All tools work offline and respect your privacy.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://status.jsonutil.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
