"use client";

import Script from "next/script";

interface HilltopBannerAdProps {
  className?: string;
}

export default function HilltopBannerAd({
  className = "",
}: HilltopBannerAdProps) {
  return (
    <div className={`hilltop-banner-ad ${className}`}>
      <div className="text-xs uppercase text-muted-foreground mb-2 text-center">
        Advertisement
      </div>
      <div
        id="hilltop-banner-container"
        className="min-h-[250px] flex items-center justify-center"
      >
        <Script id="hilltop-banner-ad" strategy="afterInteractive">
          {`
            (function(foyyog){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = foyyog || {};
              s.src = "//jucasture.com/bVXqV_std.G/lw0gYtWZcb/Ie/m/9_u/ZsUDl/kzPmTrYHywNBjwIF4zMSz/g/t/NmjsI/2TMWjVgDzAOsQW";
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
