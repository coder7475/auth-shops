const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-6 border-t border-gray-200 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="text-center md:text-left text-sm text-gray-600">
          &copy; {year} <span className="font-semibold">AuthShops</span>. All
          rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
          <a
            href="https://github.com/your-repo/auth-shops"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Vercel
          </a>
          <a
            href="https://www.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Cloudflare Pages
          </a>
          <a href="mailto:support@authshops.com" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
