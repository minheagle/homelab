import { useParams } from "@tanstack/react-router";

const TerminalPage = () => {
  const { serverId } = useParams({ strict: false });

  return (
    <div className="w-full h-full border-l border-t border-white rounded">
      <div className="w-full h-8 border-b border-white"></div>
      <div>TerminalPage for server {serverId}</div>
    </div>
  );
};

export default TerminalPage;
