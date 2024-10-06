import { Intro } from "@/components/intro/Intro";
import { WorkExperience } from "@/components/work-experience/WorkExperience";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <WorkExperience />
      <Footer />
    </main>
  );
}
