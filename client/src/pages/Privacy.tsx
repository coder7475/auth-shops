const Privacy = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Privacy Policy</h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">1. Introduction</h2>
            <p>
              RideBook is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our services.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you provide to us, such
              as your name, email address, phone number, and payment
              information. We also collect information automatically, such as
              device information, IP address, and usage data.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              3. How We Use Your Information
            </h2>
            <p>
              We use your information to provide and improve our services,
              process transactions, communicate with you, ensure security, and
              comply with legal obligations.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              4. Sharing of Information
            </h2>
            <p>
              We may share your information with service providers, business
              partners, or as required by law. We do not sell your personal
              information to third parties.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">6. Your Choices</h2>
            <p>
              You may update or delete your account information at any time. You
              can also opt out of receiving promotional communications from us.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:support@ridebook.com"
                className="text-primary underline"
              >
                support@ridebook.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
