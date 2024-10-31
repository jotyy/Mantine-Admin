import { PageContainer } from "@/components/PageContainer/PageContainer";
import { ProductTable } from "@/components/Products/ProductTable";

export default function ProductsPage() {
	return (
		<PageContainer title="Products">
			<ProductTable />
		</PageContainer>
	);
}
