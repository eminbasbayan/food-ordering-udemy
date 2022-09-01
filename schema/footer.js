import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Location is required."),
  phoneNumber: Yup.string()
    .required("Phone Number is required.")
    .min(10, "Phone number must be at least 10 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  desc: Yup.string().required("Description is required."),
  day: Yup.string().required("Day is required."),
  time: Yup.string().required("Time is required."),
});
