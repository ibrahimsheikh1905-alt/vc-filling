"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth';
import { 
  AlertTriangle, 
  Mail, 
  PhoneCall, 
  ArrowLeft, 
  FileX, 
  CheckCircle,
  Loader2,
  Building,
  MapPin,
  Calendar,
  User
} from 'lucide-react';

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";


interface Issue {
  id: number;
  userId: number | null;
  type: string;
  company: string | null;
  state: string;
  status: string;
  rejectionReason: string | null;
  details: string | null;
  submittedAt: string | null;
  updatedAt: string | null;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

const PendingIssuePage = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch rejected applications (issues) from API
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setLoading(true);
        
        // Build URL with userId if available
        let url = '/api/issues';
        if (userId) {
          url += `?userId=${userId}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.issues) {
          setIssues(data.issues);
        }
      } catch (err) {
        console.error('Error fetching issues:', err);
        setError('Failed to load issues');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [userId]);

  // Format date for display
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Show loading state
  if (loading) {
    return (
      <main className="flex-1 min-h-screen p-6 md:p-10 bg-slate-50 font-sans antialiased">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-[#2B93C9]" />
              <p className="text-slate-500 font-medium">Loading issues...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main className="flex-1 min-h-screen p-6 md:p-10 bg-slate-50 font-sans antialiased">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <AlertTriangle className="w-10 h-10 text-red-500" />
              <p className="text-red-500 font-medium">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className={`${LOGO_GRADIENT_TEXT} font-bold hover:underline`}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

// Filter issues to show only REJECTED status (as per user requirement)
  const pendingIssues = issues.filter((issue: Issue) => 
    issue.status === 'rejected'
  );

  // If no pending issues found (all approved)
  if (pendingIssues.length === 0) {
    return (
      <main className="flex-1 min-h-screen p-6 md:p-10 bg-slate-50 font-sans antialiased">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <header className="mb-10">
            <button 
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 text-slate-500 hover:text-[#2B93C9] transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Dashboard</span>
            </button>
            
            <span className={`${LOGO_GRADIENT_SOFT} ${LOGO_GRADIENT_TEXT} inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] shadow-sm`}>
              Dashboard
            </span>
            <h1 className={`mt-3 text-3xl md:text-4xl font-bold tracking-tight ${LOGO_GRADIENT_TEXT}`}>My Submissions</h1>
            <div className="flex gap-6 mt-4">
              <a href="mailto:info@incorpbay.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2B93C9] transition-colors">
                <Mail className="w-4 h-4" />
                info@incorpbay.com
              </a>
              <a href="tel:1-888-888-8888" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2B93C9] transition-colors">
                <PhoneCall className="w-4 h-4" />
                1-888-888-8888
              </a>
            </div>
          </header>

          {/* No Pending Issues - Success State */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-[#2B93C9]/10">
            <div className="p-12 text-center">
              <div className={`${LOGO_GRADIENT} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg shadow-[#2B93C9]/25`}>
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">All Clear!</h2>
              <p className="text-slate-500 font-medium">
                No pending submissions. Your applications are all approved.
              </p>
              <button 
                onClick={() => router.push('/dashboard')}
                className={`${LOGO_GRADIENT} group relative mt-6 overflow-hidden rounded-2xl px-6 py-3 font-bold text-white shadow-lg shadow-[#2B93C9]/30 transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:scale-95`}
              >
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-2xl bg-gradient-to-b from-white/20 to-transparent" />
                <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10">Return to Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

// Get all pending issues for display as a list
  // Already filtered above

  return (
    <main className="flex-1 min-h-screen p-6 md:p-10 bg-slate-50 font-sans antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-10">
          <button 
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-slate-500 hover:text-[#2B93C9] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>
          
        
            <h1 className={`mt-3 text-3xl md:text-4xl font-bold tracking-tight `}>My Submissions</h1>
          <div className="flex gap-6 mt-4">
            <a href="mailto:info@incorpbay.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2B93C9] transition-colors">
              <Mail className="w-4 h-4" />
              info@incorpbay.com
            </a>
            <a href="tel:1-888-888-8888" className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#2B93C9] transition-colors">
              <PhoneCall className="w-4 h-4" />
              1-888-888-8888
            </a>
          </div>
        </header>

        {/* Show all pending/submitted applications as a list */}
        <div className="space-y-4">
          {pendingIssues.map((issue: Issue) => (
            <div key={issue.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-[#2B93C9]/10">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                
                {/* Left Section (Details) */}
                <div className="lg:col-span-2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <div className={`flex items-center gap-2 mb-4 ${
                    issue.status === 'rejected' ? 'text-red-600' : 
                    issue.status === 'submitted' ? 'text-blue-600' : LOGO_GRADIENT_TEXT
                  }`}>
                    {issue.status === 'rejected' ? (
                      <FileX className="w-5 h-5" />
                    ) : issue.status === 'submitted' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {issue.status === 'rejected' ? 'Rejection Reason' : 
                       issue.status === 'submitted' ? 'Application Submitted' : 'Pending'}
                    </span>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    {(issue.rejectionReason || issue.details) ? (
                      <div className="space-y-4">
                        {issue.rejectionReason && (
                          <div className="p-5 bg-red-50/50 rounded-2xl border border-red-100">
                            <p className="font-bold text-slate-900">
                              {issue.rejectionReason}
                            </p>
                          </div>
                        )}
                        {issue.details && (
                          <div className={`${LOGO_GRADIENT_SOFT} rounded-xl border border-[#2B93C9]/10 p-5`}>
                            <p className="font-bold text-slate-900">
                              {issue.details}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <>
                        <p className="font-semibold text-slate-800">Your application is being processed.</p>
                        
                        <div className={`${LOGO_GRADIENT_SOFT} mt-8 rounded-xl border border-[#2B93C9]/10 p-5 text-sm`}>
                          <p>
                            Thank you for your submission. Review usually takes 24-48 business hours. We will notify you once your application is approved.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Section (Order Info) */}
                <div className={`${LOGO_GRADIENT_SOFT} p-8 lg:p-10`}>
                  <div className={`flex items-center gap-2 mb-8 ${
                    issue.status === 'rejected' ? 'text-red-600' : 
                    issue.status === 'submitted' ? 'text-blue-600' : LOGO_GRADIENT_TEXT
                  }`}>
                    {issue.status === 'rejected' ? (
                      <FileX className="w-5 h-5" />
                    ) : issue.status === 'submitted' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Status: {issue.status === 'rejected' ? 'Rejected' : 
                             issue.status === 'submitted' ? 'Submitted' : 'On Hold'}
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Reference No.</p>
                      <p className="text-xl font-bold text-slate-900">#{issue.id}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Filing Type</p>
                      <p className="text-xl font-bold text-slate-900">{issue.type}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Company</p>
                      <p className="text-lg font-bold text-slate-900">{issue.company || 'N/A'}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Filing State</p>
                      <p className="text-xl font-bold text-slate-900">{issue.state}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Submitted Date</p>
                      <p className="text-sm font-medium text-slate-900">{formatDate(issue.submittedAt)}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-[#2B93C9]">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Application Received</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>If you have any questions, please contact support at <a href="mailto:info@incorpbay.com" className={`${LOGO_GRADIENT_TEXT} font-semibold hover:underline`}>info@incorpbay.com</a></p>
        </div>
      </div>
    </main>
  );
};

export default PendingIssuePage;