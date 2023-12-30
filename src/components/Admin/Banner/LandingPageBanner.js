import React, { useState } from "react";
import { uploadImage } from "./uploadAxios";

const ImageUpdateForm = ({ onUpdate }) => {
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpdate = async () => {
    // Validate input if needed

    // Convert the image file to a data URL
    const reader = new FileReader();
    reader.onloadend = async () => {
      const imageUrl = reader.result;

      // Upload the image and get the response
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("description", description);

      try {
        await uploadImage(formData);
        // Call the onUpdate function passed from the parent component
        onUpdate();
        // Clear the form
        setImageFile(null);
        setDescription("");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <div>
      <label>
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ImageUpdateForm;
