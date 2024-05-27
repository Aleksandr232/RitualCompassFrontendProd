import API from "@/utils/api/api";
import {
  FormState,
  SigninFormSchema,
} from "@/lib/session/SigninFormSchema/definitions";
import Cookies from "js-cookie";
// import { useRouter } from "next/router";

export const signin = async (state: FormState, formData: FormData) => {
  // const router = useRouter()

  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const signinEndpoint = API.compass.login;
  console.log(signinEndpoint);

  try {
    const response = await fetch(signinEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      const { token } = data;
      console.log(token);

      if (token) {
        Cookies.set("token", token, { expires: 7, path: "/" }); // установить на 7 дней

        // window.location.href = "/";
        try {
          const userInfoResponse = await fetch(
            "http://localhost:8000/api/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userInfoData = await userInfoResponse.json();

          if (userInfoResponse.ok && userInfoData.is_admin === 1){
            window.location.href = "/admin";
          }
          else{
            window.location.href = "/";
          }
           
        } catch (userInfoError) {

          console.error("Ошибка при запросе данных о пользователе:", userInfoError)
          window.location.href = "/";
        }
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
    console.error("Ошибка входа в систему:", error);
    return {
      errors: {
        form: err.message || "Во время входа в систему произошла ошибка.",
      },
    };
  }
};
