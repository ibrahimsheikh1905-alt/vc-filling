import ItemVirtualMailbox from "@/components/ItemVirtualMailbox";
import NavigationWrapper from "@/components/NavigationWrapper";
import VirtualMailbox from "@/components/VirtualMailbox";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function Dashboard({params}: {params: {id: string}}) {
    return (
        <NavigationWrapper>
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar selected="Dashboard" />

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="mb-8">
                    <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        JD
                    </div>
                    <h2 className="text-2xl font-bold">John Doe Company</h2>
                    </div>
                    <p className="text-gray-500 text-sm">
                    View company information and account details
                    </p>
                </header>
                <ItemVirtualMailbox id={params.id} />

            </main>
        </div>
        </NavigationWrapper>
    );
}
