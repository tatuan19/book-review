import React from "react";
import { uploadImage } from "./../../../lib/api";

const UploadButton = (props) => {
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await uploadImage(file);
    props.imgUpload(imageUrl);
  };
  return (
    <input
      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="file"
      onChange={onFileChange}
    />
  );
};

export default UploadButton;
