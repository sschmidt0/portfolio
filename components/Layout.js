import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content">
      { children }
      {/* <Footer /> */}
    </div>
  </>
);

export default Layout;
