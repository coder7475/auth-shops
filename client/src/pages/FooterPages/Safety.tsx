const Safety = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Safety at RideBook
        </h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">1. Our Commitment</h2>
            <p>
              At RideBook, your safety is our top priority. We are dedicated to
              providing a secure and reliable experience for both riders and
              drivers, every time you use our platform.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">2. Driver Screening</h2>
            <p>
              All drivers undergo comprehensive background checks, including
              driving history and criminal record screenings, before joining
              RideBook. We continuously monitor driver performance to ensure
              ongoing safety.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              3. In-App Safety Features
            </h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                Share your trip status with trusted contacts in real time.
              </li>
              <li>24/7 in-app emergency assistance button.</li>
              <li>Anonymous feedback and rating system for every ride.</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">
              4. Community Guidelines
            </h2>
            <p>
              We expect all users to treat each other with respect and follow
              our community guidelines. Any reports of unsafe or inappropriate
              behavior are taken seriously and investigated promptly.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">5. COVID-19 Safety</h2>
            <p>
              We encourage all riders and drivers to follow local health
              guidelines, including mask-wearing and vehicle sanitization, to
              help keep our community safe.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">6. Contact Us</h2>
            <p>
              If you have any safety concerns or need assistance, please contact
              our support team at{" "}
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

export default Safety;
