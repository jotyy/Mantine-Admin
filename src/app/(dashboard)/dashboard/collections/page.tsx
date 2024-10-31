import { CollectionTable } from "@/components/Collections/CollectionTable";
import { PageContainer } from "@/components/PageContainer/PageContainer";

export default function CollectionsPage() {
	return (
		<PageContainer title="Collections">
			<CollectionTable />
		</PageContainer>
	);
}
