import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart, QuantityOption } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const [quantityOption, setQuantityOption] = useState<QuantityOption>("1kg");
  const { items, addToCart, updateQuantity } = useCart();

  const cartItem = items.find(
    (i) => i.product.id === product.id && i.quantityOption === quantityOption
  );

  const price =
    quantityOption === "1kg"
      ? product.pricePerKg
      : Math.round(product.pricePerKg / 2);

  const handleAdd = () => {
    addToCart(product, quantityOption);
    toast.success("Product Added", {
      description: `${product.name} (${quantityOption === "1kg" ? "1 KG" : "½ KG"})`,
      duration: 2000,
    });
  };

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
        <h3 className="font-heading font-bold text-base">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.nameEn}</p>

        {/* KG Switch */}
        <div className="flex gap-2">
          <button
            onClick={() => setQuantityOption("1kg")}
            className={`flex-1 text-xs py-1.5 rounded-md border ${
              quantityOption === "1kg"
                ? "bg-primary text-primary-foreground"
                : "bg-background border-border"
            }`}
          >
            1 KG
          </button>
          <button
            onClick={() => setQuantityOption("halfkg")}
            className={`flex-1 text-xs py-1.5 rounded-md border ${
              quantityOption === "halfkg"
                ? "bg-primary text-primary-foreground"
                : "bg-background border-border"
            }`}
          >
            ½ KG
          </button>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">₹{price}</span>

          {!cartItem ? (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(product.id, cartItem.quantity - 1, quantityOption)
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
                  updateQuantity(product.id, cartItem.quantity + 1, quantityOption)
                }
                className="p-1.5 bg-secondary rounded hover:bg-muted transition"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
