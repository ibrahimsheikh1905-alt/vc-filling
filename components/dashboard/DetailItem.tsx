import { Calendar, Shield, FileText } from 'lucide-react';

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

interface DetailItemProps {
  label: string;
  value: string;
}

export default function DetailItem({ label, value }: DetailItemProps) {
  const getIcon = () => {
    if (label === 'Due Date') return <Calendar className="w-5 h-5 text-white" />;
    if (label === 'State Fee') return <Shield className="w-5 h-5 text-white" />;
    return <FileText className="w-5 h-5 text-white" />;
  };

  return (
    <li className="flex items-start gap-3 py-3">
      <div className={`w-8 h-8 ${LOGO_GRADIENT} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {getIcon()}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
    </li>
  );
}

