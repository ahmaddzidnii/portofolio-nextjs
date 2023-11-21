import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-20  container">{children}</main>
      <Footer />
    </>
  );
};

export default PortofolioLayout;
