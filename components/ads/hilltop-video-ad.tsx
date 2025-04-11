"use client";
import Script from "next/script";

interface HilltopVideoAdProps {
  className?: string;
}

export default function HilltopVideoAd({
  className = "",
}: HilltopVideoAdProps) {
  return (
    <div className={`hilltop-video-ad ${className}`}>
      <div className="text-xs uppercase text-muted-foreground mb-2 text-center">
        Advertisement
      </div>
      <div
        id="hilltop-video-container"
        className="min-h-[250px] flex items-center justify-center"
      >
        <Script id="hilltop-video-ad" strategy="afterInteractive">
          {`
            (function(txaz){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = txaz || {};
              s.src = "//jucasture.com/b/XDVas.dBGrlJ0BYmW/cw/oelmU9zulZHUFlAkcPiT/YHyMNxjkI-4mMpT/AntSNBj/IT2/MyjegpxFMEQx";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
      </div>
    </div>
  );
}
