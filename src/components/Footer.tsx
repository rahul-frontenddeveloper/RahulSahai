const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rahul Sahani. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground"></span>
            <span className="text-primary"></span>
            <span className="text-sm text-muted-foreground"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
