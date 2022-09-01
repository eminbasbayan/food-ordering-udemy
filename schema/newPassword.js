import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
