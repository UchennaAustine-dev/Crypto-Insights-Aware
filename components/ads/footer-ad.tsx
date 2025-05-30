import NetpubBanner from "./netpub-banner";

export default function FooterAd() {
  return (
    <div className="footer-ad mt-8 mb-4">
      <div className="text-xs uppercase text-muted-foreground mb-2 text-center">
        Advertisement
      </div>
      <div className="flex justify-center">
        <NetpubBanner
          type="standard"
          slot={5}
          desktopSizes="728x90,970x90"
          mobileSizes="300x250,320x100,336x280"
          className="bg-background border rounded-md p-1 flex items-center justify-center"
        />
      </div>
    </div>
  );
}
