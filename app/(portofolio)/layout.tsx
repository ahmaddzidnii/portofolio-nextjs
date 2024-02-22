import { Toaster } from "react-hot-toast";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <main className="container  pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default PortofolioLayout;
