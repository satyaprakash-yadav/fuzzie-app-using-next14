"use client";

import { useState } from "react";
import "@uploadcare/react-uploader/core.css";
import { FileUploaderRegular } from "@uploadcare/react-uploader";

const UploadCareButton = () => {
  const [files, setFiles] = useState([]);

  const handleChangeEvent = (items) => {
    setFiles([...items.allEntries.filter((file) => file.status === "success")]);
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="71f48df61a4bd69c79c1"
      />

      <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadCareButton;
