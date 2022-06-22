import React, { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { FiEdit3 } from "react-icons/fi";
import { EditAvatarWrapper } from "./styles";

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free",
});

const EditAvatar = () => {
  const [userAvatar, setUserAvatar] = useState([null]);
  const options = {
    editor: {
      images: {
        crop: true,
        cropRatio: 4 / 3,
        cropShape: "circ", // "rect" | "circ"
      },
    },
    maxFileSizeBytes: 5 * 1024 * 1024,
    mimeTypes: ["image/jpeg"],
    multi: false,
  };

  const state = useState
  return (
    <EditAvatarWrapper>
      <UploadButton
        uploader={uploader} // Required.
        options={options} // Optional.
        onComplete={(files) => {
          // Optional.
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            setUserAvatar(files.map((f) => f.fileUrl));
            console.log(files[0].fileUrl)
            document.querySelector('.user-avatar').src = files[0].fileUrl;
            
          }
        }}
      >
        {({ onClick }) => (
          <button onClick={onClick}>
            <FiEdit3 />
          </button>
        )}
      </UploadButton>
    </EditAvatarWrapper>
  );
};

export default EditAvatar;
