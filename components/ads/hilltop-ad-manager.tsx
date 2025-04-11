"use client";

import HilltopPopupAd from "./hilltop-popup-ad";

// This component loads global ad scripts that should appear once per page
export default function HilltopAdManager() {
  return (
    <>
      {/* The popup ad script only needs to be included once per page */}
      <HilltopPopupAd />
    </>
  );
}
