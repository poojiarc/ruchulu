import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Heart, Leaf, Award, Shield } from "lucide-react";

const featuredProducts = products.filter((_, i) => [0, 4, 10, 18, 28, 32, 39, 45].includes(i));

const features = [
  { icon: Heart, title: "Homemade", desc: "Prepared with love using traditional recipes" },
  { icon: Leaf, title: "Natural", desc: "100% natural ingredients, no preservatives" },
  { icon: Award, title: "Fresh", desc: "Freshly made to order for every customer" },
  { icon: Shield, title: "Authentic", desc: "Genuine Andhra flavors from Chandaluru" },
];

const Index = () => (
  <main>
    <HeroSlider />

    {/* Why Choose Us */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-primary">Chandaluru Ruchulu?</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <f.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary">Popular Products</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Handpicked favorites from our traditional kitchen
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Lakshmi D.", text: "The avakaya pickle reminds me of my grandmother's recipe. Absolutely authentic!" },
            { name: "Ravi K.", text: "Best homemade sweets I've ever ordered online. The laddu are divine!" },
            { name: "Priya S.", text: "Love the quality and freshness. My family orders every month now." },
          ].map((t) => (
            <div key={t.name} className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 text-accent fill-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-3">"{t.text}"</p>
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to Taste Tradition?
        </h2>
        <p className="mb-8 opacity-90 max-w-lg mx-auto">
          Order now and experience the authentic flavors of Andhra Pradesh delivered to your doorstep.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Browse Products
          </Link>
          <a
            href="https://wa.me/919849578049"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
