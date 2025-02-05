const DeleteModal = ({ setOpenForm }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="relative bg-black p-6 rounded-lg shadow-lg max-w-2xl w-full text-center border border-white">
        <div className="text-xl font-medium">
          Do you want to confirm delete this server connection !
        </div>
        <div className="w-full flex justify-end items-center gap-4 mt-4 font-medium">
          <button
            type="button"
            onClick={() => setOpenForm(false)}
            className="cursor-pointer border border-white rounded p-2 bg-black text-white hover:scale-110"
          >
            Cancel
          </button>
          <button
            type="button"
            className="cursor-pointer rounded p-2 bg-red-500 text-white hover:scale-110"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
