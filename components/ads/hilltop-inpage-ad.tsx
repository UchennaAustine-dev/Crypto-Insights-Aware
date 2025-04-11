"use client";

import Script from "next/script";

interface HilltopInpageAdProps {
  className?: string;
}

export default function HilltopInpageAd({
  className = "",
}: HilltopInpageAdProps) {
  return (
    <div className={`hilltop-inpage-ad ${className}`}>
      <div className="text-xs uppercase text-muted-foreground mb-2 text-center">
        Advertisement
      </div>
      <div
        id="hilltop-inpage-container"
        className="min-h-[250px] flex items-center justify-center"
      >
        <Script id="hilltop-inpage-ad" strategy="afterInteractive">
          {`
            (function(wqpcr){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = wqpcr || {};
              s.src = "//jucasture.com/bwXWV-s.dEGgl/0dY/WKcU/DeQma9auCZXUhlukyPvT/Y/ynNzjJId4/MwjcgXteNyjPIT2AMRjKgOykOEQb";
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
