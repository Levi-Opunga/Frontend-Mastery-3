// "use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Header } from "../../components/header";
import ImagePannel from "../../components/image-pannel";
import { type } from "os";
import { ProductDetails } from "../../components/productdetails";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export type ImgAndThumbnail ={
  image : string;
  thumbnail : string;
}

export type Details= {
  company: string;
  title: string;
  description: string;
  unitPrice: number;
  discount: number;
  discountPrice:number;
}

const details: Details = {
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  unitPrice: 250,
  discount: 50,
  discountPrice: 125,
};

const links: ImgAndThumbnail[] = [
  {
    image: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    image: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    image: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    image: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

export default function Home() {

  return (
    <main className="font-kumb ">
      <div className="md:grid md:grid-cols-2 ">
        <Header />

        <ImagePannel links={links} />
        <ProductDetails details={details} />
      </div>
    </main>
  );
}

