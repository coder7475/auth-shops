const Press = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">Press</h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">Media Inquiries</h2>
            <p>
              For interviews, statements, speaking requests, or company assets,
              please reach out to our communications team at{" "}
              <a
                href="mailto:press@ride.robiulhossain.com"
                className="text-primary underline"
              >
                press@ridebook.com
              </a>
              . We aim to respond within one business day.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Press Kit</h2>
            <p>
              Download our logos, product screenshots, brand guidelines, and
              leadership bios in our press kit.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="bg-primary inline-block rounded-md px-4 py-2 text-white hover:opacity-90"
              >
                Download Press Kit
              </a>
            </div>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Company Overview</h2>
            <p>
              RideBook is a modern ride-booking platform focused on safety,
              reliability, and a delightful experience for riders and drivers.
              We operate in multiple cities and are expanding rapidly.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Latest News</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                RideBook launches in new cities with improved safety features.
              </li>
              <li>
                Partnership announced to support sustainable urban mobility.
              </li>
              <li>
                New driver benefits program focuses on flexibility and earnings.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Press;
