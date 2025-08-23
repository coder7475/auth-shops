const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <p className="text-center">
        &copy; {year} AuthShops. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
