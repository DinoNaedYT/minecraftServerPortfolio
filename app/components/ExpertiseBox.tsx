import { CheckCircle } from 'lucide-react';

interface ExpertiseBoxProps {
  title: string;
  items: string[];
}

export function ExpertiseBox({ title, items }: ExpertiseBoxProps) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-gray-700">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
            <span className="text-sm text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
