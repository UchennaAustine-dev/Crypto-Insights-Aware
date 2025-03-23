import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Terms of Service | CryptoAware",
  "Read our terms of service to understand the rules, guidelines, and agreements for using our cryptocurrency platform.",
  [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "legal terms",
    "crypto terms",
  ]
);

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">Last updated: March 23, 2025</p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to CryptoAware. These Terms of Service govern your use of
              our website located at cryptoaware.site and form a binding legal
              agreement between you and CryptoAware.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, you may not
              access the Service.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              2. Definitions
            </h2>
            <p>
              <strong>Service</strong> - The cryptoaware.site website operated
              by CryptoAware
            </p>
            <p>
              <strong>User</strong> - Any individual who accesses or uses our
              Service
            </p>
            <p>
              <strong>Content</strong> - All information, text, graphics, photos
              or other materials uploaded, downloaded or appearing on the
              Service
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              3. Use of the Service
            </h2>
            <p>
              CryptoAware grants you a non-transferable, non-exclusive,
              revocable license to use the Service for your personal,
              non-commercial use.
            </p>
            <p>You agree not to use the Service:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>
                In any way that violates any applicable local, state, national,
                or international law or regulation
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material without our prior consent
              </li>
              <li>
                To impersonate or attempt to impersonate CryptoAware, a
                CryptoAware employee, another user, or any other person or
                entity
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Service
              </li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              4. Content
            </h2>
            <p>
              All Content published on the Service is for informational purposes
              only. The Content is not intended to be investment advice, nor
              does it represent the opinion of CryptoAware or its affiliates.
            </p>
            <p>
              CryptoAware does not guarantee the accuracy, completeness, or
              usefulness of any Content on the Service, and you rely on such
              Content at your own risk.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              5. Intellectual Property
            </h2>
            <p>
              The Service and its original content (excluding Content provided
              by users), features, and functionality are and will remain the
              exclusive property of CryptoAware and its licensors.
            </p>
            <p>
              The Service is protected by copyright, trademark, and other laws.
              Our trademarks and trade dress may not be used in connection with
              any product or service without the prior written consent of
              CryptoAware.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              6. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Service
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              7. Disclaimer
            </h2>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
              provided without warranties of any kind, whether express or
              implied.
            </p>
            <p>
              CryptoAware does not warrant that the Service will be
              uninterrupted, timely, secure, or error-free, or that any errors
              in the Service will be corrected.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall CryptoAware, its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the Service.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              9. Changes
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-heading font-semibold mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <a
                href="mailto:support@cryptoaware.site"
                className="text-primary hover:underline"
              >
                support@cryptoaware.site
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        <Link href="/cookies" className="text-primary hover:underline">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
