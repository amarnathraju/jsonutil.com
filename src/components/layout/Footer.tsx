
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
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
              <li><a href="#" className="hover:text-blue-400 transition-colors">JSON Tutorial</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Feature Requests</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="mb-4 md:mb-0">
              <p>Made with ❤️ for developers worldwide. All tools work offline and respect your privacy.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Status</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Changelog</a>
              <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
