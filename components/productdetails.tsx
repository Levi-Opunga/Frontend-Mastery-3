import { Details } from "@/app/page";
import { useContext } from "react";
import { AddToCart } from "./addtocart";

export function ProductDetails(props:{details:Details}) {
  
 const details = props.details
    return (
      <div className="flext justify-center items-center  mx-2 md:mx-0 md:py-16 md:w-[72%] mt-4 md:mt-20 ">
        <p className="font-bold text-base uppercase text-orange-500">
          {details.company}
        </p>
        <p className="font-bold text-5xl mt-2 mb-6">{details.title}</p>
        <p className="text-slate-500/70 mb-10">{details.description}</p>
        <div className="flex justify-start mb-4 md:mb-0 md:items-start items-center">
          <span className="font-extrabold mr-4 text-2xl basis-2/6 text-center md:text-left">
            ${details.discountPrice.toFixed(2)}
          </span>
          <span className="bg-orange-300/60 text-orange-600 basis-1/6 text-base font-bold text-center py-[1px] px-2 rounded-md ">
            {details.discount}%
          </span>

          <p className="line-through font-bold basis-3/6 justify-items-end md:hidden  text-gray-400/70 text-center">
            ${details.unitPrice.toFixed(2)}
          </p>
        </div>
        <p className="line-through font-bold hidden md:block text-gray-400/70 mb-6">
          ${details.unitPrice.toFixed(2)}
        </p>

        <AddToCart data={details} />
      </div>
    );
}