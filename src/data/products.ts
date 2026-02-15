// ===== SWEETS =====
import nethiAriseluImg from "@/assets/products/nethi ariselu.jpg";
import nooneAriseluImg from "@/assets/products/nune ariselu.jpg";
import kobbariBooreluImg from "@/assets/products/kobbari burelu.jpg";
import sajjaBooreluImg from "@/assets/products/sajja boorelu.webp";
import boondiLadduImg from "@/assets/products/boondi laddu.jpg";
import poosaMithaiImg from "@/assets/products/poosa mithai.png";
import bellamGavvaluImg from "@/assets/products/bellam gavvalu.webp";
import aratiKayaluImg from "@/assets/products/arati kayalu.png";
import sunnundaluImg from "@/assets/products/sunnundalu.jpg";
import ragiLadduImg from "@/assets/products/raghi laddu.webp";
import ravvaLadduImg from "@/assets/products/ravva laddu.webp";
import kobbariLadduImg from "@/assets/products/kobbari laddu.webp";
import jeediPappuMithaiImg from "@/assets/products/zeedi pappu mithai.png";
import kajjikayaluImg from "@/assets/products/kajji kayalu.jpg";
import maramaraluImg from "@/assets/products/marmarlu laddu.png";
import verusenagaChekkaImg from "@/assets/products/veru shanaga chekki.jpg";
import gulabiPuvvuluImg from "@/assets/products/gulabi puvulu.jpg";

// ===== SNACKS =====
import chekkaluImg from "@/assets/products/chekkalu.webp";
import karapusaImg from "@/assets/products/karapusa.png";
import chekkaPakodiImg from "@/assets/products/chekka pakodi.jpg";
import boondiImg from "@/assets/products/boondi.jpg";
import karamGavvaluImg from "@/assets/products/karam gavvalu.jpg";
import pesarapindiKarapusaImg from "@/assets/products/pesarapindi karapusa.jpg";
import senagapindiKarapusaImg from "@/assets/products/chenage pindi karapusa.jpg";
import vadiyaluImg from "@/assets/products/vadiyalu.jpg";
import sagguBiyyamVadiyaluImg from "@/assets/products/saggu biyam vadiyalu.jpg";

// ===== PICKLES =====
import mangoPickleImg from "@/assets/products/mango pickle.jpg";
import amlaPickleImg from "@/assets/products/amla pickle.jpg";
import tomatoPickleImg from "@/assets/products/tomato pickle.jpg";
import gingerPickleImg from "@/assets/products/ginger pickle.jpg";
import gonguraPickleImg from "@/assets/products/gongura pickle.jpg";
import pandumirchiPickleImg from "@/assets/products/pandumirchi pachadi.jpg";
import dabbakayaPickleImg from "@/assets/products/dabbkaya pachadi.jpg";
import chintakayaPickleImg from "@/assets/products/chintakaya pachadi.jpg";
import nimakayaPickleImg from "@/assets/products/nimakaaya pickle.jpg";
import chickenPickleImg from "@/assets/products/chiken pachadi.jpg";
import prawnsPickleImg from "@/assets/products/prawns pickle.jpg";

// ===== SPICE POWDERS =====
import masalaKaramImg from "@/assets/products/masala karam.jpg";
import kobbariKaramImg from "@/assets/products/kobbari karam.jpg";
import nallaKaramImg from "@/assets/products/nallakaram.jpg";
import verusenagaKaramImg from "@/assets/products/vershanaga karam.jpg";
import senagapappuKaramImg from "@/assets/products/Shenagapapu karam.jpg";
import karivepakuKaramImg from "@/assets/products/karivepaku karam.jpg";
import munagakuKaramImg from "@/assets/products/munagaku karam.jpg";
import kandiKaramImg from "@/assets/products/kandi karam.jpg";
import plainKaramImg from "@/assets/products/plain karam.jpg";

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
  { id: 1, name:"నేతి అరిసెలు", nameEn:"Nethi Ariselu", category:"sweets", pricePerKg:500, image:nethiAriseluImg },
{ id: 2, name:"నూనె అరిసెలు", nameEn:"Noone Ariselu", category:"sweets", pricePerKg:350, image:nooneAriseluImg },
{ id: 3, name:"కొబ్బరి బూరెలు", nameEn:"Kobbari Boorelu", category:"sweets", pricePerKg:300, image:kobbariBooreluImg },
{ id: 4, name:"సజ్జ బూరెలు", nameEn:"Sajja Boorelu", category:"sweets", pricePerKg:300, image:sajjaBooreluImg },
{ id: 5, name:"బూంది లడ్డు", nameEn:"Boondi Laddu", category:"sweets", pricePerKg:300, image:boondiLadduImg },
{ id: 6, name:"పూస మిఠాయి", nameEn:"Poosa Mithai", category:"sweets", pricePerKg:300, image:poosaMithaiImg },
{ id: 7, name:"బెల్లం గవ్వలు", nameEn:"Bellam Gavvalu", category:"sweets", pricePerKg:300, image:bellamGavvaluImg },
{ id: 8, name:"అరటి కాయలు", nameEn:"Arati Kayalu", category:"sweets", pricePerKg:500, image:aratiKayaluImg },
{ id:10, name:"సున్నుండలు", nameEn:"Sunnundalu", category:"sweets", pricePerKg:500, image:sunnundaluImg },
{ id:11, name:"రాగి లడ్డు", nameEn:"Ragi Laddu", category:"sweets", pricePerKg:500, image:ragiLadduImg },
{ id:12, name:"రవ్వ లడ్డు", nameEn:"Ravva Laddu", category:"sweets", pricePerKg:300, image:ravvaLadduImg },
{ id:13, name:"కొబ్బరి లడ్డు", nameEn:"Kobbari Laddu", category:"sweets", pricePerKg:500, image:kobbariLadduImg },
{ id:14, name:"జీడి పప్పు మిఠాయి", nameEn:"Jeedi Pappu Mithai", category:"sweets", pricePerKg:800, image:jeediPappuMithaiImg },
{ id:15, name:"కజ్జికాయలు", nameEn:"Kajjikayalu", category:"sweets", pricePerKg:300, image:kajjikayaluImg },
{ id:16, name:"మరమరాల ముద్దలు", nameEn:"Maramarala Muddalu", category:"sweets", pricePerKg:250, image:maramaraluImg },
{ id:17, name:"వేరుశెనగ పప్పు చెక్క", nameEn:"Verusenaga Pappu Chekka", category:"sweets", pricePerKg:300, image:verusenagaChekkaImg },
{ id:18, name:"గులాబీ పువ్వులు", nameEn:"Gulabi Puvvulu", category:"sweets", pricePerKg:400, image:gulabiPuvvuluImg },

  // === స్నాక్స్ (Snacks) ===
  { id:19, name:"చెక్కలు", nameEn:"Chekkalu", category:"snacks", pricePerKg:250, image:chekkaluImg },
{ id:20, name:"కారప్పూస", nameEn:"Karapusa", category:"snacks", pricePerKg:250, image:karapusaImg },
{ id:21, name:"చెక్క పకోడీ", nameEn:"Chekka Pakodi", category:"snacks", pricePerKg:250, image:chekkaPakodiImg },
{ id:22, name:"బూంది", nameEn:"Boondi", category:"snacks", pricePerKg:250, image:boondiImg },
{ id:23, name:"కారం గవ్వలు", nameEn:"Karam Gavvalu", category:"snacks", pricePerKg:250, image:karamGavvaluImg },
{ id:24, name:"పెసర పిండి కారప్పూస", nameEn:"Pesara Pindi Karapusa", category:"snacks", pricePerKg:250, image:pesarapindiKarapusaImg },
{ id:25, name:"శెనగ పిండి కారప్పూస", nameEn:"Senaga Pindi Karapusa", category:"snacks", pricePerKg:250, image:senagapindiKarapusaImg },
{ id:26, name:"వడియాలు", nameEn:"Vadiyalu", category:"snacks", pricePerKg:250, image:vadiyaluImg },
{ id:27, name:"సగ్గుబియ్యం వడియాలు", nameEn:"Saggubiyyam Vadiyalu", category:"snacks", pricePerKg:250, image:sagguBiyyamVadiyaluImg },

  // === పచ్చళ్ళు (Pickles) ===
  { id:28, name:"మామిడికాయ పచ్చడి", nameEn:"Mamidikaya Pachadi", category:"pickles", pricePerKg:500, image:mangoPickleImg },
{ id:29, name:"ఉసిరికాయ పచ్చడి", nameEn:"Usirikaya Pachadi", category:"pickles", pricePerKg:500, image:amlaPickleImg },
{ id:30, name:"టమాటా పచ్చడి", nameEn:"Tomato Pachadi", category:"pickles", pricePerKg:500, image:tomatoPickleImg },
{ id:31, name:"అల్లం పచ్చడి", nameEn:"Allam Pachadi", category:"pickles", pricePerKg:500, image:gingerPickleImg },
{ id:32, name:"గోంగూర పచ్చడి", nameEn:"Gongura Pachadi", category:"pickles", pricePerKg:500, image:gonguraPickleImg },
{ id:33, name:"పండుమిరపకాయ పచ్చడి", nameEn:"Pandumirapakaya Pachadi", category:"pickles", pricePerKg:500, image:pandumirchiPickleImg },
{ id:34, name:"దబ్బకాయ పచ్చడి", nameEn:"Dabbakaya Pachadi", category:"pickles", pricePerKg:400, image:dabbakayaPickleImg },
{ id:35, name:"చింతకాయ పచ్చడి", nameEn:"Chintakaya Pachadi", category:"pickles", pricePerKg:300, image:chintakayaPickleImg },
{ id:36, name:"నిమ్మకాయ పచ్చడి", nameEn:"Nimmakaya Pachadi", category:"pickles", pricePerKg:400, image:nimakayaPickleImg },
{ id:37, name:"చికెన్ బోన్ లెస్ పచ్చడి", nameEn:"Chicken Boneless Pachadi", category:"pickles", pricePerKg:1200, image:chickenPickleImg },
{ id:38, name:"రొయ్యల పచ్చడి", nameEn:"Royyala Pachadi", category:"pickles", pricePerKg:1400, image:prawnsPickleImg },

  { id:39, name:"మసాలా కారం", image:masalaKaramImg, category:"spices", pricePerKg:600, nameEn:"Masala Karam" },
{ id:40, name:"కొబ్బరి కారం", image:kobbariKaramImg, category:"spices", pricePerKg:500, nameEn:"Kobbari Karam" },
{ 
  id:41,
  name:"ప్లైన్ కారం",
  nameEn:"Plain Karam",
  category:"spices",
  pricePerKg:500,
  image:plainKaramImg
},
{ id:42, name:"నల్ల కారం", image:nallaKaramImg, category:"spices", pricePerKg:500, nameEn:"Nalla Karam" },
{ id:43, name:"వేరుశెనగ పప్పు కారం", image:verusenagaKaramImg, category:"spices", pricePerKg:500, nameEn:"Verusenaga Pappu Karam" },
{ id:44, name:"శెనగ పప్పు కారం", image:senagapappuKaramImg, category:"spices", pricePerKg:500, nameEn:"Senaga Pappu Karam" },
{ id:45, name:"కరివేపాకు కారం", image:karivepakuKaramImg, category:"spices", pricePerKg:500, nameEn:"Karivepaku Karam" },
{ id:46, name:"మునగ ఆకు కారం", image:munagakuKaramImg, category:"spices", pricePerKg:500, nameEn:"Munaga Aku Karam" },
{ id:47, name:"కంది కారం", image:kandiKaramImg, category:"spices", pricePerKg:500, nameEn:"Kandi Karam" },
];
