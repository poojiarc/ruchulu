// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import hero1 from "@/assets/hero-1.jpg";
// import hero2 from "@/assets/hero-2.jpg";

// const slides = [hero1, hero2];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setCurrent((c) => (c + 1) % slides.length),
//       5000
//     );
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
//           {/* Clear image without overlay */}
//           <img
//             src={slide}
//             alt={`Hero ${i + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}

//       {/* Optional Shop Now button */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
//         <Link
//           to="/products"
//           className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90"
//         >
//           Shop Now
//         </Link>
//       </div>

//       <button
//         onClick={() =>
//           setCurrent((c) => (c - 1 + slides.length) % slides.length)
//         }
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full"
//       >
//         <ChevronLeft className="h-6 w-6 text-background" />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/30 rounded-full"
//       >
//         <ChevronRight className="h-6 w-6 text-background" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === current ? "bg-accent" : "bg-background/50"
//             }`}
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

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://api.chandalururuchulu.com/api/banners/")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Banner API error:", err));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.length === 0 ? (
        /* Loading placeholder */
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Loading banners...</p>
        </div>
      ) : (
        slides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))
      )}

      {/* Shop button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link
          to="/products"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg"
        >
          Shop Now
        </Link>
      </div>

      {/* Left arrow */}
      <button
        onClick={() =>
          setCurrent((c) => (c - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </section>
  );
};

export default HeroSlider;
