import "../styles/globals.css";
import Nav from "../components/Nav";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
