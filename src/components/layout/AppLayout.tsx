import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/almacen": "Almacén · Materias primas",
  "/productos": "Ingeniería de producto",
  "/produccion": "Órdenes de producción",
  "/ventas": "Ventas & Clientes",
  "/finanzas": "Finanzas",
  "/configuracion": "Configuración",
};

export default function AppLayout() {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? "FactoryFlow";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b bg-card/80 backdrop-blur flex items-center gap-3 px-4 sticky top-0 z-30">
            <SidebarTrigger />
            <div className="flex items-center text-sm text-muted-foreground gap-1">
              <span>FactoryFlow</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{title}</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar OP, SKU, cliente…" className="pl-8 w-72" />
              </div>
              <button className="relative p-2 rounded-md hover:bg-secondary">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
              </button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">VL</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-x-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
