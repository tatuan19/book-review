import React from "react";
import { app } from "../../../firebase/index";

const UploadBookButton = (props) => {
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(`book_img/${file.name}`);
    await fileRef.put(file);
    const link = await fileRef.getDownloadURL();
    props.imgUpload(link);
  };
  return (
    <input
      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="file"
      onChange={onFileChange}
    />
  );
};

export default UploadBookButton;
