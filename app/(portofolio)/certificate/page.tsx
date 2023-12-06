import AnimatedText from "@/components/framer-motion/animation-text";
import DetailCertificate from "./_components/detail-certificates";
import { certificates } from "@/constant/certificates";

export const metadata = {
  title: "Certificate",
};

const CertificatePage = () => {
  return (
    <div className="mt-32 w-full min-h-screen xs:mt-8 lg:mt-16">
      <AnimatedText text="Sertifikat" className="lg:!text-7xl sm:!text-6xl xs:!text-3xl  mb-16 sm:mb-8" />
      <h1 className="text-center text-2xl my-2">Telah menerima <b>{certificates.length}</b> sertifikat.</h1>
      {
        certificates.map((item,index)=>(
          <DetailCertificate 
          key={index}
          title={item.title}
          credentials={item.credentials}
          img={item.img}
          summary={item.summary}
          link={item.link}
          />
        ))
      }
    </div>
  );
};

export default CertificatePage;
