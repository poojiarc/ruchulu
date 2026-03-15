import { useCart } from "@/context/CartContext";
import { getItemPrice } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items, totalPrice, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="py-20 text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/products" className="text-primary font-semibold underline">
          Browse Products
        </Link>
      </main>
    );
  }

  const handleOrder = () => {
    const itemsList = items
      .map((item) => {
        const price = getItemPrice(item.product, item.quantityOption);
        return `• ${item.product.name} (${item.product.nameEn}) - ${item.quantityOption === "1kg" ? "1 KG" : "½ KG"} x ${item.quantity} = ₹${price * item.quantity}`;
      })
      .join("\n");
    const msg = encodeURIComponent(`🛒 New Order from Chandaluru Ruchulu\n\n${itemsList}\n\n💰 Total: ₹${totalPrice}\n\nPlease confirm my order!`);
    window.open(`https://wa.me/919849578049?text=${msg}`, "_blank");
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold mb-8">Checkout</h1>
        <div className="space-y-4 mb-8">
          {items.map((item) => {
            const price = getItemPrice(item.product, item.quantityOption);
            return (
              <div key={`${item.product.id}-${item.quantityOption}`} className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border">
                <img src={item.product.image} alt={item.product.nameEn} className="w-16 h-16 rounded-md object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.quantityOption === "1kg" ? "1 KG" : "½ KG"} × {item.quantity}</p>
                </div>
                <p className="font-bold">₹{price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.product.id)} className="p-1 hover:bg-destructive/10 rounded">
                  <Trash2 className="h-4 w-4 text-destructive" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-whatsapp text-whatsapp-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
