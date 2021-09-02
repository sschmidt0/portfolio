import { Header } from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="content">
      { children }
    </div>
  </>
);

export default Layout;
