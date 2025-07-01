import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Content",
    url: "/content",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const pathname = useLocation().pathname;
  return (
    <Sidebar
      className="bg-dashboard-sidebar"
      variant="sidebar"
      collapsible="icon"
    >
      <SidebarHeader
        className={cn("flex flex-row items-center justify-between", {
          "justify-center": state === "collapsed",
        })}
      >
        {state !== "collapsed" && (
          <h2 className="text-lg font-bold">Sequence</h2>
        )}
        <SidebarTrigger />
      </SidebarHeader>
      <div className="px-2">
        <Separator />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="mb-4">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      asChild
                      className={cn(
                        "h-9 transition-all ease-linear duration-150",
                        {
                          "!bg-white shadow border": isActive,
                        }
                      )}
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer sidebar</SidebarFooter>
    </Sidebar>
  );
}
