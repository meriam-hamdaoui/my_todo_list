import * as Yup from "yup";
import { PRIORITIES } from "../constants/data";

export const getTodoSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required("This field is required")
      .min(3, "3 character minimum")
      .max(30, "30 character maximum"),
    description: Yup.string().max(200, "200 character maximum"),
    deadline: Yup.string(),
    priority: Yup.string()
      .required("Priority is not valide value")
      .oneOf(Object.keys(PRIORITIES), "Priority is not valide value"),
  });
};
