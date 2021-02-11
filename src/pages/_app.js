import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
