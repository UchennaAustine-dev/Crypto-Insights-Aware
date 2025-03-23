import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Privacy Policy | CryptoAware",
  "Learn how we collect, use, and protect your personal information when you use our cryptocurrency platform.",
  [
    "privacy policy",
    "data protection",
    "personal information",
    "crypto privacy",
    "user privacy",
  ]
);

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: March 23, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              1. Introduction
            </h2>
            <p>
              At CryptoAware, we respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
            <p>
              This privacy policy applies to all users of CryptoAware services,
              including visitors to our website at cryptoaware.site.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect, use, store, and transfer different kinds of
              personal data about you which we have grouped together:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username, or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access our website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website and services.
              </li>
              <li>
                <strong>Marketing and Communications Data</strong> includes your
                preferences in receiving marketing from us and our third parties
                and your communication preferences.
              </li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              3. How We Collect Your Personal Data
            </h2>
            <p>
              We use different methods to collect data from and about you
              including through:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                <strong>Direct interactions.</strong> You may give us your
                Identity and Contact Data by filling in forms or by
                corresponding with us by post, phone, email, or otherwise.
              </li>
              <li>
                <strong>Automated technologies or interactions.</strong> As you
                interact with our website, we may automatically collect
                Technical Data about your equipment, browsing actions, and
                patterns.
              </li>
              <li>
                <strong>Third parties or publicly available sources.</strong> We
                may receive personal data about you from various third parties
                and public sources.
              </li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              4. How We Use Your Personal Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p>
              Generally, we do not rely on consent as a legal basis for
              processing your personal data although we will get your consent
              before sending third party direct marketing communications to you
              via email or text message. You have the right to withdraw consent
              to marketing at any time.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              5. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know.
            </p>
            <p>
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              6. Data Retention
            </h2>
            <p>
              We will only retain your personal data for as long as reasonably
              necessary to fulfill the purposes we collected it for, including
              for the purposes of satisfying any legal, regulatory, tax,
              accounting, or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period for personal data,
              we consider the amount, nature, and sensitivity of the personal
              data, the potential risk of harm from unauthorized use or
              disclosure of your personal data, the purposes for which we
              process your personal data, and whether we can achieve those
              purposes through other means, and the applicable legal,
              regulatory, tax, accounting, or other requirements.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              7. Your Legal Rights
            </h2>
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. You have the right to:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please
              contact us.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              8. Third-Party Links
            </h2>
            <p>
              Our website may include links to third-party websites, plug-ins,
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements. When you leave our
              website, we encourage you to read the privacy policy of every
              website you visit.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              9. Cookies
            </h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or
              to alert you when websites set or access cookies. If you disable
              or refuse cookies, please note that some parts of this website may
              become inaccessible or not function properly. For more information
              about the cookies we use, please see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              10. Changes to the Privacy Policy
            </h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              "last updated" date at the top of this privacy policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any
              changes. Changes to this privacy policy are effective when they
              are posted on this page.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at:
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
        <Link href="/cookies" className="text-primary hover:underline">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
