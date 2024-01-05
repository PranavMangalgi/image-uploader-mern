import { useContext, useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImageContext } from "../../context/Context";
function LinkPage() {
  const { image, url } = useContext(ImageContext);
  const [btn, setbtn] = useState("Copy Link");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setbtn("copied!");
  };

  useEffect(() => {
    if (btn === "copied!") {
      setTimeout(() => {
        setbtn("Copy Link");
      }, 2000);
    }
  }, [btn]);
  return (
    <>
      <div>
        <IoMdCheckmarkCircle size="3.75rem" className="text-[#219653]" />
      </div>
      <h1 className="text-xl font-light text-[#4F4F4F] md:text-xl">
        Uploaded Successfully!
      </h1>
      <div className="mt-4 flex h-44 flex-col items-center justify-center gap-4 bg-[#F6F8FB] md:h-60 md:w-96">
        {image && (
          <img
            src={image}
            alt="uploaded-img"
            className="h-full w-full rounded-xl object-cover"
          />
        )}
      </div>

      <div
        className="flex w-full items-center  rounded-xl border-2 border-stone-200 bg-stone-100 px-2 py-1 text-white"
        onClick={copyToClipboard}
      >
        <p className="max-w-[300px] flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-thin text-[#4F4F4F] ">
          {url}
        </p>
        <button
          className="font-Noto_Sans flex-shrink-0 rounded-lg bg-[#2F80ED] p-2 text-xs text-white"
          onClick={copyToClipboard}
        >
          {btn}
        </button>
      </div>
    </>
  );
}

export default LinkPage;
