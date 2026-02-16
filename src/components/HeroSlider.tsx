// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import hero1 from "@/assets/hero-1.jpg";
// import hero2 from "@/assets/hero-2.jpg";

// const slides = [hero1, hero2];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
//           style={{ opacity: i === current ? 1 : 0 }}
//         >
//           <img src={slide} alt={`Hero ${i + 1}`} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-foreground/50" />
//         </div>
//       ))}

//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <div className="text-center px-4 max-w-3xl animate-fade-in">
//           <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight drop-shadow-lg">
//             Homemade Pickles &<br />Traditional Andhra Foods
//           </h1>
//           <p className="text-background/90 text-base md:text-lg mb-8 drop-shadow">
//             Made with Love • Natural Ingredients • Authentic Taste
//           </p>
//           <Link
//             to="/products"
//             className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full hover:bg-background/50 transition-colors"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-6 w-6 text-background" />
//       </button>
//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full hover:bg-background/50 transition-colors"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-6 w-6 text-background" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-background/50"}`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [hero1, hero2];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* Clear image without overlay */}
          <img
            src={slide}
            alt={`Hero ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Optional Shop Now button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/products"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90"
        >
          Shop Now
        </Link>
      </div>

      <button
        onClick={() =>
          setCurrent((c) => (c - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-background" />
      </button>

      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-background" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-accent" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;