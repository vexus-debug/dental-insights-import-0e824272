import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Globe, Eye, Edit3, Image as ImageIcon, Layout, Palette, Search, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/clinic/website")({
  head: () => ({ meta: [{ title: "Website — Dentallogue" }] }),
  component: WebsitePage,
});

const pages = [
  { name: "Home", path: "/", visits: 4280, status: "Published" },
  { name: "About", path: "/about", visits: 1820, status: "Published" },
  { name: "Services", path: "/services", visits: 2140, status: "Published" },
  { name: "Team", path: "/team", visits: 980, status: "Published" },
  { name: "Book Appointment", path: "/book", visits: 3120, status: "Published" },
  { name: "Promotions", path: "/promo/summer", visits: 412, status: "Draft" },
];

function WebsitePage() {
  const [tab, setTab] = useState("pages");

  return (
    <div className="mx-auto w-full max-w-[1400px] space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><h1 className="text-2xl font-semibold tracking-tight">Website</h1><p className="mt-1 text-sm text-muted-foreground">Manage your clinic's public website — pages, design, and SEO.</p></div>
        <div className="flex gap-2"><Button variant="outline" className="gap-2"><Eye className="h-4 w-4" />Preview</Button><Button className="gap-2"><ExternalLink className="h-4 w-4" />Visit live</Button></div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        <div className="surface-card p-4"><div className="text-xs text-muted-foreground">Visitors / mo</div><div className="mt-1 text-2xl font-semibold">12.8k</div></div>
        <div className="surface-card p-4"><div className="text-xs text-muted-foreground">Online bookings</div><div className="mt-1 text-2xl font-semibold">184</div></div>
        <div className="surface-card p-4"><div className="text-xs text-muted-foreground">Avg session</div><div className="mt-1 text-2xl font-semibold">2:14</div></div>
        <div className="surface-card p-4"><div className="text-xs text-muted-foreground">SEO score</div><div className="mt-1 text-2xl font-semibold text-success">92</div></div>
      </div>

      <Tabs value={tab} onValueChange={setTab}><TabsList><TabsTrigger value="pages"><Layout className="mr-1.5 h-3.5 w-3.5" />Pages</TabsTrigger><TabsTrigger value="design"><Palette className="mr-1.5 h-3.5 w-3.5" />Design</TabsTrigger><TabsTrigger value="seo"><Search className="mr-1.5 h-3.5 w-3.5" />SEO</TabsTrigger><TabsTrigger value="booking"><Calendar className="mr-1.5 h-3.5 w-3.5" />Online booking</TabsTrigger></TabsList></Tabs>

      {tab === "pages" && (
        <div className="surface-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase text-muted-foreground"><tr><th className="px-4 py-2">Page</th><th className="px-4 py-2">URL</th><th className="px-4 py-2">Visits (30d)</th><th className="px-4 py-2">Status</th><th className="px-4 py-2"></th></tr></thead>
            <tbody>{pages.map(p => (<tr key={p.path} className="border-t border-border/60 hover:bg-muted/30"><td className="px-4 py-3 font-medium">{p.name}</td><td className="px-4 py-3 font-mono text-xs">{p.path}</td><td className="px-4 py-3">{p.visits.toLocaleString()}</td><td className="px-4 py-3"><Badge variant="outline" className={p.status === "Published" ? "bg-success/15 text-success" : "bg-warning/15 text-warning-foreground"}>{p.status}</Badge></td><td className="px-4 py-3"><div className="flex gap-1"><Button size="sm" variant="outline" className="gap-1"><Edit3 className="h-3 w-3" />Edit</Button><Button size="sm" variant="ghost"><Eye className="h-3.5 w-3.5" /></Button></div></td></tr>))}</tbody>
          </table>
        </div>
      )}

      {tab === "design" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="surface-card p-5"><div className="font-medium">Brand</div><div className="mt-3 grid gap-3"><div><Label>Primary color</Label><div className="mt-1.5 flex gap-2"><Input defaultValue="#3B7CFF" /><div className="h-10 w-10 rounded-md border" style={{background: "#3B7CFF"}} /></div></div><div><Label>Logo</Label><Button variant="outline" className="mt-1.5 gap-2 w-full"><ImageIcon className="h-4 w-4" />Upload logo</Button></div><div><Label>Heading font</Label><Input defaultValue="Inter" /></div></div></div>
          <div className="surface-card p-5"><div className="font-medium">Theme</div><div className="mt-3 grid grid-cols-3 gap-2">{["Modern","Classic","Warm"].map(t => <button key={t} className="rounded-xl border-2 border-border p-3 text-center text-sm hover:border-primary"><div className="aspect-video rounded bg-gradient-to-br from-primary/30 to-primary/10" /><div className="mt-2">{t}</div></button>)}</div></div>
        </div>
      )}

      {tab === "seo" && (
        <div className="surface-card p-5 space-y-4 max-w-2xl"><div><Label>Site title</Label><Input defaultValue="Dentallogue Family Dentistry — Chicago, IL" /></div><div><Label>Meta description</Label><Textarea rows={3} defaultValue="Comprehensive family and cosmetic dentistry in Chicago. Same-day appointments, modern techniques, gentle care." /></div><div><Label>Keywords</Label><Input defaultValue="chicago dentist, family dentistry, cosmetic, root canal, invisalign" /></div><div className="flex items-center justify-between rounded-lg border border-border p-3"><div><div className="text-sm font-medium">Google Business sync</div><div className="text-xs text-muted-foreground">Push hours, services and posts to GBP</div></div><Switch defaultChecked /></div></div>
      )}

      {tab === "booking" && (
        <div className="surface-card p-5 space-y-4 max-w-2xl"><div className="flex items-center justify-between rounded-lg border border-border p-3"><div><div className="text-sm font-medium">Online booking widget</div><div className="text-xs text-muted-foreground">Enabled on Home, Services, Book</div></div><Switch defaultChecked /></div><div className="flex items-center justify-between rounded-lg border border-border p-3"><div><div className="text-sm font-medium">Require deposit</div><div className="text-xs text-muted-foreground">$25 deposit holds the slot</div></div><Switch /></div><div><Label>Buffer between bookings</Label><Input defaultValue="15 min" /></div><div><Label>Embed code</Label><Textarea readOnly rows={2} className="font-mono text-xs" defaultValue='<script src="https://book.dentallogue.com/widget.js" data-clinic="dl-1042"></script>' /></div></div>
      )}
    </div>
  );
}
