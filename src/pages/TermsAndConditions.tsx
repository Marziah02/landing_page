import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms and Conditions
        </h1>
        <p className="text-muted-foreground mb-8">
          This Terms of Use statement is effective as of June 19, 2025.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              10X Galaxy Ltd ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You may only use our Services if you meet the legal age
              requirement in your country of residence.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                If your country allows digital consent from age 13, you must be
                at least 13 years old.
              </li>
              <li>
                If your country requires you to be 18 or older, you must be at
                least 18 years old.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You also confirm that you are legally capable of entering into a
              binding agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree to use our Services in a lawful manner and not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Violate any local, national, or international laws or
                regulations
              </li>
              <li>Use the Services for illegal or fraudulent purposes</li>
              <li>
                Infringe upon the rights of others, including intellectual
                property or privacy rights
              </li>
              <li>
                Introduce malicious software, disrupt functionality, or attempt
                unauthorized access
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If our Services require account registration:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                You must provide accurate, complete, and updated information
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                credentials
              </li>
              <li>
                You accept full responsibility for all activities under your
                account
              </li>
              <li>
                We reserve the right to suspend or terminate your account if
                misuse is detected
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, software, logos, brand names, text, and media on our
              platform are the property of 10X Galaxy Ltd or its licensors. You
              may not reproduce, copy, distribute, or use any content without
              written permission, except where allowed by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              User-Generated Content
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you post or submit content:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                You retain ownership but grant us a non-exclusive, royalty-free,
                worldwide license to use, reproduce, modify, and display your
                content for the purposes of operating and promoting our Services
              </li>
              <li>
                You must not post harmful, abusive, defamatory, or illegal
                content
              </li>
              <li>
                We reserve the right to remove or restrict content that violates
                our policies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Services may contain links or access to third-party platforms.
              We are not responsible for their content, terms, or policies. Use
              of third-party services is at your own risk and subject to their
              own terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We reserve the right to suspend or terminate access to our
              Services at any time, without notice, for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Violations of these Terms</li>
              <li>Illegal, abusive, or harmful behavior</li>
              <li>Technical or security reasons</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              You may also terminate your use at any time by deleting your
              account or discontinuing the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Services are provided "as is" and "as available"</li>
              <li>
                We make no warranties or guarantees regarding uptime, accuracy,
                or performance
              </li>
              <li>
                We are not liable for data loss, interruption, or damages
                resulting from your use of the Services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                We are not liable for indirect, incidental, special, or
                consequential damages
              </li>
              <li>
                Our total liability to you will not exceed the amount paid to us
                in the preceding 12 months, or £100 if no fees were paid
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Indemnity</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree to indemnify and hold harmless 10X Galaxy Ltd and its
              affiliates from any claims, damages, losses, or legal expenses
              arising out of your:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Breach of these Terms</li>
              <li>Use or misuse of our Services</li>
              <li>Violation of any law or third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. Changes will take
              effect immediately upon posting. Continued use of the Services
              means you accept the updated Terms. We encourage you to review
              them regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of England and Wales.
              Disputes shall be subject to the exclusive jurisdiction of the
              courts located in London, United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or concerns, contact:
            </p>
            <div className="mt-3 text-muted-foreground leading-relaxed">
              <p className="font-semibold">10X Galaxy Ltd</p>
              <p>Company No: 16491834</p>
              <p>
                Registered Address: 61 Bridge Street, Kington, Herefordshire,
                HR5 3DJ, United Kingdom
              </p>
              <p>Email: support@10xgalaxy.com (to be updated)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy and Cookie Policy,
              constitute the entire agreement between you and 10X Galaxy Ltd
              regarding your use of the Services.
            </p>
          </section>
        </div>
      </div>

      {/* Join the AI Revolution CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the AI Revolution
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Be the first to know about new AI tools, product releases, job
            openings, and thought leadership from the 10xGalaxy team.
          </p>
          <Link to="/careers">
            <Button size="lg" className="font-semibold">
              Click here
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
