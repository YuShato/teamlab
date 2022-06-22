import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useForm, Controller } from "react-hook-form";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: fileData } = await api.auth.uploadFile(data);
      auth.setUser(fileData.user.photo);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Controller
        control={control}
        defaultValue="./default-avatar.svg"
        render={({ field }) => (
          <input type="file" {...field} onChange={handleChange} />
        )}
      />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ImageUpload;
