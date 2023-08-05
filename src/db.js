import productImage0 from "./assets/images/productImage0.png";
import productImage1 from "./assets/images/productImage1.png";
import productImage2 from "./assets/images/productImage2.png";
import productImage3 from "./assets/images/productImage3.png";
import productImage4 from "./assets/images/productImage4.png";
const productsList = [
  {
    id: 0,
    category_id: 0,
    product_image: productImage0,
    name: "Коляска 2в1 Anex M/Type Dune mt-01Q",
    is_avaliable: true,
    price: 6000,
    discount: 15,
    brand_id: 0,
    country: "Польща",
    color: "Сірий",
    gender: "Хлопчик/дівчинка",
    weight: 14,
    dimensions: "108.5х60х124.5",
  },
  {
    id: 1,
    category_id: 7,
    product_image: productImage1,
    name: "Іграшка-головоломка Same Toy IQ Ball Cube",
    is_avaliable: true,
    price: 300,
    discount: 30,
    brand_id: 9,
    country: "Польща",
    color: "Сірий",
    gender: "Хлопчик/дівчинка",
    weight: 14,
    dimensions: "108.5х60х124.5",
  },
  {
    id: 2,
    category_id: 3,
    product_image: productImage2,
    name: "Пляшечка 130 мл",
    is_avaliable: true,
    price: 100,
    discount: 0,
    brand_id: 1,
    country: "Польща",
    color: "Сірий",
    gender: "Хлопчик/дівчинка",
    weight: 14,
    dimensions: "108.5х60х124.5",
  },
  {
    id: 3,
    category_id: 5,
    product_image: productImage3,
    name: "Автокрісло Maxi-Cosi Citi Concrete grey",
    is_avaliable: true,
    price: 4300,
    discount: 0,
    brand_id: 10,
    country: "Польща",
    color: "Сірий",
    gender: "Хлопчик/дівчинка",
    weight: 14,
    dimensions: "108.5х60х124.5",
  },
  {
    id: 4,
    category_id: 3,
    product_image: productImage4,
    name: "Суміш молочна суха Nutrilon для чутливих малюків 6-12 місяців",
    is_avaliable: true,
    price: 350,
    discount: 15,
    brand_id: 11,
    country: "Польща",
    color: "Сірий",
    gender: "Хлопчик/дівчинка",
    weight: 14,
    dimensions: "108.5х60х124.5",
  },
];
const brandsList = [
  {
    id: 0,
    name: "Anex",
  },
  {
    id: 1,
    name: "Bair",
  },
  {
    id: 2,
    name: "BabyOno",
  },
  {
    id: 3,
    name: "Carrello",
  },
  {
    id: 4,
    name: "OK Baby",
  },
  {
    id: 5,
    name: "Babyroom",
  },
  {
    id: 6,
    name: "ZD",
  },
  {
    id: 7,
    name: "Маленька Соня",
  },
  {
    id: 8,
    name: "Espiro",
  },
  {
    id: 9,
    name: "Same Toy",
  },
  {
    id: 10,
    name: "Maxi-Cosi",
  },
  {
    id: 9,
    name: "Nutrilon",
  },
];

export { productsList, brandsList };
