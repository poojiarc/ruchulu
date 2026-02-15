import { CartItem, QuantityOption, getItemPrice } from "@/context/CartContext";

export const WHATSAPP_NUMBER = "919849578049"; // your number

const getQtyLabel = (option: QuantityOption) =>
  option === "1kg" ? "1 KG" : "½ KG";

export const generateWhatsAppMessage = (
  items: CartItem[],
  name: string,
  phone: string,
  address: string
) => {
  let message = `🛒 *New Order - Chandaluru Ruchulu*\n\n`;

  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phone}\n`;
  message += `📍 Address: ${address}\n\n`;

  message += `📦 *Order Details*\n`;

  let total = 0;

  items.forEach((item, index) => {
    const price = getItemPrice(item.product, item.quantityOption);
    const itemTotal = price * item.quantity;
    total += itemTotal;

    message += `${index + 1}. ${item.product.name}\n`;
    message += `   ${getQtyLabel(item.quantityOption)} × ${item.quantity}\n`;
    message += `   ₹${itemTotal}\n\n`;
  });

  message += `💰 *Total: ₹${total}*\n\n`;
  message += `Thank you 🙏`;

  return encodeURIComponent(message);
};
