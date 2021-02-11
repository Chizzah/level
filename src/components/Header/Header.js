const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black text-gray-50">
      <div className="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
        <div>
          <a href="/">
            <h1 className="text-3xl font-bold">LeVeL</h1>
          </a>
        </div>
        <nav className="flex items-center justify-start font-semibold capitalize">
          <ul className="flex items-center justify-start">
            <li className="mx-4 hover:text-primary">
              <a href="#">About</a>
            </li>
            <li className="mx-4 hover:text-primary">
              <a href="#">Shop</a>
            </li>
          </ul>
          <div>
            <span className="mx-4">|</span>
          </div>
          <ul className="flex items-center justify-start">
            <li className="mx-2 hover:text-primary">
              <a href="#">Sign up</a>
            </li>
            <li className="mx-2 hover:text-primary">
              <a href="#">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
