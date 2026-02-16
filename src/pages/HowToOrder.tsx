// import { motion } from "framer-motion";
// import {
//   ShoppingCart,
//   ClipboardList,
//   MessageCircle,
//   CreditCard,
//   Truck,
//   BadgeCheck,
// } from "lucide-react";

// // Update the import path if your project structure differs
// import howToOrderImg from "@/assets/How to Order.jpeg";

// const steps = [
//   {
//     icon: ShoppingCart,
//     title: "Select Products",
//     desc: "Choose your favorite pickles, snacks, sweets, and traditional foods.",
//   },
//   {
//     icon: ClipboardList,
//     title: "Fill Your Details",
//     desc: "Provide your name, address, and contact details for delivery.",
//   },
//   {
//     icon: MessageCircle,
//     title: "Confirm on WhatsApp",
//     desc: "Send your order via WhatsApp and confirm availability and pricing.",
//   },
//   {
//     icon: CreditCard,
//     title: "Make UPI Payment",
//     desc: "Pay securely through UPI after order confirmation.",
//   },
//   {
//     icon: Truck,
//     title: "Delivery via APSRTC Cargo",
//     desc: "Your order is shipped safely through APSRTC Cargo service.",
//   },
// ];

// const highlights = [
//   "No Preservatives",
//   "Made to Order",
//   "Secure Payment",
//   "Fast Delivery",
// ];

// const HowToOrder = () => {
//   return (
//     <main className="py-12">
//       <div className="container mx-auto px-4">
//         {/* Page Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
//             How to <span className="text-primary">Order</span>
//           </h1>
//           <p className="text-muted-foreground max-w-xl mx-auto">
//             Follow these simple steps to enjoy authentic homemade foods
//             delivered from our village kitchen to your home.
//           </p>
//         </motion.div>

//         {/* Steps Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
//                   <step.icon className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="font-heading font-bold text-lg">
//                   Step {index + 1}
//                 </h3>
//               </div>

//               <h4 className="font-semibold mb-2">{step.title}</h4>
//               <p className="text-sm text-muted-foreground">
//                 {step.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Highlights */}
//         <div className="mt-12 flex flex-wrap justify-center gap-4">
//           {highlights.map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-sm font-medium"
//             >
//               <BadgeCheck className="h-4 w-4 text-accent" />
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Cargo Charges Notice */}
//         <div className="mt-8 text-center">
//           <p className="text-lg font-semibold text-destructive">
//             APSRTC Cargo charges will be extra and depend on destination.
//           </p>
//         </div>

//         {/* Instruction Image */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-12 max-w-6xl mx-auto"
//         >
//           <div className="rounded-2xl overflow-hidden border border-border shadow-md">
//             <img
//               src={howToOrderImg}
//               alt="How to order steps"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// export default HowToOrder;


import { motion } from "framer-motion";
import {
  ShoppingCart,
  ClipboardList,
  MessageCircle,
  CreditCard,
  Truck,
  BadgeCheck,
} from "lucide-react";

// Update the import path if your project structure differs
import howToOrderImg from "@/assets/How to Order.jpeg";

const steps = [
  {
    icon: ShoppingCart,
    title: "Select Products",
    desc: "Choose your favorite pickles, snacks, sweets, and traditional foods.",
  },
  {
    icon: ClipboardList,
    title: "Fill Your Details",
    desc: "Provide your name, address, and contact details for delivery.",
  },
  {
    icon: MessageCircle,
    title: "Confirm on WhatsApp",
    desc: "Send your order via WhatsApp and confirm availability and pricing.",
  },
  {
    icon: CreditCard,
    title: "Make UPI Payment",
    desc: "Pay securely through UPI after order confirmation.",
  },
  {
    icon: Truck,
    title: "Delivery via APSRTC Cargo",
    desc: "Your order is shipped safely through APSRTC Cargo service.",
  },
];

const highlights = [
  "No Preservatives",
  "Made to Order",
  "Secure Payment",
  "Fast Delivery",
];

const HowToOrder = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            How to <span className="text-primary">Order</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow these simple steps to enjoy authentic homemade foods
            delivered from our village kitchen to your home.
          </p>
        </motion.div>

        {/* Instruction Image - Now placed FIRST */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-6xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-md">
            <img
              src={howToOrderImg}
              alt="How to order steps"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg">
                  Step {index + 1}
                </h3>
              </div>

              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              <BadgeCheck className="h-4 w-4 text-accent" />
              {item}
            </div>
          ))}
        </div>

        {/* Cargo Charges Notice */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-destructive">
            APSRTC Cargo charges will be extra and depend on destination.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HowToOrder;
