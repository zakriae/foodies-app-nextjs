"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [imageURL, setImageURL] = useState();
  const ImageRef = useRef();
  const handleClickButton = () => {
    ImageRef.current.click();
    const imageReder = new FileReader();

    imageReder.readAsDataURL;
  };

  const handleImageChnage = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImageURL(null);
      return;
    }
    const imageReader = new FileReader();
    imageReader.onload = () => {
      setImageURL(imageReader.result);
    };
    imageReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {imageURL ? (
            <Image src={imageURL} fill />
          ) : (
            <p>No image picked Yet</p>
          )}
        </div>
        <input
          className={classes.input}
          id={name}
          type="file"
          accept="image/png image/jpeg"
          name={name}
          ref={ImageRef}
          onChange={handleImageChnage}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleClickButton}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
