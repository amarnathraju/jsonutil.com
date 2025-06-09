
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavigationProps {
  onItemClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onItemClick }) => {
  const location = useLocation();

  const navItems = [
    { path: '/validator', label: 'Validator' },
    { path: '/formatter', label: 'Formatter' },
    { path: '/converter', label: 'Converter' },
    { path: '/diff', label: 'Diff' },
    { path: '/path', label: 'JSONPath' },
    { path: '/schema', label: 'Schema' },
    { path: '/docs', label: 'Documentation' },
  ];

  return (
    <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
      <nav className="py-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onItemClick}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
