import sweetsImg from "@/assets/products/sweets.jpg";
import snacksImg from "@/assets/products/snacks.jpg";
import picklesImg from "@/assets/products/pickles.jpg";
import spicesImg from "@/assets/products/spices.jpg";

export interface Product {
  id: number;
  name: string;
  nameEn: string;
  category: "sweets" | "snacks" | "pickles" | "spices";
  pricePerKg: number;
  image: string;
}

export const categories = [
  { id: "sweets", label: "స్వీట్స్", labelEn: "Sweets" },
  { id: "snacks", label: "స్నాక్స్", labelEn: "Snacks" },
  { id: "pickles", label: "పచ్చళ్ళు", labelEn: "Pickles" },
  { id: "spices", label: "కారాలు", labelEn: "Spice Powders" },
];

export const products: Product[] = [
  // === స్వీట్స్ (Sweets) ===
  { id: 1, name: "నేతి అరిసెలు", nameEn: "Nethi Ariselu", category: "sweets", pricePerKg: 500, image: sweetsImg },
  { id: 2, name: "నూనె అరిసెలు", nameEn: "Noone Ariselu", category: "sweets", pricePerKg: 350, image: sweetsImg },
  { id: 3, name: "కొబ్బరి బూరెలు", nameEn: "Kobbari Boorelu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 4, name: "సజ్జ బూరెలు", nameEn: "Sajja Boorelu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 5, name: "బూంది లడ్డు", nameEn: "Boondi Laddu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 6, name: "పూస మిఠాయి", nameEn: "Poosa Mithai", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 7, name: "బెల్లం గవ్వలు", nameEn: "Bellam Gavvalu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 8, name: "అరటి కాయలు", nameEn: "Arati Kayalu", category: "sweets", pricePerKg: 500, image: sweetsImg },
  { id: 9, name: "అరిసెలు పాకం", nameEn: "Ariselu Pakam", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 10, name: "సున్నుండలు", nameEn: "Sunnundalu", category: "sweets", pricePerKg: 500, image: sweetsImg },
  { id: 11, name: "రాగి లడ్డు", nameEn: "Ragi Laddu", category: "sweets", pricePerKg: 500, image: sweetsImg },
  { id: 12, name: "రవ్వ లడ్డు", nameEn: "Ravva Laddu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 13, name: "కొబ్బరి లడ్డు", nameEn: "Kobbari Laddu", category: "sweets", pricePerKg: 500, image: sweetsImg },
  { id: 14, name: "జీడి పప్పు మిఠాయి", nameEn: "Jeedi Pappu Mithai", category: "sweets", pricePerKg: 800, image: sweetsImg },
  { id: 15, name: "కజ్జికాయలు", nameEn: "Kajjikayalu", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 16, name: "మరమరాల ముద్దలు", nameEn: "Maramarala Muddalu", category: "sweets", pricePerKg: 250, image: sweetsImg },
  { id: 17, name: "వేరుశెనగ పప్పు చెక్క", nameEn: "Verusenaga Pappu Chekka", category: "sweets", pricePerKg: 300, image: sweetsImg },
  { id: 18, name: "గులాబీ పువ్వులు", nameEn: "Gulabi Puvvulu", category: "sweets", pricePerKg: 400, image: sweetsImg },

  // === స్నాక్స్ (Snacks) ===
  { id: 19, name: "చెక్కలు", nameEn: "Chekkalu", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 20, name: "కారప్పూస", nameEn: "Karapusa", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 21, name: "చెక్క పకోడీ", nameEn: "Chekka Pakodi", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 22, name: "బూంది", nameEn: "Boondi", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 23, name: "కారం గవ్వలు", nameEn: "Karam Gavvalu", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 24, name: "పెసర పిండి కారప్పూస", nameEn: "Pesara Pindi Karapusa", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 25, name: "శెనగ పిండి కారప్పూస", nameEn: "Senaga Pindi Karapusa", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 26, name: "వడియాలు", nameEn: "Vadiyalu", category: "snacks", pricePerKg: 250, image: snacksImg },
  { id: 27, name: "సగ్గుబియ్యం వడియాలు", nameEn: "Saggubiyyam Vadiyalu", category: "snacks", pricePerKg: 250, image: snacksImg },

  // === పచ్చళ్ళు (Pickles) ===
  { id: 28, name: "మామిడికాయ పచ్చడి", nameEn: "Mamidikaya Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 29, name: "ఉసిరికాయ పచ్చడి", nameEn: "Usirikaya Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 30, name: "టమాటా పచ్చడి", nameEn: "Tomato Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 31, name: "అల్లం పచ్చడి", nameEn: "Allam Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 32, name: "గోంగూర పచ్చడి", nameEn: "Gongura Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 33, name: "పండుమిరపకాయ పచ్చడి", nameEn: "Pandumirapakaya Pachadi", category: "pickles", pricePerKg: 500, image: picklesImg },
  { id: 34, name: "దబ్బకాయ పచ్చడి", nameEn: "Dabbakaya Pachadi", category: "pickles", pricePerKg: 400, image: picklesImg },
  { id: 35, name: "చింతకాయ పచ్చడి", nameEn: "Chintakaya Pachadi", category: "pickles", pricePerKg: 300, image: picklesImg },
  { id: 36, name: "నిమ్మకాయ పచ్చడి", nameEn: "Nimmakaya Pachadi", category: "pickles", pricePerKg: 400, image: picklesImg },
  { id: 37, name: "చికెన్ బోన్ లెస్ పచ్చడి", nameEn: "Chicken Boneless Pachadi", category: "pickles", pricePerKg: 1200, image: picklesImg },
  { id: 38, name: "రొయ్యల పచ్చడి", nameEn: "Royyala Pachadi", category: "pickles", pricePerKg: 1400, image: picklesImg },

  // === కారాలు (Spice Powders) ===
  { id: 39, name: "మసాలా కారం", nameEn: "Masala Karam", category: "spices", pricePerKg: 600, image: spicesImg },
  { id: 40, name: "కొబ్బరి కారం", nameEn: "Kobbari Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 41, name: "ప్లైన్ కారం", nameEn: "Plain Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 42, name: "నల్ల కారం", nameEn: "Nalla Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 43, name: "వేరుశెనగ పప్పు కారం", nameEn: "Verusenaga Pappu Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 44, name: "శెనగ పప్పు కారం", nameEn: "Senaga Pappu Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 45, name: "కరివేపాకు కారం", nameEn: "Karivepaku Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 46, name: "మునగ ఆకు కారం", nameEn: "Munaga Aku Karam", category: "spices", pricePerKg: 500, image: spicesImg },
  { id: 47, name: "కంది కారం", nameEn: "Kandi Karam", category: "spices", pricePerKg: 500, image: spicesImg },
];
