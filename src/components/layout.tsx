import { useLocation } from "react-router-dom";

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
    <div className="flex h-svh items-center justify-center">{children}</div>
  );
}
