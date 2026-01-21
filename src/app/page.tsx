import Hero from '@/components/hero/Hero';
import ChooseYourPath from '@/components/interactive/ChooseYourPath';
import Timeline from '@/components/timeline/Timeline';
import StoryForm from '@/components/submission/StoryForm';
import CommunityWall from '@/components/community/CommunityWall';
import Footer from '@/components/ui/Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <ChooseYourPath />
            <Timeline />
            <CommunityWall />
            <StoryForm />
            <Footer />
        </main>
    );
}
