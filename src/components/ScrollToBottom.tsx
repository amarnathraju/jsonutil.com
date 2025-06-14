
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if user is at the bottom (within 100px)
      const atBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(atBottom);
      
      // Show button when page is scrollable (not when page is too short to scroll)
      const pageIsScrollable = documentHeight > windowHeight;
      setIsVisible(pageIsScrollable);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScroll = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={handleScroll}
      size="icon"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full w-12 h-12"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? (
        <ChevronUp className="h-5 w-5" />
      ) : (
        <ChevronDown className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ScrollToBottom;
