import { Server, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ServerCardProps {
  image: string;
  title: string;
  description: string;
  status: 'online' | 'unreleased';
  ip: string;
}

export function ServerCard({ image, title, description, status, ip }: ServerCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-700">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-white">{title}</h3>
            <span 
              className={`px-2 py-1 text-xs font-medium rounded whitespace-nowrap ${
                status === 'online' 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {status === 'online' ? 'ONLINE' : 'UNRELEASED'}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-3">{description}</p>
          <div className="flex items-center gap-2 bg-gray-900 rounded px-3 py-2 border border-gray-700">
            <Server className="text-red-500" size={16} />
            <code className="text-sm text-gray-300 flex-1 font-mono">{ip}</code>
            <button
              onClick={handleCopyIP}
              className="p-1 hover:bg-gray-700 rounded transition-colors"
              title="Copy IP"
            >
              {copied ? (
                <Check className="text-red-500" size={16} />
              ) : (
                <Copy className="text-gray-500" size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
