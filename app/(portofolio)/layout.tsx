import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "react-hot-toast";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <main className="pt-20  container">{children}</main>
      <Footer />
    </>
  );
};

export default PortofolioLayout;
