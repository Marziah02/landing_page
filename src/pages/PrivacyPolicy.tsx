import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            This Terms of Use statement is effective as of June 19, 2025.
          </p>

          <div className="space-y-8 text-foreground">
            <div>
              <p className="mb-6">
                10X Galaxy Ltd ("we", "our", "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>
                  Personal Information: Name, email address, contact details,
                  etc.
                </li>
                <li>
                  Technical Data: IP address, browser type, device identifiers.
                </li>
                <li>
                  Usage Data: Pages visited, features used, links clicked.
                </li>
                <li>
                  Cookies and Tracking Technologies: As described in our Cookie
                  Policy.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Provide, operate, and maintain our platform</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you, including customer support</li>
                <li>
                  Send updates, offers, and promotional content (only with your
                  consent)
                </li>
                <li>Monitor usage and detect fraud or security issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Legal Basis for Processing (UK GDPR)
              </h2>
              <p className="mb-4">
                We process your data under one or more of the following legal
                bases:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Legal obligations</li>
                <li>
                  Legitimate business interests (e.g., improving our services)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Sharing Your Information
              </h2>
              <p className="mb-4">
                We do not sell your personal data. We may share it with:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Service providers who help operate our platform</li>
                <li>
                  Legal authorities if required by law or to protect rights
                </li>
                <li>
                  Business partners (only with your permission or where
                  necessary)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                International Transfers
              </h2>
              <p className="mb-4">
                If we transfer your data outside the UK or EEA, we ensure it is
                protected by:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Adequacy decisions by the UK government</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Other appropriate safeguards</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal data only as long as necessary for:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground mt-4">
                <li>The purposes outlined in this Privacy Policy</li>
                <li>Legal, accounting, or reporting requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="mb-4">Under the UK GDPR, you have rights to:</p>
              <ul className="space-y-2 ml-6 list-disc text-muted-foreground">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent at any time</li>
                <li>
                  Lodge a complaint with the UK Information Commissioner's
                  Office (ICO)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We use administrative, technical, and physical safeguards to
                protect your data from unauthorized access, loss, or misuse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed at children under 13. We do not
                knowingly collect data from children without parental consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Changes will be
                posted on this page with the revised date. Your continued use of
                our services indicates your acceptance of the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <div className="text-muted-foreground space-y-1">
                <p className="font-semibold">10X Galaxy Ltd</p>
                <p>
                  61 Bridge Street, Kington, Herefordshire, HR5 3DJ, United
                  Kingdom
                </p>
                <p>support@10xgalaxy.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
