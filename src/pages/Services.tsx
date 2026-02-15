import {
  UtensilsCrossed, Cookie, Beef, FlaskConical, Package, Leaf, BookOpen, Truck, Award
} from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "Authentic Telugu Foods", desc: "Traditional recipes passed down through generations" },
  { icon: Cookie, title: "Traditional Sweets", desc: "Handmade sweets with pure ghee and jaggery" },
  { icon: Beef, title: "Homemade Snacks", desc: "Crunchy snacks made with love and care" },
  { icon: FlaskConical, title: "Pickles", desc: "Authentic Andhra pickles with natural ingredients" },
  { icon: Award, title: "Curry Powders", desc: "Freshly ground spice blends for perfect flavor" },
  { icon: Leaf, title: "Natural Ingredients", desc: "No preservatives, no chemicals, 100% natural" },
  { icon: BookOpen, title: "Traditional Recipes", desc: "Age-old Andhra recipes from our village kitchen" },
  { icon: Package, title: "Quality Packaging", desc: "Hygienic and attractive packaging for freshness" },
  { icon: Truck, title: "Pan India Delivery", desc: "We deliver across India with care" },
];

const Services = () => (
  <main className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
        Our <span className="text-primary">Services</span>
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        We bring the authentic taste of Andhra Pradesh to your doorstep
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <s.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Services;
