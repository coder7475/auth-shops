const Terms = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Terms and Conditions
        </h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By creating an account or using RideBook, you agree to be bound by
              these Terms and Conditions. If you do not agree, please do not use
              our services.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">2. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to provide accurate and complete
              information during registration and to update such information as
              necessary.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">3. Use of Service</h2>
            <p>
              You agree to use RideBook only for lawful purposes and in
              accordance with all applicable laws and regulations. Any misuse of
              the platform may result in suspension or termination of your
              account.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">4. Privacy</h2>
            <p>
              We value your privacy. Please review our Privacy Policy to
              understand how we collect, use, and protect your information.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              5. Limitation of Liability
            </h2>
            <p>
              RideBook is not liable for any damages or losses resulting from
              your use of the service, including but not limited to direct,
              indirect, incidental, or consequential damages.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective upon posting. Continued use of the
              service constitutes acceptance of the revised terms.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:support@ride.robiulhossain.com"
                className="text-primary underline"
              >
                support@ride.robiulhossain.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
