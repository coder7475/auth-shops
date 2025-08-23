const HelpCenter = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Help Center</h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">1. Getting Started</h2>
            <p>
              Welcome to the RideBook Help Center! Here you’ll find answers to
              common questions and guidance on using our platform. If you’re
              new, start by creating an account and exploring our features.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">2. Account & Profile</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong>How do I reset my password?</strong> <br />
                Go to the login page and click "Forgot Password" to receive a
                reset link.
              </li>
              <li>
                <strong>How do I update my profile information?</strong> <br />
                Navigate to your account settings to edit your details.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">3. Booking a Ride</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong>How do I book a ride?</strong> <br />
                Enter your pickup and drop-off locations, then choose your ride
                type and confirm.
              </li>
              <li>
                <strong>Can I schedule rides in advance?</strong> <br />
                Yes, you can schedule rides for a future date and time from the
                booking screen.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              4. Payments & Receipts
            </h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong>What payment methods are accepted?</strong> <br />
                We accept major credit/debit cards and digital wallets.
              </li>
              <li>
                <strong>How do I view my ride receipts?</strong> <br />
                Receipts are available in your ride history and are also emailed
                to you.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">5. Support</h2>
            <p>
              Didn’t find what you’re looking for? Contact our support team at{" "}
              <a
                href="mailto:support@ride.robiulhossain.com"
                className="text-primary underline"
              >
                support@ride.robiulhossain.com
              </a>{" "}
              or visit our{" "}
              <a href="/faq" className="text-primary underline">
                FAQ
              </a>{" "}
              page for more information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
