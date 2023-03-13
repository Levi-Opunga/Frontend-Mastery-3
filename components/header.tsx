"use client";
import { useGlobalContext } from "@/app/CountContext";
import Image from "next/image";
import { useState } from "react";
import { Cart } from "./Cart";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const context = useGlobalContext();

  function showCart() {
    setCart(!cart);
  }

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      {cart && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-screen z-20 bg-black/70">
          <span >
            <Cart close={setCart} />
          </span>
        </div>
      )}

      {menu && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-screen z-20 bg-black/50">
          <div className="bg-white h-screen w-3/5 font-semibold ">
            <div className="">
              <span className=" h-5 w-5 flex justify-center pt-7 ml-3 pb-10 items-center rounded-full">
                <Image
                  className=""
                  src="/images/icon-closed.svg"
                  width="13"
                  height="13"
                  alt=""
                  onClick={toggleMenu}
                  onKeyUp={(e) => console.log(e)}
                />
              </span>
              <span className="grid grid-rows-5 gap-4 pl-4">
                <p>Collections</p>
                <p>Men</p>
                <p>Women</p>
                <p>About</p>
                <p>Contact</p>
              </span>
            </div>
          </div>
        </div>
      )}
      <header className="fixed w-full  z-10  md:z-0 md:absolute bg-white md:left-[10%] md:right-[10%] md:w-[80%]">
        <div className="flex  flex-row py-5">
          <div
            className="basis-1/6 md:hidden flex justify-center items-center"
            onClick={toggleMenu}
          >
            <Image
              className=""
              src="/images/icon-menu.svg"
              width="16"
              height="16"
              alt=""
            />
          </div>
          <h3 className="font-extrabold basis-2/6  md:basis-1/6 text-xl">
            sneakers
          </h3>

          <div className="md:flex hidden md:flex-row gap-5 basis-2/6 text-[10px] font-semibold text-slate-500/50 justify-center items-center">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="basis-3/6 gap-6 items-center  inline-flex justify-end">
            <span className="relative">
              <Image
                src="/images/icon-cart.svg"
                width="18"
                height="9"
                alt="shopping cart"
                className="h-5 w-5"
                onClick={showCart}
              />
              <span className="rounded-xl absolute -top-3 left-2 text-gray-50 text-sm font-bold px-2 bg-orange-500">
                {context.cart.length}
              </span>
              {cart && (
                <div className="hidden md:block">
                  <Cart close={setCart} />
                </div>
              )}
            </span>
            <span className="hover:ring-2 relative hover:ring-orange-500 rounded-full mr-2">
              <Image
                src="/images/image-avatar.png"
                width="30"
                height="30"
                alt="shopping cart"
                className="rounded-full"
              />
            </span>
          </div>
        </div>
        <hr className="border-y-[1px] hidden md:block" />
      </header>
    </>
  );
}
