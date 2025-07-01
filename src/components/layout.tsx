import { useLocation } from "react-router-dom";
import { AppSidebar } from "./ui/app-sidebar";
import { Input } from "./ui/input";
import { SidebarProvider } from "./ui/sidebar";

const authPages = ["/login"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useLocation();

  if (authPages.includes(params.pathname)) {
    return (
      <div className="flex h-svh items-center justify-center bg-background text-primary w-full px-3">
        {children}
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-dashboard-background flex-col h-svh items-start justify-start w-full">
        <div className="flex items-center w-full px-6 py-2">
          <Input className="max-w-72" placeholder="Search..." />
        </div>
        <div className="text-dashboard-text-primary w-full flex items-center px-6 py-3">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
