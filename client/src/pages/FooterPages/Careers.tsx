const Careers = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Careers at RideBook
        </h1>
        <div className="text-muted-foreground space-y-6 text-sm">
          <section>
            <h2 className="mb-2 text-lg font-semibold">Join Our Team</h2>
            <p>
              At RideBook, we're on a mission to revolutionize transportation.
              We're always looking for passionate, talented, and driven
              individuals to join our growing team. If you want to make a real
              impact and help shape the future of mobility, we want to hear from
              you!
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Why Work With Us?</h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>Collaborative and inclusive work environment</li>
              <li>Opportunities for growth and professional development</li>
              <li>Competitive compensation and benefits</li>
              <li>Work on innovative projects that matter</li>
              <li>Flexible work arrangements</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Open Positions</h2>
            <p>
              We're always interested in meeting talented people! While we may
              not have specific openings listed right now, feel free to send
              your resume and a brief introduction to{" "}
              <a
                href="mailto:careers@ride.robiulhossain.com"
                className="text-primary underline"
              >
                careers@ride.robiulhossain.com
              </a>
              .
            </p>
            <p>
              We regularly hire for roles in engineering, product, design,
              operations, marketing, and customer support.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold">Internships</h2>
            <p>
              Are you a student or recent graduate? We offer internship
              opportunities throughout the year. Reach out to us to learn more!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
