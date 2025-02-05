import ServerMinimal from "./ServerMinimal";

const GroupServer = ({ name, value }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-start font-medium text-white text-xl border-b border-white p-4">
        {name}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {value?.map((item) => (
          <ServerMinimal key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default GroupServer;
