import { Heart, Eye, Target, Users, Sparkles, Leaf, ShieldCheck } from "lucide-react";

const About = () => (
  <main className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
        About <span className="text-primary">Chandaluru Ruchulu</span>
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Authentic Taste. Straight from Chandaluru.
      </p>

      {/* Story Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="font-heading text-2xl font-bold">Our Story</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Chandaluru Ruchulu</strong> is not just a brand. It is a
          dream that waited for years.
        </p>

        <div className="flex items-start gap-3 mb-4">
          <Users className="h-5 w-5 text-primary mt-1" />
          <p className="text-muted-foreground leading-relaxed">
            Behind this name stand five strong women — Amma, Ammama,
            Athha, Pinni, and Akka. For many years, they dedicated their
            lives to their families, sacrificing time, ambitions, and
            personal dreams to raise children and build strong households.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          Now, it is their time. Chandaluru Ruchulu was born from their
          long-cherished dream of becoming entrepreneurs — to step forward,
          stand strong, and create something of their own. The very steps
          they take today as businesswomen are called Chandaluru Ruchulu.
        </p>

        <div className="flex items-start gap-3 mb-4">
          <Leaf className="h-5 w-5 text-primary mt-1" />
          <p className="text-muted-foreground leading-relaxed">
            Every product we make carries years of traditional cooking
            experience, authentic Andhra village recipes, pure ingredients,
            homemade care, hygiene, and most importantly — love and passion.
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not mass produce. We do not compromise on taste. We do not
          rush tradition. Our pickles and snacks are crafted using
          high-quality ingredients and traditional homemade methods — just
          the way they are meant to be.
        </p>

        <div className="flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-primary mt-1" />
          <p className="text-muted-foreground leading-relaxed">
            Because freshness matters. Quality matters. And taste matters.
            When you taste Chandaluru Ruchulu, you are tasting authentic
            village flavor — food made with care, love, and passion.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            icon: Heart,
            title: "Our Love",
            text: "Every product is prepared with homemade care, preserving the warmth and love of a village kitchen.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To empower women entrepreneurs while bringing authentic Andhra flavors to homes everywhere.",
          },
          {
            icon: Target,
            title: "Our Mission",
            text: "To deliver fresh, traditional, preservative-free foods without compromising taste or quality.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-xl p-6 border border-border text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <item.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
