import AnimatedText from "@/components/framer-motion/animation-text";
import FeaturedProject from "./_components/featured-project";
import Project from "./_components/project";

export const metadata = {
  title: "Project",
};
const ProjectsPage = () => {
  return (
    <main className="flex flex-col w-full items-center justify-center pt-16">
      <AnimatedText text="My projects." className="lg:!text-7xl sm:!text-6xl xs:!text-3xl mb-16 sm:mb-8" />
      <div className="grid gric-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            title="anime"
            summary="Vestibulum ac congue diam. Nulla convallis dui ac dignissim tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eu justo ex. Sed viverra bibendum tristique. Nunc libero velit, aliquet mattis suscipit a, viverra nec erat. Mauris pharetra diam vitae quam scelerisque, ut cursus velit sodales."
            link="/"
            github="/"
            img="https://placehold.co/500x400"
            type="Featured Project"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project title="Open API Random." link="/" github="/" img="https://placehold.co/500x400" type="Featured Project" />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project title="Open API Random." link="/" github="/" img="https://placehold.co/500x400" type="Featured Project" />
        </div>

        <div className="col-span-12">
          <FeaturedProject
            title="anime"
            summary="Vestibulum ac congue diam. Nulla convallis dui ac dignissim tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eu justo ex. Sed viverra bibendum tristique. Nunc libero velit, aliquet mattis suscipit a, viverra nec erat. Mauris pharetra diam vitae quam scelerisque, ut cursus velit sodales."
            link="/"
            github="/"
            img="https://placehold.co/500x400"
            type="Featured Project"
          />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project title="Open API Random." link="/" github="/" img="https://placehold.co/500x400" type="Featured Project" />
        </div>

        <div className="col-span-6 sm:col-span-12">
          <Project title="Open API Random." link="/" github="/" img="https://placehold.co/500x400" type="Featured Project" />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
