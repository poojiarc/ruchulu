import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart, getItemPrice } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-foreground/40" onClick={() => setIsCartOpen(false)} />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-background shadow-2xl animate-slide-in flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-heading text-xl font-bold">Shopping Cart ({totalItems})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-secondary rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => {
                const price = getItemPrice(item.product, item.quantityOption);
                return (
                  <div key={`${item.product.id}-${item.quantityOption}`} className="flex gap-4 p-3 bg-card rounded-lg">
                    <img src={item.product.image} alt={item.product.nameEn} className="w-16 h-16 rounded-md object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.product.nameEn}</p>
                      <p className="text-xs text-accent font-medium">
                        {item.quantityOption === "1kg" ? "1 KG" : "½ KG"} — ₹{price}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded bg-secondary hover:bg-muted"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded bg-secondary hover:bg-muted"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 rounded hover:bg-destructive/10 ml-auto"
                        >
                          <Trash2 className="h-3.5 w-3.5 text-destructive" />
                        </button>
                      </div>
                    </div>
                    <p className="font-semibold text-sm whitespace-nowrap">₹{price * item.quantity}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border px-6 py-4 space-y-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
