
import React from 'react';

interface AdSenseCompliantWrapperProps {
  children: React.ReactNode;
  hasContent?: boolean;
  minContentHeight?: string;
}

const AdSenseCompliantWrapper: React.FC<AdSenseCompliantWrapperProps> = ({ 
  children, 
  hasContent = true,
  minContentHeight = "min-h-[400px]"
}) => {
  return (
    <div className={`w-full ${minContentHeight}`}>
      {hasContent ? (
        children
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading content...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdSenseCompliantWrapper;
