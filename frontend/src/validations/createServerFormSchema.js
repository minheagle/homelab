import * as yup from "yup";
import SERVER_TYPE from "../constants/serverType";

const schema = yup.object().shape({
  group: yup.string(),
  name: yup.string().required("Name is required !"),
  type: yup
    .string()
    .oneOf(Object.values(SERVER_TYPE), "Server type is not valid !"),
  host: yup
    .string()
    .required("Host is required !")
    .matches(/^([a-zA-Z0-9.-]+)$/, "Host is not valid !"),
  port: yup.number().required("Port is required !").min(1).max(65535),
  user: yup.string().required("User is required !"),
  password: yup.string().required("Password is required !"),
});

export default schema;
