import { Heart, Eye, Target } from "lucide-react";

const About = () => (
  <main className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
        About <span className="text-primary">Chandaluru Ruchulu</span>
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Bringing the authentic taste of Andhra to every home
      </p>

      {/* Story */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="font-heading text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Chandaluru Ruchulu brings authentic homemade pickles and traditional snacks prepared using age-old Andhra recipes. Every product is made with natural ingredients, love, and hygiene to deliver nostalgic flavors.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our journey started from a small village kitchen in Chandaluru, where recipes were passed down through generations. Today, we bring those same traditional flavors to families across India, maintaining the authenticity and quality that our mothers and grandmothers perfected over the years.
        </p>
      </section>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Heart, title: "Our Love", text: "Every product is crafted with genuine love and care, using only the finest natural ingredients." },
          { icon: Eye, title: "Our Vision", text: "To make authentic Andhra homemade foods accessible to every family, preserving traditional recipes." },
          { icon: Target, title: "Our Mission", text: "To deliver the purest, most authentic flavors of Andhra Pradesh with no preservatives or chemicals." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <item.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
