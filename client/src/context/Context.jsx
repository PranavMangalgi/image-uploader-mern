import { createContext, useState } from "react";
const ImageContext = createContext({});
import PropTypes from "prop-types";
function ImageContextProvider({ children }) {
  const [page, setPage] = useState("home");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const states = {
    page,
    setPage,
    image,
    setImage,
    url,
    setUrl,
  };
  return (
    <ImageContext.Provider value={states}>{children}</ImageContext.Provider>
  );
}

ImageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ImageContext };

export default ImageContextProvider;
