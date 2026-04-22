const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-gradient-to-r from-[#dfb7c2] via-primary to-[#650028] text-white backdrop-blur-sm">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <p className="font-heading text-lg font-bold tracking-wide">AllPlay Romania</p>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a href="#" className="opacity-90 transition-opacity hover:opacity-100">
            Forms
          </a>
          <a href="#" className="opacity-90 transition-opacity hover:opacity-100">
            Rules
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
