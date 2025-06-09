
import React from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  position: 'header' | 'footer' | 'sidebar' | 'in-content';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className }) => {
  const getAdContent = () => {
    switch (position) {
      case 'header':
      case 'footer':
        return {
          size: '728x90',
          text: 'Advertisement - 728x90 Leaderboard'
        };
      case 'sidebar':
        return {
          size: '300x250',
          text: 'Advertisement - 300x250 Medium Rectangle'
        };
      case 'in-content':
        return {
          size: '728x90',
          text: 'Advertisement - In-Content Banner'
        };
      default:
        return {
          size: '728x90',
          text: 'Advertisement'
        };
    }
  };

  const ad = getAdContent();

  return (
    <div className={cn(
      "flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg my-4",
      position === 'header' || position === 'footer' ? 'h-24' : 'h-64',
      position === 'sidebar' ? 'w-full max-w-sm' : 'w-full max-w-4xl mx-auto',
      className
    )}>
      <div className="text-center text-slate-400 dark:text-slate-500">
        <div className="text-sm font-medium mb-1">{ad.text}</div>
        <div className="text-xs opacity-60">{ad.size}</div>
        <div className="text-xs mt-2 opacity-40">
          Ads help keep JSONUtil.com free for everyone
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
