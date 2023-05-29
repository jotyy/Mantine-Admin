import { Footer } from '@/components/Footer/Footer';
import { EmailSection } from '@/components/Landing/EmailSection';
import { FeaturesSection } from '@/components/Landing/FeaturesSection';
import { Header } from '@/components/Landing/Header';
import { HeroSection } from '@/components/Landing/HeroSection';
import { LandingContainer } from '@/components/Landing/LandingContainer';

export default function Page() {
	return (
		<LandingContainer>
			<Header
				links={[
					{
						link: '/about',
						label: 'Home',
					},
					{
						link: '/learn',
						label: 'Features',
					},
					{
						link: '/pricing',
						label: 'Pricing',
					},
				]}
			/>
			<HeroSection />
			<FeaturesSection
				title="Features"
				description="This project is an experiment to see how a modern admin application, with features like auth, API routes, and static pages would work in Next.js 13 app dir."
			/>
			<EmailSection />
			<Footer />
		</LandingContainer>
	);
}
