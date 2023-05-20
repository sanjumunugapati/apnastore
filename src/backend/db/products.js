import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Men Printed Round T-Shirt",
    descriptions: "Men Printed Round Neck Black T-Shirt",
    originalPrice: 789,
    price: 500,
    categoryName: "men",
    rating: 5,
    reviews: "4.3k",
    inStock: true,
    trending: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Women Typography T-Shirt",
    descriptions: "Women Typography Round Neck Black T-Shirt",
    originalPrice: 799,
    price: 540,
    categoryName: "women",
    rating: 4.5,
    reviews: "2.5k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/w/7/s-ww-smile-black-smartees-original-imagnxamfkh2jnrt.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Men Printed T-Shirt",
    descriptions: "Men Printed, Typography Round Neck Black T-Shirt",
    originalPrice: 889,
    price: 600,
    categoryName: "men",
    rating: 3.3,
    reviews: "6.3k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/m/o/0/xl-nevergiveup-black-halfsleeve-smartees-original-imaghqfap26k5xbu.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Women Anouk",
    descriptions: "Women Floral Printed Kurta",
    originalPrice: 1099,
    price: 329,
    categoryName: "women",
    rating: 4.3,
    reviews: "8.5k",
    inStock: true,
    trending: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19065282/2022/10/13/535e1c0c-11d0-47ae-a1c9-eaf8ed79a2951665653014797-Anouk-Women-Yellow--White-Floral-Printed-Pure-Cotton-A-Line--1.jpg",
  },
  {
    _id: uuid(),
    title: "Women Anarkali Kurta",
    descriptions:
      "Women Floral Print Viscose Rayon Anarkali Kurta  (Dark Blue)",
    originalPrice: 749,
    price: 570,
    categoryName: "women",
    rating: 4.5,
    reviews: "2.1k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kzk6bgw0/kurta/7/j/m/xxl-kurta-flared-u-neck-013-dhakre-fashion-original-imagbjgjxgb3pmbx.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Ausk Polo T-Shirt for Men",
    descriptions: "Polo T-shirt with Welt Pocket",
    originalPrice: 567,
    price: 380,
    categoryName: "men",
    rating: 4.2,
    reviews: "7.3k",
    inStock: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxwNlOTvz7QWULnCec2dVjTnndXya65oVcg&usqp=CAU",
  },
  {
    _id: uuid(),
    title: "Roadster T-Shirt for Men",
    descriptions: "Printed Cotton  Pure Cotton T-shirt",
    originalPrice: 269,
    price: 599,
    trending: true,
    categoryName: "men",
    rating: 4.1,
    reviews: "23k",
    inStock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2475811/2018/4/20/11524206887991-Roadster-Men-Tshirts-9291524206887825-1.jpg",
  },
  {
    _id: uuid(),
    title: "BLive T-Shirt for Kids",
    descriptions: "Boys Solid Cotton Blend T Shirt  (Dark Blue, Pack of 1)",
    originalPrice: 1999,
    price: 617,
    categoryName: "kids",
    rating: 4.3,
    reviews: "23k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-t-shirt/c/m/c/14-15-years-bnvpoloboy-plain-blive-original-imagmeyyeqpf2txh.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Fubar Shirt for Men",
    descriptions: "Men Slim Fit Solid Spread Collar Formal Shirt",
    originalPrice: 789,
    price: 419,
    categoryName: "men",
    rating: 4.8,
    reviews: "2k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/x/6/q/m-kcsh-fo-1647-ma-fubar-original-imaghg9qdht3ghgn.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Roadster Women Typography T-Shirt",
    descriptions: "Women Black Typography New Age Tshirt",
    originalPrice: 999,
    price: 249,
    categoryName: "women",
    rating: 4.3,
    reviews: "3k",
    inStock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13601582/2021/6/28/b3936098-a75b-4068-b4c1-24ae60b924031624874368878-Roadster-Women-Tshirts-2901624874368395-1.jpg",
  },
  {
    _id: uuid(),
    title: "Nike shoes for Men",
    descriptions: "Revolution 5 Running Shoes For Men  (Black)",
    originalPrice: 2999,
    price: 2014,
    categoryName: "men",
    rating: 1.3,
    reviews: "1k",
    inStock: false,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/a/b/t/-original-imagpgpekpzwjchk.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Alan Jones T-shirt for Kids",
    descriptions: "Boys Striped Cotton Blend T Shirt  (Dark Green, Pack of 1)",
    originalPrice: 999,
    price: 386,
    categoryName: "kids",
    rating: 2.3,
    reviews: "4.3k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l05lx8w0/kids-t-shirt/s/x/d/15-16-years-boy22-pt01-bgrn-alan-jones-original-imagcyfrjg2mhnyj.jpeg?q=70",
  },

  {
    _id: uuid(),
    title: "Print My Fashion",
    descriptions:
      "Boys Graphic Print Polyester T Shirt  (Dark Blue, Pack of 1)",
    originalPrice: 1200,
    price: 599,
    categoryName: "kids",
    rating: 4.3,
    reviews: "12k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kvzkosw0/kids-t-shirt/x/0/b/5-6-years-pmf-ts-b-p6-nb-5-6y-print-my-fashion-original-imag8rufzvjvhnzb.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "pspeaches",
    descriptions:
      "Girls Magenta & Yellow Embroidered Ready to Wear Lehenga & Blouse With Dupatta",
    originalPrice: 4854,
    price: 1698,
    trending: true,
    categoryName: "kids",
    rating: 3.4,
    reviews: "7.6k",
    inStock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19840384/2022/9/7/95605ac4-b15d-4e24-adcd-bdf926245fd11662555722165pspeachesGirlsMagentaYellowEmbroideredReadytoWearLehengaBlou1.jpg",
  },
  {
    _id: uuid(),
    title: "NIKE T-Shirt for Men",
    descriptions: "Men Solid Round Neck Blue T-Shirt",
    originalPrice: 1595,
    price: 1152,
    categoryName: "men",
    rating: 2.8,
    reviews: "23k",
    inStock: true,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/s/w/7/m-dv2322-469-nike-original-imaghhzzp9zdhgdx.jpeg?q=70",
  },

  {
    _id: uuid(),
    title: "Roadster T-Shirt for Men",
    descriptions: "Men Maroon Typography Printed Cotton T-shirt",
    originalPrice: 251,
    price: 599,
    trending: true,
    categoryName: "men",
    rating: 4,
    reviews: "29.6k",
    inStock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg",
  },
  {
    _id: uuid(),
    title: "FASHION DREAM",
    descriptions: "Girls Black & Brown Embroidered Ready to Wear Lehenga Choli",
    originalPrice: 3999,
    price: 999,
    trending: true,
    categoryName: "kids",
    rating: 4.3,
    reviews: "9.6k",
    inStock: true,
    image:
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/20376570/2022/10/12/e0fc17e4-b0da-4178-9dd4-921d41a165671665587269801FASHIONDREAMGirlsBlackYellowEmbroideredReadytoWearLehenga1.jpg",
  },
];
