import { Toaster } from "react-hot-toast";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { Suspense } from "react";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-center" />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="container  pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default PortofolioLayout;
