import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";


export default function Layout({ children }) {
  return (
    < >
        <NavBar />
        {children}
        <Footer />
    </>
  );
}
