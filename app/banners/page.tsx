import type { Metadata } from "next";
import NetpubBanner from "@/components/ads/netpub-banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Ad Banners | CryptoInsight",
  description: "View all available ad banner formats on CryptoInsight",
};

export default function BannersPage() {
  return (
    <div className="container py-8 space-y-12">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-4">Ad Banners</h1>
        <p className="text-muted-foreground max-w-3xl">
          This page showcases all the different ad banner formats available on
          CryptoInsight. These banners are powered by Netpub and are displayed
          throughout the site.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">
          Standard Banners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>IAB 300x250</CardTitle>
              <CardDescription>
                Standard medium rectangle banner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner type="standard" slot={1} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IAB 300x600</CardTitle>
              <CardDescription>Half-page banner</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner
                type="standard"
                slot={2}
                desktopSizes="120x600,160x600,200x200,250x250,300x250,300x600,336x280"
                mobileSizes="160x600,200x200,250x250,300x250,300x600,336x280"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IAB 728x90</CardTitle>
              <CardDescription>Leaderboard banner</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner
                type="standard"
                slot={3}
                desktopSizes="728x90,970x90"
                mobileSizes="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">
          Special Banners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fixed Banner</CardTitle>
              <CardDescription>
                Banner fixed to the bottom of the screen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner
                type="fixed"
                desktopSizes="300x50,320x100,320x50,360x100,360x50"
                mobileSizes="300x50,320x100,320x50,360x100,360x50"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sticky Banner</CardTitle>
              <CardDescription>
                Banner that sticks while scrolling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner type="sticky" />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">
          Notification Banners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification 300x250</CardTitle>
              <CardDescription>Medium rectangle notification</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner type="notification" notificationId={3} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification 360x100</CardTitle>
              <CardDescription>Mobile banner notification</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner
                type="notification"
                notificationId={8}
                desktopSizes="300x50,320x100,320x50,360x100,360x50"
                mobileSizes="300x50,320x100,320x50,360x100,360x50"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification 150x0</CardTitle>
              <CardDescription>Vertical notification banner</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner
                type="notification"
                notificationId={1}
                desktopSizes="120x600,160x600,300x600,336x280"
                mobileSizes="120x600,160x600,300x600,336x280"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-heading font-bold mb-4">
          Interstitial Banners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Interstitial Banner</CardTitle>
              <CardDescription>Full-screen interstitial ad</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner type="interstitial" interstitialId={1} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interstitial Banner (Alternative)</CardTitle>
              <CardDescription>Second interstitial ad format</CardDescription>
            </CardHeader>
            <CardContent>
              <NetpubBanner type="interstitial" interstitialId={2} />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
