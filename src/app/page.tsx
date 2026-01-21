import Hero from "@/components/hero/Hero";
import ChoosePath from "@/components/interactive/ChoosePath";
import Timeline from "@/components/timeline/Timeline";
import SubmissionForm from "@/components/submission/SubmissionForm";
import CommunityWall from "@/components/community/CommunityWall";
import Footer from "@/components/ui/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ChoosePath />
      <Timeline />
      <SubmissionForm />
      <CommunityWall />
      <Footer />
    </main>
  );
}
