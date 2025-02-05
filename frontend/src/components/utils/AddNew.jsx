import { FaPlus } from "react-icons/fa";

const AddNew = () => {
  return (
    <div className="w-28 h-8 flex justify-center items-center gap-2 border border-white text-white rounded">
      <FaPlus />
      <div className="font-medium">Add new</div>
    </div>
  );
};

export default AddNew;
