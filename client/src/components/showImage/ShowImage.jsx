import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShowImage() {
  const { id } = useParams();
  const [img, setImg] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${id}`);
        if (response.status === 200) {
          console.log(response.data);
          setImg(response.data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);
  return (
    <div className="grid min-h-screen w-auto place-content-center bg-black">
      <div className="mx-[10%] my-[5%] h-auto w-auto">
        {img && <img src={img} alt="no-img" />}
      </div>
    </div>
  );
}

export default ShowImage;
