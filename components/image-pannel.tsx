"use client";
import { ImgAndThumbnail } from "@/app/page";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImagePannel(props: { links: ImgAndThumbnail[] }) {
  const links = props.links;
  const [image, setImage] = useState(links[0].image);

  const [posistion, setPosition] = useState(0);

  const [biggerImage, setBiggerImage] = useState(false);
  function toggleImage() {
    setBiggerImage(!biggerImage);
  }

  function next() {
    posistion == links.length - 1 ? setPosition(0) : setPosition(posistion + 1);

  }
  function previous() {
    
    posistion == 0 ? setPosition(links.length-1) : setPosition(posistion - 1);

  }
  useEffect(()=> setImage(links[posistion].image),[posistion]
)


 

  return (
    <>
      {
        <div className="md:hidden ">
          <div className="">
            <div className="grid grid-rows-6 ">
              <div className="relative row-span-5">
            
                <span>
                  <Image
                    className="row-span-1 w-[100%] mt-[70px] mb-5"
                    src={image}
                    width="2000"
                    height="100"
                    alt=""
                  />
                </span>
                <span
                  className="bg-white absolute left-[80%] sm:left-[88%] md:left-[87.5%] top-[50%] h-10 w-10 flex justify-center items-center rounded-full"
                  onClick={next}
                >
                  <Image
                    className=""
                    src="/images/icon-next.svg"
                    width="10"
                    height="8"
                    alt=""
                  />
                </span>
                <span
                  className="bg-white absolute left-[5.5%] top-[50%] h-10 w-10 flex justify-center items-center rounded-full"
                  onClick={previous}
                >
                  <Image
                    className=""
                    src="/images/icon-previous.svg"
                    width="10"
                    height="8"
                    alt=""
                  />
                </span>
              </div>
              <div className=" row-span-1 ">
                <div className=" w-[80%] mx-auto justify-center items-center flex flex-row gap-7">
                  {links.map((link, index) => (
                    <span className="relative h-full w-full" key={index}>
                      <Image
                        className={
                          posistion == index
                            ? " rounded-full h-full w-full ring-2 ring-orange-500 backdrop-blur-sm bg-white/30"
                            : " rounded-full h-full w-full bg-blend-overlay "
                        }
                        src={link.thumbnail}
                        width="120"
                        height="80"
                        alt=""
                        key={index}
                      />

                      <span
                        onClick={(e) => {
                          setImage(link.image);
                          setPosition(index);
                        }}
                        className={
                          posistion == index
                            ? "absolute w-full h-full rounded-full top-0 left-0 ring-2 ring-orange-500 bg-white/60"
                            : "absolute w-full h-full top-0 left-0 hover:bg-white/50"
                        }
                      ></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="mt-20 hidden md:block">
        <Image
          className="rounded-lg row-span-1 mt-12 mx-auto w-[52%]  mb-5"
          src={image}
          width="2000"
          height="1000"
          alt=""
          onClick={toggleImage}
        />

        <div className=" pb-11 ">
          <div className=" w-[52%] mx-auto  mt-0 justify-center items-center flex flex-row gap-7">
            {links.map((link, index) => (
              <span className="relative h-full w-full" key={index}>
                <Image
                  className={
                    posistion == index
                      ? " rounded-md h-full w-full ring-2 ring-orange-500 backdrop-blur-sm bg-white/30"
                      : " rounded-md h-full w-full bg-blend-overlay "
                  }
                  src={link.thumbnail}
                  width="120"
                  height="80"
                  alt=""
                  key={index}
                />
                <span
                  onClick={(e) => {
                    setImage(link.image);
                    setPosition(index);
                  }}
                  className={
                    posistion == index
                      ? "absolute w-full h-full rounded-md top-0 left-0 ring-2 ring-orange-500 bg-white/60"
                      : "absolute w-full h-full top-0 left-0 hover:bg-white/50"
                  }
                ></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {biggerImage && (
        <div className="z-10 fixed h-screen w-screen   bg-[rgba(0,0,0,0.8)]">
          <div className="pt-[5%]">
            <div className="grid grid-rows-2 ">
              <div className="relative">
                <span
                  className=" absolute left-[64%] top-[4%] h-7 w-7 flex justify-center items-center rounded-full"
                >
                  <Image
                    className=""
                    src="/images/icon-close.svg"
                    width="16"
                    height="16"
                    alt=""
                    onClick={toggleImage}
                    onKeyUp={(e) => console.log(e)}
                  />
                </span>
                <span>
                  <Image
                    className="rounded-lg row-span-1  mt-12 mx-auto w-[32%]  mb-5"
                    src={image}
                    width="2000"
                    height="100"
                    alt=""
                  />
                </span>
                <span
                  className="bg-white absolute left-[65.0%] top-[50%] h-6 w-6 flex justify-center items-center rounded-full"
                  onClick={next}
                >
                  <Image
                    className=""
                    src="/images/icon-next.svg"
                    width="7"
                    height="4"
                    alt=""
                  />
                </span>
                <span
                  className="bg-white absolute left-[33%] top-[50%] h-6 w-6 flex justify-center items-center rounded-full"
                  onClick={previous}
                >
                  <Image
                    className=""
                    src="/images/icon-previous.svg"
                    width="7"
                    height="4"
                    alt=""
                  />
                </span>
              </div>
              <div className=" row-span-1 ">
                <div className=" w-[26%] mx-auto justify-center items-center flex flex-row gap-7">
                  {links.map((link, index) => (
                    <span className="relative h-full w-full" key={index}>
                      <Image
                        className={
                          posistion == index
                            ? " rounded-md h-full w-full ring-2 ring-orange-500 backdrop-blur-sm bg-white/30"
                            : " rounded-md h-full w-full bg-blend-overlay "
                        }
                        src={link.thumbnail}
                        width="120"
                        height="80"
                        alt=""
                        key={index}
                      />

                      <span
                        onClick={(e) => {
                          setImage(link.image);
                          setPosition(index);
                        }}
                        className={
                          posistion == index
                            ? "absolute w-full h-full rounded-md top-0 left-0 ring-2 ring-orange-500 bg-white/60"
                            : "absolute w-full h-full rounded-md top-0 left-0 hover:bg-white/50"
                        }
                      ></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
