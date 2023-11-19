import Navbar from "@/components/navbar";

const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-32">{children}</main>
    </>
  );
};

export default PortofolioLayout;
