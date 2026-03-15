import { useState, useEffect } from "react";
import { getProducts } from "@/api/products";
import { getCategories } from "@/api/categories";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products,} from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [search, setSearch] = useState("");
  const [backendProducts, setBackendProducts] = useState<any[]>([]);
  const [backendCategories, setBackendCategories] = useState<any[]>([]);
  useEffect(() => {
  getProducts().then((data) => {
    setBackendProducts(data);
  });
  getCategories().then((data) => {
    setBackendCategories(data);
  });

}, []);
// convert backend products to frontend format
const mappedBackendProducts = backendProducts.map((p) => ({
  id: `backend-${p.id}`,
  name: p.name_telugu,
  nameEn: p.name_english,
  category: p.category?.toLowerCase(),
  pricePerKg: p.price_per_kg,
  image: p.image,
}));

// find which categories already exist in backend
const backendCategoriesSet = new Set(
  mappedBackendProducts.map((p) => p.category)
);

// remove frontend products if backend products exist for that category
const frontendProductsFiltered = products.filter(
  (p) => !backendCategoriesSet.has(p.category)
);

// final product list
const allProducts = [...frontendProductsFiltered, ...mappedBackendProducts];

  const filtered = allProducts
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) =>
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(search.toLowerCase())
    );
    const allCategories = [
  ...backendCategories.map((c) => ({
    id: c.name_english.toLowerCase(),
    label: c.name_telugu,
    labelEn: c.name_english,
  })),
];

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
          Our <span className="text-primary">Products</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Authentic homemade Telugu foods
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSearchParams({})}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          {backendCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
  setSearchParams({ category: cat.name_english.toLowerCase() })
}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.name_english.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {cat.name_english} ({cat.name_telugu})
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products found.</p>
        )}
      </div>
    </main>
  );
};

export default Products;
