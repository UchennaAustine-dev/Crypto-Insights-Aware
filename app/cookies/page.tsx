import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Cookie Policy | CryptoAware",
  "Learn about how we use cookies and similar technologies on our cryptocurrency platform.",
  [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "crypto website cookies",
    "website tracking",
  ]
);

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: March 23, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              1. Introduction
            </h2>
            <p>
              This Cookie Policy explains how CryptoAware ("we", "us", or "our")
              uses cookies and similar technologies to recognize you when you
              visit our website at cryptoaware.site ("Website"). It explains
              what these technologies are and why we use them, as well as your
              rights to control our use of them.
            </p>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              2. Types of Cookies We Use
            </h2>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the website to function properly. They enable core
                functionality such as security, network management, and account
                access. You may disable these by changing your browser settings,
                but this may affect how the website functions.
              </li>
              <li>
                <strong>Analytics and Performance Cookies:</strong> These
                cookies allow us to count visits and traffic sources so we can
                measure and improve the performance of our site. They help us to
                know which pages are the most and least popular and see how
                visitors move around the site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the
                website to provide enhanced functionality and personalization.
                They may be set by us or by third-party providers whose services
                we have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set
                through our site by our advertising partners. They may be used
                by those companies to build a profile of your interests and show
                you relevant advertisements on other sites.
              </li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              3. Specific Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-muted my-4">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-muted p-2 text-left">Name</th>
                    <th className="border border-muted p-2 text-left">
                      Purpose
                    </th>
                    <th className="border border-muted p-2 text-left">
                      Duration
                    </th>
                    <th className="border border-muted p-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-muted p-2">_ga</td>
                    <td className="border border-muted p-2">
                      Used to distinguish users for Google Analytics
                    </td>
                    <td className="border border-muted p-2">2 years</td>
                    <td className="border border-muted p-2">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2">_gid</td>
                    <td className="border border-muted p-2">
                      Used to distinguish users for Google Analytics
                    </td>
                    <td className="border border-muted p-2">24 hours</td>
                    <td className="border border-muted p-2">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2">_gat</td>
                    <td className="border border-muted p-2">
                      Used to throttle request rate for Google Analytics
                    </td>
                    <td className="border border-muted p-2">1 minute</td>
                    <td className="border border-muted p-2">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2">preferences</td>
                    <td className="border border-muted p-2">
                      Used to remember user preferences (e.g., dark mode)
                    </td>
                    <td className="border border-muted p-2">1 year</td>
                    <td className="border border-muted p-2">Functional</td>
                  </tr>
                  <tr>
                    <td className="border border-muted p-2">session</td>
                    <td className="border border-muted p-2">
                      Used for user authentication and session management
                    </td>
                    <td className="border border-muted p-2">Session</td>
                    <td className="border border-muted p-2">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              4. How to Control Cookies
            </h2>
            <p>
              You can set or amend your web browser controls to accept or refuse
              cookies. If you choose to reject cookies, you may still use our
              website though your access to some functionality and areas may be
              restricted. As the means by which you can refuse cookies through
              your web browser controls vary from browser-to-browser, you should
              visit your browser's help menu for more information.
            </p>
            <p>
              In addition, most advertising networks offer you a way to opt out
              of targeted advertising. If you would like to find out more
              information, please visit{" "}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>{" "}
              or{" "}
              <a
                href="http://www.youronlinechoices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                http://www.youronlinechoices.com
              </a>
              .
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              5. Other Tracking Technologies
            </h2>
            <p>
              Cookies are not the only way to recognize or track visitors to a
              website. We may use other, similar technologies from time to time,
              like web beacons (sometimes called "tracking pixels" or "clear
              gifs"). These are tiny graphics files that contain a unique
              identifier that enable us to recognize when someone has visited
              our Website. This allows us, for example, to monitor the traffic
              patterns of users from one page within our Website to another, to
              deliver or communicate with cookies, to understand whether you
              have come to our Website from an online advertisement displayed on
              a third-party website, to improve site performance, and to measure
              the success of email marketing campaigns. In many instances, these
              technologies are reliant on cookies to function properly, and so
              declining cookies will impair their functioning.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              6. Do Not Track
            </h2>
            <p>
              Currently, various browsers offer a "do not track" or "DNT" option
              which sends a signal to websites indicating that you do not wish
              to be tracked. Because there is not yet a common understanding of
              how to interpret the DNT signal, we currently do not respond to
              browser DNT signals on our site.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              7. Changes to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              re-visit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies or other
              technologies, please contact us at:
            </p>
            <p>
              <a
                href="mailto:privacy@cryptoaware.site"
                className="text-primary hover:underline"
              >
                privacy@cryptoaware.site
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
