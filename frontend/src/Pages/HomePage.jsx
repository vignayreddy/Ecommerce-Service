import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/T-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/Shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/Glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/Jackets", name: "Jackets",imageUrl: "/jackets.jpg" },
	{ href: "/Suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/Bags", name: "Bags", imageUrl: "/bags.jpg" },
	{href:"/Electronics", name: "Electronics", imageUrl: "/electronics.jpg"},
	{href: "Sarees", name: "Sarees", imageUrl: "/sarees.jpg"}
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
		console.log('Featured Products: ', products);	
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{/* {!isLoading && products.length >= 0 && <FeaturedProducts featuredProducts={products} />} */}
			</div>
		</div>
	);
};
export default HomePage;