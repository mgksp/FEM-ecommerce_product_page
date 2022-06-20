import React, { useState } from "react";
import { Products } from "../data/products";
import useClickOutsideToClose from "../hooks/useClickOutsideToClose";
import { directions } from "../utilities/enums";

export default function DesktopImgGallery() {
  const [showImg, setShowImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState<number>(0);

  return (
    <div className="hidden md:block">
      <div
        className="mb-7 rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setShowImg(true)}
      >
        <img src={Products[0].images[selectedImg]} alt="" />
      </div>
      <div className="grid grid-cols-4 gap-7">
        {Products[0].thumbnails.map((img, idx) => (
          <div
            key={idx}
            className={
              selectedImg === idx
                ? "rounded-xl overflow-hidden border-2 border-orange cursor-pointer"
                : "rounded-xl overflow-hidden cursor-pointer"
            }
            onClick={() => setSelectedImg(idx)}
          >
            <img
              className={
                selectedImg === idx ? "opacity-40" : "hover:opacity-60"
              }
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>

      {showImg && (
        <EnlargedImg
          showImg={showImg}
          setShowImg={setShowImg}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </div>
  );
}

interface EnlargedImgProps {
  showImg: boolean;
  setShowImg: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImg: number;
  setSelectedImg: React.Dispatch<React.SetStateAction<number>>;
}
const EnlargedImg = ({
  showImg,
  setShowImg,
  selectedImg,
  setSelectedImg,
}: EnlargedImgProps) => {
  const node = useClickOutsideToClose(showImg, setShowImg);

  const handleImgs = (direction: directions) => {
    if (direction === directions.right) {
      if (selectedImg >= Products[0].thumbnails.length - 1) {
        setSelectedImg(0);
      } else {
        setSelectedImg((prev) => prev + 1);
      }
    }
    if (direction === directions.left) {
      if (selectedImg <= 0) {
        setSelectedImg(3);
      } else {
        setSelectedImg((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="absolute z-50 inset-0 w-full h-full bg-blackOp75 grid place-content-center">
      <div ref={node} className="relative">
        <button
          className="absolute right-0 -top-6"
          aria-label="close button"
          onClick={() => setShowImg(false)}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-white hover:fill-orange"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className="max-w-[34.375rem] relative">
          <button
            className="absolute top-1/2 -translate-y-1/2 -left-7 bg-white w-14 h-14 rounded-full grid place-content-center stroke-black hover:stroke-orange"
            onClick={() => handleImgs(directions.left)}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-7 bg-white w-14 h-14 rounded-full grid place-content-center stroke-black hover:stroke-orange"
            onClick={() => handleImgs(directions.right)}
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <img
            className="rounded-xl"
            src={Products[0].images[selectedImg]}
            alt=""
          />
        </div>

        <div className="flex justify-center items-center gap-7 mt-10">
          {Products[0].thumbnails.map((img, idx) => (
            <div
              key={idx}
              className={
                selectedImg === idx
                  ? "w-[5.5rem] rounded-lg overflow-hidden border-2 border-orange bg-paleOrange cursor-pointer"
                  : "w-[5.5rem] rounded-lg overflow-hidden bg-paleOrange cursor-pointer"
              }
              onClick={() => setSelectedImg(idx)}
            >
              <img
                className={
                  selectedImg === idx ? "opacity-40" : "hover:opacity-60"
                }
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
