const Layout = ({ children }) => {
  const date = new Date();

  return (
    <>
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
      <main>{children}</main>
      <footer className="relative w-full pt-24 pb-64 bg-black text-gray-50">
        <section className="flex items-start justify-between max-w-6xl mx-auto">
          <div className="flex items-baseline justify-start">
            <a href="#">
              <h1 className="text-3xl font-bold">LeVeL</h1>
            </a>
            <nav className="ml-24 font-semibold capitalize">
              <ul>
                <li className="mb-6 font-bold text-gray-400 uppercase">
                  Company
                </li>
                <li className="mb-4">
                  <a className="hover:text-primary" href="#">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:text-primary" href="#">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Artists
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center justify-start">
            {/* facebook */}
            <a href="#">
              <svg
                className="w-10 h-10 mx-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* instagram */}
            <a href="#">
              <svg
                className="w-10 h-10 mx-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            {/* dribble */}
            <a href="#">
              <svg
                className="w-10 h-10 mx-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.28 10.28 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248a65.473 65.473 0 00-3.8-5.928 10.275 10.275 0 00-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.19 10.19 0 0012 1.764c-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
            </a>
          </div>
        </section>
        <section className="absolute bottom-0 left-0 w-full h-12 text-xs text-gray-400">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div>
              <p>
                Copyright © LeVeL {date.getFullYear()} | All rights reserved
              </p>
            </div>
            <div>
              <p>
                JAMstack Website by{" "}
                <a
                  href="https:chaddwebdesign.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chadd Web Design
                </a>
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Layout;
