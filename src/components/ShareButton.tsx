'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: 'Insightful article from Daleon Dynamics - Custom Software & Web Development in Kenya',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-3 px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white rounded-2xl font-medium transition-all duration-200"
    >
      <Share2 className="w-5 h-5" />
      Share this Article
    </button>
  );
}