import ItemVirtualMailbox from "@/components/ItemVirtualMailbox";

export default async function Dashboard({params}: {params: {id: string}}) {
    return (
        <main className="flex-1 p-8 bg-[#F9FAFB] font-sans antialiased min-h-screen">
            {/* Header Section */}
            <header className="mb-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-4">
                    {/* Avatar with Gradient */}
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white text-lg font-black shadow-sm tracking-tighter">
                        JD
                    </div>
                    
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">
                                Entity Overview
                            </p>
                        </div>
                        <h2 className="text-[28px] font-black tracking-[-0.03em] text-gray-900 uppercase leading-none">
                            John Doe Company
                        </h2>
                    </div>
                </div>
                
                <div className="mt-4 border-l-2 border-orange-500 pl-4">
                    <p className="text-sm font-medium text-gray-500 italic">
                        View company information and account details
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto">
                <ItemVirtualMailbox id={params.id} />
            </div>
        </main>
    );
}