import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
