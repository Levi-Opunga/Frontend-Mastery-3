import { useGlobalContext } from "@/app/CountContext";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function Cart(props: { close: Dispatch<SetStateAction<boolean>> }) {
  const close = props.close;
  const context = useGlobalContext();
  const [rerender, setRerender] = useState(false);

  function deleteItem(posistion: number) {
    context.cart.splice(posistion, 1);
    setRerender(!rerender);
  }

  return (
    <>
      <div className=" fixed md:absolute w-[80%] rounded-xl top-28 left-[10%] right-[10%] z-40 md:top-10 md:-left-48 bg-white shadow-2xl shadow-black/40 md:w-96 md:rounded-lg">
        <div className="grid grid-cols-12">
          <h3 className="font-bold m-2 col-span-10">Cart</h3>
          <Image
            className="col-span-2 justify-self-center pt-3"
            src="/images/icon-closeb.svg"
            width="14"
            height="10"
            alt=""
            onClick={() => close(false)}
          />
        </div>
        <hr className="border-y-[1px] border-gray-200"></hr>
        {context.cart.length > 0 ? (
          <div>
            {context.cart.map((value, index) => (
              <div key={index} className="flex  flex-row p-2">
                <Image
                  className="basis-1/5 m-2 rounded-md h-14"
                  src="/images/image-product-1.jpg"
                  width="90"
                  height="100"
                  alt=""
                />
                <span className="w-full grid grid-cols-12 in">
                  <span className="col-span-10  text-gray-600 grid grid-rows-2">
                    <p className="mt-2">{value.product.title}</p>
                    <span>
                      ${value.product.discountPrice.toFixed(2)} x {value.number}
                      <span className="font-bold ml-1">
                        $
                        {(value.number * value.product.discountPrice).toFixed(
                          2
                        )}
                      </span>{" "}
                    </span>
                  </span>
                  <span className="col-span-2 flex justify-center items-center ">
                    <Image
                      className="basis-1/5"
                      src="/images/icon-delete.svg"
                      width="20"
                      height="10"
                      alt=""
                      onClick={() => deleteItem(index)}
                    />
                  </span>
                </span>
              </div>
            ))}
            <div className="">
              <button className="bg-orange-500 w-[94%]  m-2 outline-none text-white flex flex-row rounded-md py-2 md:py-2 font-extrabold m justify-center items-center">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="md:py-16 py-[30%] text-center text-gray-400 font-bold">
            Your cart is empty
          </p>
        )}
      </div>
    </>
  );
}
