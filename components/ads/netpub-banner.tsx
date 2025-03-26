"use client";

import { useEffect } from "react";

type NetpubBannerType =
  | "standard"
  | "fixed"
  | "sticky"
  | "interstitial"
  | "notification";

interface NetpubBannerProps {
  type: NetpubBannerType;
  slot?: number;
  notificationId?: number;
  interstitialId?: number;
  className?: string;
  desktopSizes?: string;
  mobileSizes?: string;
}

const NETPUB_ID = "1f75e35d24f3581d262ae6881f9665a7";

export default function NetpubBanner({
  type = "standard",
  slot = 1,
  notificationId,
  interstitialId,
  className = "",
  desktopSizes,
  mobileSizes,
}: NetpubBannerProps) {
  useEffect(() => {
    // Load the Netpub script if it doesn't exist
    if (typeof window !== "undefined" && !document.getElementById(NETPUB_ID)) {
      const script = document.createElement("script");
      script.id = NETPUB_ID;
      script.async = true;
      script.src = `https://fstatic.netpub.media/static/${NETPUB_ID}.min.js?${Date.now()}`;
      document.head.appendChild(script);
    }
  }, []);

  // Default sizes if not provided
  const defaultDesktopSizes = {
    standard: "200x200,250x250,300x250,336x280",
    fixed: "300x50,320x100,320x50,360x100,360x50",
    sticky:
      "200x200,250x250,300x250,336x280,468x60,678x60,728x90,870x200,970x250,970x90",
    interstitial:
      "1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,700x300,728x500,728x90,750x400,750x480,870x200,970x250,970x90",
    notification: "200x200,250x250,300x250,336x280",
  };

  const defaultMobileSizes = {
    standard: "200x200,250x250,300x250,336x280",
    fixed: "300x50,320x100,320x50,360x100,360x50",
    sticky: "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
    interstitial:
      "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
    notification:
      "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
  };

  // Determine which data attribute to use based on type
  const getDataAttributes = () => {
    const attrs: Record<string, string> = {
      "data-sizes-desktop": desktopSizes || defaultDesktopSizes[type],
      "data-sizes-mobile": mobileSizes || defaultMobileSizes[type],
    };

    switch (type) {
      case "standard":
        attrs["data-slot"] = String(slot);
        break;
      case "fixed":
        attrs["data-fixed"] = "1";
        break;
      case "sticky":
        attrs["data-sticky"] = "1";
        break;
      case "interstitial":
        attrs["data-interstitial"] = interstitialId
          ? String(interstitialId)
          : "1";
        break;
      case "notification":
        attrs["data-notification"] = notificationId
          ? String(notificationId)
          : "1";
        break;
    }

    return attrs;
  };

  const dataAttributes = getDataAttributes();

  return (
    <div className={`netpub-banner ${className}`}>
      <ins className={`adv-${NETPUB_ID}`} {...dataAttributes} />
    </div>
  );
}
