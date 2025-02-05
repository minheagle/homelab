import { SiMysql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiOracle } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import DATABASE_TYPE from "../../constants/databaseType";

const DatabaseType = ({ type, size }) => {
  switch (type) {
    case DATABASE_TYPE.MYSQL:
      return <SiMysql className={`text-${size}`} />;
    case DATABASE_TYPE.SQLSERVER:
      return <DiMsqlServer className={`text-${size}`} />;
    case DATABASE_TYPE.POSTGRESQL:
      return <BiLogoPostgresql className={`text-${size}`} />;
    case DATABASE_TYPE.ORACLE:
      return <SiOracle className={`text-${size}`} />;
    case DATABASE_TYPE.MONGODB:
      return <SiMongodb className={`text-${size}`} />;
  }
};

export default DatabaseType;
