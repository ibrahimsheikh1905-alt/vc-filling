"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth';

import { 
  AlertCircle, 
  History, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  Shield,
  FileText,
  X,
  ChevronUp,
  ChevronDown,
  Loader2
} from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

interface AnnualReport {
  id: number;
  userId: number | null;
  company: string;
  state: string;
  fiscalYear: number;
  filedDate: string | null;
  status: string;
  amount: number | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export default function ComplianceTasks() {
  const router = useRouter();
  const { userId } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Server connection state
  const [activeReports, setActiveReports] = useState<AnnualReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

// Fetch annual reports from server using userId
  useEffect(() => {
    const fetchReports = async () => {
      if (!userId) {
        setLoading(false);
        console.log('No userId found, skipping fetch');
        return;
      }

      try {
        setLoading(true);
        console.log('Fetching annual reports for userId:', userId);
        const response = await fetch(`/api/annual-reports?userId=${userId}`);
        const data = await response.json();
        
        console.log('API Response:', data);
        
        if (data.success && data.annualReports) {
          console.log('Annual reports from server:', data.annualReports);
          
          // Filter for pending/reports that need filing
          const pending = data.annualReports.filter(
            (r: AnnualReport) => r.status === 'Pending' || r.status === 'pending'
          );
          console.log('Filtered pending reports:', pending);
          setActiveReports(pending);
        }
      } catch (err) {
        console.error('Error fetching annual reports:', err);
        setError('Failed to load compliance tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [userId]);

  // Get the first active report for display
  const currentReport = activeReports[0];

// Calculate due date based on fiscal year OR filed date from the report
  // If report is already filed (has filedDate), use NEXT year (filedDate year + 1)
  // Otherwise use fiscalYear + 1 (report is pending/not filed)
  const getDueDate = (report: AnnualReport) => {
    // If already filed, due date is NEXT year after filedDate
    if (report.filedDate && report.filedDate !== null && report.filedDate !== '') {
      // Parse the filedDate to get month and day
      const filedDateObj = new Date(report.filedDate);
      const filedYear = filedDateObj.getFullYear();
      const filedMonth = filedDateObj.getMonth();
      const filedDay = filedDateObj.getDate();
      
      if (filedYear > 2000 && filedYear < 2100) {
        // Return same month/day with NEXT year (+1)
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        return `${monthNames[filedMonth]} ${filedDay}, ${filedYear + 1}`;
      }
    }
    
    // If not filed, use fiscalYear + 1
    const reportYear = report.fiscalYear;
    const dueYear = (reportYear && reportYear > 2000 && reportYear < 2100) 
      ? reportYear + 1 
      : new Date().getFullYear() + 1;
    return `August 31, ${dueYear}`;
  };

  // Check if report is already filed
  const isFiled = (report: AnnualReport) => {
    return report.filedDate && report.filedDate !== null && report.filedDate !== '';
  };

  // Format the filed date for display
  const getFiledDateDisplay = (report: AnnualReport) => {
    if (report.filedDate) {
      return `Filed: ${report.filedDate}`;
    }
    return null;
  };

  // Calculate next year for new compliance tasks
  const getNextYearDueDate = () => {
    const currentYear = new Date().getFullYear();
    return `August 31, ${currentYear + 1}`;
  };

  // Get the due date for display based on report status
  const getDueDateDisplay = () => {
    if (currentReport) {
      if (isFiled(currentReport)) {
        // If already filed, show next year's deadline
        return getDueDate({ ...currentReport, fiscalYear: currentReport.fiscalYear + 1 });
      }
      // If not filed, show due date based on fiscal year
      return getDueDate(currentReport);
    }
    return getNextYearDueDate();
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px] font-sans antialiased">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
          <p className="text-gray-500 font-medium">Loading compliance tasks...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[300px] font-sans antialiased">
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="w-10 h-10 text-red-500" />
          <p className="text-red-500 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-cyan-500 font-bold hover:underline"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 font-sans antialiased text-left relative p-8 bg-gray-50 min-h-screen">
      
      {/* 1. Active Task Card - Dynamic Data from Server */}
      <div className="bg-white border border-gray-100 rounded-[20px] p-7 shadow-sm max-w-[340px]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>State Requirement</span>
              <span className="opacity-40">•</span>
              <span>{currentReport?.state || 'N/A'}</span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-cyan-500 bg-cyan-50 p-0.5 rounded-full hover:bg-cyan-100 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="space-y-0.5">
            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">Annual Report</h2>
            <p className="text-[14px] text-gray-500 font-medium pt-2">
              {currentReport ? (
                <>
                  Company: <span className="text-gray-700">{currentReport.company}</span>
                </>
              ) : (
                <span>No pending reports</span>
              )}
            </p>
<p className="text-[14px] text-gray-500 font-medium">
              Total fee: ${currentReport?.amount || '109'}
            </p>
<p className="text-[14px] text-gray-500 font-medium">
              {currentReport ? (
                <>Due: {getDueDate(currentReport)}</>
              ) : (
                <>Due: {getNextYearDueDate()}</>
              )}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => router.push('/dashboard/annual-report')}
              className={`${LOGO_GRADIENT} group relative w-full overflow-hidden text-white font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] hover:brightness-110 shadow-md shadow-cyan-100`}
            >
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {activeReports.length > 0 ? 'Start Filing' : 'View Reports'} <ArrowRight className="w-4 h-4 stroke-[3px]" />
              </span>
            </button>
          </div>
        </div> 
      </div>

      {/* --- INFO MODAL (POPUP) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[32px] p-10 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

<div className="space-y-8">
              <div className="flex items-center gap-2 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
                <span>State Requirement</span>
                <span className="opacity-40">•</span>
                <span>{currentReport?.state || 'Missouri'}</span>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Annual Report</h2>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Frequency:</span>
                    <span className="text-gray-400 font-medium">Annually</span>
                  </div>
<div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Due Date:</span>
                    <span className="text-gray-400 font-medium">
                      {currentReport ? getDueDate(currentReport) : getNextYearDueDate()}
                    </span>
                  </div>
                  {currentReport && isFiled(currentReport) && (
                    <div className="flex items-center gap-2 text-[19px]">
                      <span className="font-bold text-gray-500">Filed:</span>
                      <span className="text-green-600 font-medium">{currentReport.filedDate}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">State Fee:</span>
                    <span className="text-gray-400 font-medium">
                      ${currentReport?.amount ? (currentReport.amount * 0.1).toFixed(2) : '10.00'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Filing Fee:</span>
                    <span className="text-gray-400 font-medium">
                      ${currentReport?.amount ? (currentReport.amount * 0.9).toFixed(2) : '99.00'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className={`${LOGO_GRADIENT_SOFT} ${LOGO_GRADIENT_TEXT} w-full py-4 mt-4 font-bold rounded-2xl hover:brightness-95 transition-colors text-lg`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Expandable Info - Dynamic Data from Server */}
      <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden max-w-5xl">
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-8 flex items-center justify-between cursor-pointer hover:bg-gray-50/20 transition-colors"
        >
          <div className="flex items-center gap-5">
            <div className={`${LOGO_GRADIENT} w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm`}>
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[17px] text-gray-900 tracking-tight">
                {currentReport ? `${currentReport.state}: Annual Report` : 'Annual Report'}
              </h3>
              <p className="text-gray-500 text-sm font-medium mt-0.5">
                Frequency: <span className="text-gray-700">Annually</span>
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
        
{isExpanded && currentReport && (
          <div className="px-8 pb-10 pt-4 border-t border-gray-50 ml-16 animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className={`${LOGO_GRADIENT} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm`}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
<p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Due Date</p>
                  <p className="text-xl font-bold text-gray-900">
                    {getDueDate(currentReport)}
                  </p>
                </div>
              </li>
              {isFiled(currentReport) && (
                <li className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-600 uppercase tracking-wide">Filed Date</p>
                    <p className="text-xl font-bold text-green-700">{currentReport.filedDate}</p>
                  </div>
                </li>
              )}
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className={`${LOGO_GRADIENT} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm`}>
                  <Shield className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">State Fee</p>
                  <p className="text-xl font-bold text-gray-900">${currentReport.amount ? (currentReport.amount * 0.1).toFixed(2) : '10.00'}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className={`${LOGO_GRADIENT} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm`}>
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Filing Fee</p>
                  <p className="text-xl font-bold text-gray-900">${currentReport.amount ? (currentReport.amount * 0.9).toFixed(2) : '99.00'}</p>
                </div>
              </li>
            </ul>
          </div>
        )}
        
        {!currentReport && isExpanded && (
          <div className="px-8 pb-10 pt-4 border-t border-gray-50 ml-16 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="text-gray-500 font-medium p-4">
              No annual report data found. Add a report to see details.
            </div>
          </div>
        )}
      </div>

      {/* 3. Upgrade Banner */}
      <div className={`relative ${LOGO_GRADIENT_SOFT} border border-cyan-200 rounded-[24px] p-10 overflow-hidden`}>
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-6 py-1 rounded-full border border-cyan-200 ${LOGO_GRADIENT_TEXT} font-bold text-sm uppercase tracking-wider`}>
          BEST DEAL
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center pt-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Upgrade to Unlimited State Filings
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
              Receive full year of unlimited access to all state filing services and save hundreds every year.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 min-w-0">
            {[
              "Annual Report", "Articles of Amendment", "DBA", "Certificate of Good Standing",
              "Foreign Qualification", "Dissolution", "Reinstatement", "Change of Registered Agent"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className={`${LOGO_GRADIENT} w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className="w-3 h-3 text-white stroke-[3px]" />
                </div>
                <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center pt-8">
            <button onClick={() => router.push('/dashboard/annual-report')} className={`${LOGO_GRADIENT} group relative overflow-hidden text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-xl text-lg`}>
            <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
            <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative z-10 flex items-center gap-2">Buy Now <ArrowRight className="w-5 h-5" /></span>
          </button>
        </div>
      </div>

      {/* 4. Filing History Footer */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-8 flex items-center justify-between max-w-4xl">
        <div className="flex items-center gap-4">
          <div className={`${LOGO_GRADIENT} w-12 h-12 rounded-2xl flex items-center justify-center shadow-md`}>
            <History className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">Filing History</h4>
            <p className="text-gray-600 font-medium">To see the documents you have already filed, visit your Order History</p>
          </div>
        </div>
        <button onClick={() => router.push('/dashboard/226041533405')} className={`${LOGO_GRADIENT} group relative overflow-hidden text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-xl`}>
          <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
          <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
          <span className="relative z-10">Go to Order History</span>
        </button>
      </div>
    </div>
  );
}
