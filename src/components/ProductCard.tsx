// import { useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import { Product } from "@/data/products";
// import { useCart, QuantityOption } from "@/context/CartContext";

// const ProductCard = ({ product }: { product: Product }) => {
//   const [quantityOption, setQuantityOption] = useState<QuantityOption>("1kg");
//   const { addToCart } = useCart();

//   const price = quantityOption === "1kg" ? product.pricePerKg : Math.round(product.pricePerKg / 2);

//   return (
//     <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group">
//       <div className="aspect-square overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.nameEn}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//         />
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="font-heading font-bold text-base">{product.name}</h3>
//         <p className="text-sm text-muted-foreground">{product.nameEn}</p>

//         {/* Quantity selector */}
//         <div className="flex gap-2">
//           <button
//             onClick={() => setQuantityOption("1kg")}
//             className={`flex-1 text-xs py-1.5 rounded-md font-medium border transition-colors ${
//               quantityOption === "1kg"
//                 ? "bg-primary text-primary-foreground border-primary"
//                 : "bg-background border-border text-foreground hover:border-primary"
//             }`}
//           >
//             1 KG
//           </button>
//           <button
//             onClick={() => setQuantityOption("halfkg")}
//             className={`flex-1 text-xs py-1.5 rounded-md font-medium border transition-colors ${
//               quantityOption === "halfkg"
//                 ? "bg-primary text-primary-foreground border-primary"
//                 : "bg-background border-border text-foreground hover:border-primary"
//             }`}
//           >
//             ½ KG
//           </button>
//         </div>

//         <div className="flex items-center justify-between pt-1">
//           <span className="text-xl font-bold text-primary">₹{price}</span>
//           <button
//             onClick={() => addToCart(product, quantityOption)}
//             className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
//           >
//             <ShoppingCart className="h-4 w-4" />
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart, QuantityOption } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const [quantityOption, setQuantityOption] =
    useState<QuantityOption>("1kg");

  const { items, addToCart, updateQuantity } = useCart();

  const cartItem = items.find(
    (i) =>
      i.product.id === product.id &&
      i.quantityOption === quantityOption
  );

  const price =
    quantityOption === "1kg"
      ? product.pricePerKg
      : Math.round(product.pricePerKg / 2);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-border group">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.nameEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-heading font-bold text-base">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {product.nameEn}
        </p>

        {/* KG SWITCH */}
        <div className="flex gap-2">
          <button
            onClick={() => setQuantityOption("1kg")}
            className={`flex-1 text-xs py-1.5 rounded-md border ${
              quantityOption === "1kg"
                ? "bg-primary text-white"
                : "bg-background border-border"
            }`}
          >
            1 KG
          </button>

          <button
            onClick={() => setQuantityOption("halfkg")}
            className={`flex-1 text-xs py-1.5 rounded-md border ${
              quantityOption === "halfkg"
                ? "bg-primary text-white"
                : "bg-background border-border"
            }`}
          >
            ½ KG
          </button>
        </div>

        {/* PRICE + ACTION */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">
            ₹{price}
          </span>

          {!cartItem ? (
            <button
              onClick={() => addToCart(product, quantityOption)}
              className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3">
              {/* Added button styled */}
              <div className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold">
                <ShoppingCart className="h-4 w-4" />
                Added
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 ml-1">
                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cartItem.quantity - 1,
                      quantityOption
                    )
                  }
                  className="p-1.5 bg-secondary rounded hover:bg-muted transition"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-6 text-center font-semibold">
                  {cartItem.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      product.id,
                      cartItem.quantity + 1,
                      quantityOption
                    )
                  }
                  className="p-1.5 bg-secondary rounded hover:bg-muted transition"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;