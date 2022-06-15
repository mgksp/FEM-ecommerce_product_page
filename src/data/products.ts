import { Product } from "../models/product";

import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct2 from "../images/image-product-2.jpg";
import imageProduct3 from "../images/image-product-3.jpg";
import imageProduct4 from "../images/image-product-4.jpg";

import imageProductThumb1 from "../images/image-product-1-thumbnail.jpg";
import imageProductThumb2 from "../images/image-product-2-thumbnail.jpg";
import imageProductThumb3 from "../images/image-product-3-thumbnail.jpg";
import imageProductThumb4 from "../images/image-product-4-thumbnail.jpg";

export const Products: Product[] = [
  {
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    desc: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything
    the weather can offer.`,
    price: 250,
    discount: 50,
    images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
    thumbnails: [
      imageProductThumb1,
      imageProductThumb2,
      imageProductThumb3,
      imageProductThumb4,
    ],
  },
];
