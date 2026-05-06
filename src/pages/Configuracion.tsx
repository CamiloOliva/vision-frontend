import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Configuracion() {
  return (
    <div>
      <PageHeader title="Configuración" subtitle="Empresa, usuarios y parámetros del sistema" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/60">
          <CardHeader><CardTitle>Empresa</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1.5"><Label>Razón social</Label><Input defaultValue="FactoryFlow Manufactura S.A.S." /></div>
            <div className="grid gap-1.5"><Label>NIT</Label><Input defaultValue="900.123.456-7" /></div>
            <div className="grid gap-1.5"><Label>Moneda base</Label><Input defaultValue="USD" /></div>
            <Button>Guardar cambios</Button>
          </CardContent>
        </Card>
        <Card className="border-border/60">
          <CardHeader><CardTitle>Preferencias</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              ["Alertas de stock bajo", true],
              ["Notificaciones de OP detenidas", true],
              ["Resumen diario por correo", false],
              ["Doble validación al cerrar OP", true],
            ].map(([l, v]) => (
              <div key={l as string} className="flex items-center justify-between">
                <span className="text-sm">{l}</span>
                <Switch defaultChecked={v as boolean} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
