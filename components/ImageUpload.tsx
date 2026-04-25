"use client";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import React, { useState } from "react";

const ImageUpload = () => {
  const [fileUrl, setFileUrl] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center flex-col">
      {uploaded ? (
        <p> File Uploaded Successfully</p>
      ) : (
        <UploadButton
          endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
              console.log(res)
            setFileUrl(res.map((item) => item.url));
            setUploaded(true);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
          )}
          <div>{fileUrl && fileUrl}</div>
    </div>
  );
};

export default ImageUpload;
