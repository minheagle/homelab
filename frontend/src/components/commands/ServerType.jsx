import { FaUbuntu } from "react-icons/fa";
import { FaDebian } from "react-icons/fa6";
import { FaCentos } from "react-icons/fa";
import { FaFedora } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import SERVER_TYPE from "../../constants/serverType";

const ServerType = ({ type, size }) => {
  switch (type) {
    case SERVER_TYPE.UBUNTU:
      return <FaUbuntu className={`text-${size}`} />;
    case SERVER_TYPE.DEBIAN:
      return <FaDebian className={`text-${size}`} />;
    case SERVER_TYPE.CENTOS:
      return <FaCentos className={`text-${size}`} />;
    case SERVER_TYPE.FEDORA:
      return <FaFedora className={`text-${size}`} />;
    default:
      return <FaServer className={`text-${size}`} />;
  }
};

export default ServerType;
