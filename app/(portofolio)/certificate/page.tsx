import AnimatedText from "@/components/framer-motion/animation-text";
import DetailCertificate from "./_components/detail-certificates";
import { certificates } from "@/constant/certificates";

export const metadata = {
  title: "Certificate",
};

const CertificatePage = () => {
  return (
    <div className="mt-32 min-h-screen w-full lg:mt-16 xs:mt-8">
      <AnimatedText
        text="Sertifikat"
        className="mb-16 lg:!text-7xl sm:mb-8  sm:!text-6xl xs:!text-3xl"
      />
      <h1 className="my-2 text-center text-2xl">
        Telah menerima <b>{certificates.length}</b> sertifikat.
      </h1>
      {certificates.map((item, index) => (
        <DetailCertificate
          key={index}
          title={item.title}
          credentials={item.credentials}
          img={item.img}
          summary={item.summary}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default CertificatePage;
