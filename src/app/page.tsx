import { FeaturesSection, HeroSection } from '@/components/Landing';

export default function Page() {
	return (
		<>
			<HeroSection />
			<FeaturesSection
				title="Integrate effortlessly with any technology stack"
				description="Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon."
			/>
		</>
	);
}
