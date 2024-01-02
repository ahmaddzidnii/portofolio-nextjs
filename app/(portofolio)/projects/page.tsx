import AnimatedText from "@/components/framer-motion/animation-text";
import FeaturedProject from "./_components/featured-project";
import Project from "./_components/project";

export const metadata = {
  title: "Project",
};
const ProjectsPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center pt-16">
      <AnimatedText
        text="My projects."
        className="lg:!text-7xl sm:!text-6xl xs:!text-3xl mb-16 sm:mb-8"
      />
      <div className="grid gric-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            title="Open API Random."
            summary="
            Pembuatan proyek Open API Random melibatkan langkah-langkah seperti perencanaan kebutuhan pengguna, desain endpoint API, implementasi logika pembangkitan data acak, dokumentasi API, pengujian fungsional dan beban, serta implementasi infrastruktur. Setelah semua diuji dan disiapkan, proyek dapat diluncurkan dengan memberikan akses terbuka kepada pengguna untuk mengakses data acak sesuai kebutuhan mereka. Ini memungkinkan pengembang untuk membuat aplikasi yang memanfaatkan data acak dengan mudah dan efisien."
            link="https://docsapi.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/rest-api-ahmad-zidni"
            img="/img/projects/open-api.png"
            type="Project Backend"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Open API Random."
            link="https://docsapi.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/rest-api-ahmad-zidni"
            img="/img/projects/open-api.png"
            type="API"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Anime."
            link="https://anime.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/Web_Anime"
            img="/img/projects/anime.png"
            type="Frontend"
          />
        </div>

        <div className="col-span-12">
          <FeaturedProject
            title="Pencarian Anime"
            summary="Proyek ini adalah sebuah situs web pencarian anime yang dibangun dengan menggunakan teknologi Next.js dan Tailwind CSS, serta memanfaatkan API dari Jikan API. Fokus utama proyek ini adalah pada pengembangan front-end, yang menjadi wadah bagi penerapan konsep-konsep yang telah dipelajari. Dengan memanfaatkan teknologi modern seperti Next.js untuk sisi klien dan Tailwind CSS untuk tata letak yang responsif, proyek ini bertujuan memberikan pengalaman pengguna yang mulus dan menarik. Melalui integrasi dengan Jikan API, situs ini memberikan kemampuan pencarian anime dengan cepat dan akurat. Tujuan utama dari pembuatan web ini adalah untuk mengasah keterampilan front-end pengembang melalui implementasi praktis dan membangun pemahaman yang lebih baik tentang integrasi API dalam konteks pengembangan web."
            link="https://anime.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/Web_Anime"
            img="/img/projects/anime.png"
            type="Project Frontend"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Open API Random."
            link="https://docsapi.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/rest-api-ahmad-zidni"
            img="/img/projects/open-api.png"
            type="API"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Anime."
            link="https://anime.ahmadzidni.site"
            github="https://github.com/ahmaddzidnii/Web_Anime"
            img="/img/projects/anime.png"
            type="Frontend"
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
