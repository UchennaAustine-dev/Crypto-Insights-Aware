"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      // In a real implementation, you would send this to your newsletter service
      console.log("Subscribing email:", email);
      setSubmitted(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="relative p-6 sm:p-8 md:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Stay Updated with Crypto Insights
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and receive exclusive content, market
              analysis, and expert insights directly to your inbox.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="text-muted-foreground">
                You've been added to our newsletter. Check your inbox soon for
                exclusive crypto insights and updates.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity"
                >
                  Subscribe Now
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to receive newsletters and accept the{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
