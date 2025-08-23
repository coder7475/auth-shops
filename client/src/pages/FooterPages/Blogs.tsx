const blogPosts = [
  {
    title: "How RideBook Improves Urban Mobility",
    date: "Jan 5, 2025",
    excerpt:
      "Discover how RideBook is enhancing daily commutes with smarter routing, better reliability, and a rider-first experience.",
  },
  {
    title: "Safety Features You Should Know About",
    date: "Dec 20, 2024",
    excerpt:
      "From trip sharing to emergency assistance, learn about the built-in protections that help keep riders and drivers safe.",
  },
  {
    title: "Sustainability at RideBook",
    date: "Nov 28, 2024",
    excerpt:
      "Our initiatives to reduce emissions, promote shared rides, and support greener cities across our operating regions.",
  },
  {
    title: "Tips for First-Time Riders",
    date: "Nov 10, 2024",
    excerpt:
      "A quick guide to booking your first ride, optimizing pickup locations, and enjoying a smooth trip.",
  },
];

const Blogs = () => {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <div className="dark:bg-accent w-full max-w-3xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">RideBook Blog</h1>
        <p className="text-muted-foreground mb-8 text-center text-sm">
          Insights, updates, and tips from the RideBook team.
        </p>

        <div className="space-y-5">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="hover:bg-muted/40 rounded-md border p-5 transition-colors"
            >
              <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                {post.date}
              </div>
              <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
              <p className="text-muted-foreground mb-3 text-sm">
                {post.excerpt}
              </p>
              <a href="#" className="text-primary text-sm underline">
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
