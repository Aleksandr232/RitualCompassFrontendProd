import API from "@/utils/api/api";
import { FormState } from "@/lib/session/SigninFormSchema/definitions";
import Cookies from "js-cookie";
import { SignupFormSchema } from "@/lib/session/SignupFormSchema/definitions";

export const signup = async (state: FormState, formData: FormData) => {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const signupEndpoint = API.compass.register;
  console.log(signupEndpoint);

  try {
    const response = await fetch(signupEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      const { token } = data;
      console.log(token);

      if (token) {
        Cookies.set("token", token, { expires: 7, path: "/" }); // установить на 7 дней

        window.location.href = "/";
      } else {
       
        console.error("Токен не был предоставлен в ответ.");
      }
    } else {
      const { errors } = data;
      console.log(errors);

      return { errors };
    }
  } catch (error) {
    const err = error as Error;
    console.error("Ошибка регистрации:", error);
    return {
      errors: {
        form: err.message || "Во время регистрации произошла ошибка.",
      },
    };
  }
};
