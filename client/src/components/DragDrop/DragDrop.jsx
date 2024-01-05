import { useEffect, useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import img from "../../assets/image.svg";
import { ImageContext } from "../../context/Context";

function Previews() {
  const { setImage, setPage, setUrl } = useContext(ImageContext);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      setFiles(updatedFiles);
    },
  });

  const handleUpload = useCallback(
    async (files) => {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("img", file);
      });

      try {
        setPage("upload");
        console.log(formData);
        const response = await axios.post(
          "https://image-uploader-server-7bikexkon-pranavmangalgi.vercel.app/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );

        console.log("Files uploaded successfully:", response.data);
        console.log(response.data.url);
        setImage(response.data.str);

        setUrl(response.data.url);
        if (response.status === 201) {
          setPage("link");
        }
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },
    [setPage, setImage, setUrl],
  );

  useEffect(() => {
    if (files.length > 0) {
      handleUpload(files);
    }
  }, [files, handleUpload]);

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleButtonClick = () => {
    const inputElement = document.querySelector('input[type="file"]');
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <section className="space-y-4 text-center">
      <h1 className="text-xl font-light text-[#4F4F4F]">Upload your image</h1>
      <p className="text-xs font-thin text-[#828282]">
        File should be an image
      </p>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex h-[230px] w-[275px] flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-[#97BEF4] bg-[#F6F8FB] md:h-60 md:w-96"
      >
        <input {...getInputProps()} />
        <img src={img} alt="" />
        <p className="text-xs text-[#BDBDBD]">Drag & Drop your image here</p>
      </div>
      <p className="mt-3 text-center text-xs font-thin text-[#BDBDBD]">or</p>
      <div className="font-Noto_Sans mt-3 flex justify-center text-xs font-thin">
        <button
          className="rounded-lg bg-[#2F80ED] p-2 text-white"
          onClick={handleButtonClick}
        >
          Choose a file
        </button>
      </div>
    </section>
  );
}

export default Previews;
