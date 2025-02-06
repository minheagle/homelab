import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import createServerFormSchema from "../../validations/createServerFormSchema";
import SERVER_TYPE from "../../constants/serverType";
import {
  Server,
  ServerFormData,
  ServerType,
} from "../../types/commands/ServerTypes";

interface ServerFormProps {
  data?: Server;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>; // Correctly typing setOpenForm
  isCreate?: boolean;
  isEdit?: boolean;
}

const ServerForm: React.FC<ServerFormProps> = ({
  data = {} as Server,
  setOpenForm,
  isCreate = false,
  isEdit = true,
}) => {
  const [isDisplayPassword, setIsDisplayPassword] = useState(false);
  const [isEditAction, setIsEditAction] = useState(isEdit);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServerFormData>({
    resolver: yupResolver(createServerFormSchema),
    defaultValues: {
      group: data?.group || "",
      name: data?.name || "",
      type: data?.type || ServerType.OTHER, // Dùng giá trị mặc định hợp lệ từ enum
      host: data?.host || "",
      port: data?.port || 22,
      user: data?.user || "",
      password: data?.password || "",
    },
  });

  const onSubmit: SubmitHandler<ServerFormData> = (formData) => {
    console.log("Form data : ", formData);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="relative bg-black p-6 rounded-lg shadow-lg max-w-2xl w-full text-center border border-white">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-white font-medium mt-2"
        >
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Group</label>
              {errors.group && (
                <p className="text-red-500 text-sm">{errors.group.message}</p>
              )}
            </div>
            {isEditAction ? (
              <input
                type="text"
                {...register("group")}
                className="w-full outline-none border border-white rounded px-2 py-1"
              />
            ) : (
              <input
                type="text"
                {...register("group")}
                className="w-full outline-none border border-white rounded px-2 py-1"
                readOnly
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Name</label>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {isEditAction ? (
              <input
                type="text"
                {...register("name")}
                className="w-full outline-none border border-white rounded px-2 py-1"
              />
            ) : (
              <input
                type="text"
                {...register("name")}
                className="w-full outline-none border border-white rounded px-2 py-1"
                readOnly
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Type</label>
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>
            <select
              id=""
              {...register("type")}
              className="w-full bg-black outline-none border border-white rounded px-2 py-1"
              disabled={!isCreate && !isEditAction}
            >
              {Object.entries(SERVER_TYPE).map(([key, value]) => (
                <option key={key} value={value}>
                  {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Host</label>
              {errors.host && (
                <p className="text-red-500 text-sm">{errors.host.message}</p>
              )}
            </div>
            {isEditAction ? (
              <input
                type="text"
                {...register("host")}
                className="w-full outline-none border border-white rounded px-2 py-1"
              />
            ) : (
              <input
                type="text"
                {...register("host")}
                className="w-full outline-none border border-white rounded px-2 py-1"
                readOnly
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Port</label>
              {errors.port && (
                <p className="text-red-500 text-sm">{errors.port.message}</p>
              )}
            </div>
            {isEditAction ? (
              <input
                type="number"
                {...register("port")}
                className="w-full outline-none border border-white rounded px-2 py-1"
              />
            ) : (
              <input
                type="number"
                {...register("port")}
                className="w-full outline-none border border-white rounded px-2 py-1"
                readOnly
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">User</label>
              {errors.user && (
                <p className="text-red-500 text-sm">{errors.user.message}</p>
              )}
            </div>
            {isEditAction ? (
              <input
                type="text"
                {...register("user")}
                className="w-full outline-none border border-white rounded px-2 py-1"
              />
            ) : (
              <input
                type="text"
                {...register("user")}
                className="w-full outline-none border border-white rounded px-2 py-1"
                readOnly
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Password</label>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {isEditAction ? (
              <div className="w-full flex justify-center items-center border border-white rounded">
                <input
                  type={isDisplayPassword ? "text" : "password"}
                  {...register("password")}
                  className="flex-1 outline-none px-2 py-1"
                />
                <button
                  type="button"
                  onClick={() => setIsDisplayPassword(!isDisplayPassword)}
                  className="w-8 h-8 flex justify-center items-center cursor-pointer"
                >
                  {isDisplayPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center border border-white rounded">
                <input
                  type={isDisplayPassword ? "text" : "password"}
                  {...register("password")}
                  className="flex-1 outline-none px-2 py-1"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => setIsDisplayPassword(!isDisplayPassword)}
                  className="w-8 h-8 flex justify-center items-center cursor-pointer"
                >
                  {isDisplayPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            )}
          </div>
          <div className="w-full flex justify-end items-center gap-4 mt-4">
            {/* Create Server Case */}
            {isCreate && isEditAction && (
              <>
                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Test connection
                </button>
              </>
            )}

            {/* Edit Server Case */}
            {!isCreate && isEditAction && (
              <>
                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Update
                </button>
              </>
            )}

            {/* View Server Case */}
            {!isCreate && !isEditAction && (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditAction(true)}
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServerForm;
