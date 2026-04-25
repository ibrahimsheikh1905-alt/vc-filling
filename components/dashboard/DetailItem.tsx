import { Calendar, Shield, FileText } from 'lucide-react';

interface DetailItemProps {
  label: string;
  value: string;
}

export default function DetailItem({ label, value }: DetailItemProps) {
  const getIcon = () => {
    if (label === 'Due Date') return <Calendar className="w-5 h-5 text-[#FF5722]" />;
    if (label === 'State Fee') return <Shield className="w-5 h-5 text-[#FF5722]" />;
    return <FileText className="w-5 h-5 text-[#FF5722]" />;
  };

  return (
    <li className="flex items-start gap-3 py-3">
      <div className="w-8 h-8 bg-[#FF5722]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
        {getIcon()}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </li>
  );
}

