import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
}
