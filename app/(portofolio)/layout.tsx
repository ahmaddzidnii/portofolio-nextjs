import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "react-hot-toast";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider appearance={{ baseTheme: dark }} publishableKey="">
        <Toaster position="top-center" />
        <Navbar />
        <main className="pt-20  container">{children}</main>
        <Footer />
      </ClerkProvider>
    </>
  );
};

export default PortofolioLayout;
