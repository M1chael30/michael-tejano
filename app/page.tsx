import AboutAndExp from "@/components/layouts/about-and-exp";
import OthersAboutMe from "@/components/layouts/others-about-me";
import Header from "@/components/sections/header";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans space-y-8">
      <Header />
      <AboutAndExp />
      <TechStack />
      <OthersAboutMe />
    </div>
  );
}
