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
				title="Integrate effortlessly with any technology stack"
				description="Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
			/>
		</LandingContainer>
	);
}
