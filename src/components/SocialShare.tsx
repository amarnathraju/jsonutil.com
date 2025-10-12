import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description }) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description || title,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-slate-600 dark:text-slate-400">Share:</span>
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="sm"
          asChild
          className={link.color}
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </Button>
      ))}
      {navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleNativeShare}
          className="hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <Share2 className="w-4 h-4 mr-1" />
          Share
        </Button>
      )}
    </div>
  );
};

export default SocialShare;
