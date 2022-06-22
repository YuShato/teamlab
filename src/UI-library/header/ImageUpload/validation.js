import { object, string, mixed } from "yup";

const schema = object().shape({
  attachment: mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.length) return true; // attachment is optional
    return value[0].size <= 5 * 1024 * 1024;
  }),
});


export default schema