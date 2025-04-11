"use client";

import Script from "next/script";

export default function HilltopPopupAd() {
  return (
    <Script id="hilltop-popup-ad" strategy="afterInteractive">
      {`
        (function(uwlqq){
          var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
          s.settings = uwlqq || {};
          s.src = "//grapsefalo.com/c/Da9.6AbT2r5HliSmWjQo9aNhjAIx2DMtjXgQy/MTCf0A2DMnjEY-yhOKDgIjxE";
          s.async = true;
          s.referrerPolicy = 'no-referrer-when-downgrade';
          l.parentNode.insertBefore(s, l);
        })({})
      `}
    </Script>
  );
}
