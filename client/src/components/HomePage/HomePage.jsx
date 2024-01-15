import DragDrop from "../DragDrop/DragDrop";
import Uploading from "../Uploading/Uploading";
import LinkPage from "../LinkPage/LinkPage";
import { IoMdHome } from "react-icons/io";
import { useContext } from "react";
import { ImageContext } from "../../context/Context";

function App() {
  const { page, setPage } = useContext(ImageContext);
  return (
    <div className="flex h-screen flex-col items-center  justify-center overflow-hidden bg-stone-100 font-['Poppins'] ">
      <div className=" m-3 w-full rounded-md bg-white p-4 py-6 md:grid md:h-auto md:w-auto md:place-content-center md:p-8">
        {/* this is the card */}
        <div className="flex h-full flex-col items-center gap-4">
          {page === "home" && <DragDrop />}
          {page === "upload" && <Uploading />}
          {page === "link" && <LinkPage />}
        </div>
      </div>
      {page === "link" && (
        <button
          className="font-Noto_Sans flex w-auto flex-shrink-0 gap-x-1 rounded-lg bg-[#2F80ED] p-2 text-xs text-white"
          onClick={() => setPage("home")}
        >
          <IoMdHome className="relative bottom-[1px] self-center" />{" "}
          <div>Home</div>
        </button>
      )}
    </div>
  );
}

export default App;
