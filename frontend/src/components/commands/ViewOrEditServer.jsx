import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoClose } from "react-icons/io5";
import createServerFormSchema from "../../validations/createServerFormSchema";
import SERVER_TYPE from "../../constants/serverType";

const ViewOrEditServer = ({ setOpenForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createServerFormSchema) });

  const onSubmit = (data) => {
    console.log("Form data : ", data);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="relative bg-black p-6 rounded-lg shadow-lg max-w-2xl w-full text-center border border-white">
        <button
          onClick={() => setOpenForm(false)}
          className="cursor-pointer absolute top-1 right-1 text-4xl text-red-500"
        >
          <IoClose />
        </button>
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
            <input
              type="text"
              {...register("group")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Name</label>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("name")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Type</label>
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>
            <select
              name=""
              id=""
              {...register("type")}
              className="w-full bg-black outline-none border border-white rounded px-2 py-1"
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
            <input
              type="text"
              {...register("host")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">Port</label>
              {errors.port && (
                <p className="text-red-500 text-sm">{errors.port.message}</p>
              )}
            </div>
            <input
              type="number"
              defaultValue={22}
              {...register("port")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-start">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="">User</label>
              {errors.user && (
                <p className="text-red-500 text-sm">{errors.user.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("user")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
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
            <input
              type="password"
              {...register("password")}
              className="w-full outline-none border border-white rounded px-2 py-1"
            />
          </div>
          <div className="w-full flex justify-end items-center gap-4 mt-4">
            <button
              type="submit"
              className="cursor-pointer border border-white rounded p-2 bg-black text-white"
            >
              Save
            </button>
            <button
              type="button"
              className="cursor-pointer border border-white rounded p-2 bg-black text-white"
            >
              Test connection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewOrEditServer;
