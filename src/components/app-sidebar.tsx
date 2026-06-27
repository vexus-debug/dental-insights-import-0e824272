import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  ListChecks,
  Stethoscope,
  ClipboardList,
  FileText,
  ScanLine,
  FlaskConical,
  Receipt,
  ShieldCheck,
  Package,
  UserCog,
  Folder,
  FileSignature,
  Globe,
  Smartphone,
  MessageSquare,
  Megaphone,
  BarChart3,
  TrendingUp,
  Settings,
  KeyRound,
  CreditCard,
  Activity,
} from "lucide-react";

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
  SidebarRail,
} from "@/components/ui/sidebar";

type NavItem = { title: string; url: string; icon: React.ComponentType<{ className?: string }> };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    label: "Overview",
    items: [{ title: "Dashboard", url: "/", icon: LayoutDashboard }],
  },
  {
    label: "Patients",
    items: [
      { title: "Patients", url: "/patients", icon: Users },
      { title: "Appointments", url: "/appointments", icon: CalendarDays },
      { title: "Queue", url: "/queue", icon: ListChecks },
    ],
  },
  {
    label: "Clinical",
    items: [
      { title: "Dental Chart", url: "/dental-chart", icon: Stethoscope },
      { title: "Treatment Plans", url: "/treatment-plans", icon: ClipboardList },
      { title: "Clinical Records", url: "/clinical-records", icon: FileText },
      { title: "Imaging", url: "/imaging", icon: ScanLine },
      { title: "Laboratory", url: "/laboratory", icon: FlaskConical },
    ],
  },
  {
    label: "Finance",
    items: [
      { title: "Billing", url: "/billing", icon: Receipt },
      { title: "Insurance", url: "/insurance", icon: ShieldCheck },
    ],
  },
  {
    label: "Operations",
    items: [
      { title: "Inventory", url: "/inventory", icon: Package },
      { title: "Staff", url: "/staff", icon: UserCog },
      { title: "Documents", url: "/documents", icon: Folder },
      { title: "Consent Forms", url: "/consent-forms", icon: FileSignature },
    ],
  },
  {
    label: "Growth",
    items: [
      { title: "Website", url: "/website", icon: Globe },
      { title: "Patient Portal", url: "/patient-portal", icon: Smartphone },
      { title: "Communication", url: "/communication", icon: MessageSquare },
      { title: "Marketing", url: "/marketing", icon: Megaphone },
    ],
  },
  {
    label: "Insights",
    items: [
      { title: "Reports", url: "/reports", icon: BarChart3 },
      { title: "Analytics", url: "/analytics", icon: TrendingUp },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "Clinic Settings", url: "/settings", icon: Settings },
      { title: "Users & Roles", url: "/users", icon: KeyRound },
      { title: "Subscription", url: "/subscription", icon: CreditCard },
    ],
  },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link
          to="/"
          className="flex items-center gap-2.5 px-2 py-2 group-data-[collapsible=icon]:justify-center"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Activity className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Dentallogue
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Every Smile. One Platform.
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/80">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active =
                    item.url === "/"
                      ? pathname === "/"
                      : pathname === item.url || pathname.startsWith(item.url + "/");
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={item.title}
                        className="data-[active=true]:bg-primary-soft data-[active=true]:text-accent-foreground data-[active=true]:font-medium"
                      >
                        <Link to={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:hidden">
        <div className="rounded-xl bg-primary-soft/60 p-3">
          <p className="text-xs font-semibold text-accent-foreground">Need help?</p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
            Chat with support or browse docs.
          </p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
