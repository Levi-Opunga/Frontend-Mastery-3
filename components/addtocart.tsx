"use client";

import { useGlobalContext } from "@/app/CountContext";
import Image from "next/image";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Details } from "@/app/page";

export function AddToCart(props: { data: Details }) {
  const { data } = props;
  const [item, setItem] = useState(data);
  const [count, setCount] = useState(0);
  const context = useGlobalContext();

//   useEffect(() => {
//     console.log("Do something after counter has changed", count);

//     if (context.cart.length === 0) {
//       context.setCart([
//         {
//           product: data,
//           number: count,
//           setProduct: setItem,
//           setNumber: setCount,
//         },
//       ]);
//     }

//     if (context.cart.length > 1) {
//       console.log("Cart");

//       if (count > 7 && context.cart.filter((c) => c.product.title).length > 0) {
//         let index = context.cart.indexOf(
//           context.cart.filter((c) => c.product.title)[0]
//         );
//         context.cart[index] = {
//           product: data,
//           number: count,
//           setProduct: setItem,
//           setNumber: setCount,
//         };
//       }
//     }

//     if (
//       context.cart.length > 1 &&
//       context.cart.filter((c) => c.product.title).length > 0
//     ) {
//       context.setCart([
//         ...context.cart,
//         {
//           product: data,
//           number: count,
//           setProduct: setItem,
//           setNumber: setCount,
//         },
//       ]);
//     }
//   }, [count]);

  useEffect(() => console.log(context), [context]);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function addtocart() {
    context.setCart([
      ...context.cart,
      {
        product: data,
        number: count,
        setProduct: setItem,
        setNumber: setCount,
      },
    ]);
  }

  return (
    <div className="grid gap-2 md:flex md:flex-row pb-8">
      <span className="text-orange-600 bg-gray-300/50 md:mr-4 flex flex-row justify-between gap-4 px-4 py-2 rounded-lg font-bold pr-3">
        <span className="md:mx-2" onClick={(e) => setCount(count - 1)}>
          -
        </span>
        <span>{count}</span>
        <span
          className="md:mx-2 "
          onClick={(e) => {
            incrementCount();
          }}
        >
          +
        </span>
      </span>

      <button
        className="bg-orange-500  outline-none text-white flex flex-row rounded-md py-3 md:py-0 md:px-5 justify-center items-center"
        onClick={addtocart}
      >
        <Image
          width="10"
          height="10"
          alt=""
          className="mr-2"
          src="/images/icon-cart.svg"
        />
        Add to cart
      </button>
    </div>
  );
}
