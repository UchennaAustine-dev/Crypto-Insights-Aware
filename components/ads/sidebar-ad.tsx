import NetpubBanner from "./netpub-banner";

export default function SidebarAd() {
  return (
    <div className="sidebar-ad mb-6">
      <div className="text-xs uppercase text-muted-foreground mb-2">
        Advertisement
      </div>
      <NetpubBanner
        type="standard"
        slot={1}
        className="bg-background border rounded-md p-1 flex items-center justify-center min-h-[250px]"
      />
    </div>
  );
}
