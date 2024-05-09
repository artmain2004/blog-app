import * as yup from "yup";

const schema = yup

  .object()
  .shape({
    name: yup.string().required(),
    lastname: yup.string().required(),

    email: yup.string().required().email(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

export default schema;
