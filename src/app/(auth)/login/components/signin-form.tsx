import { useFormState } from "react-dom";

import { signin } from "../actions/auth";
import styles from "./form.module.css";
import GoogleSigninButton from "../../auth/google/GoogleSigninButton";
import { SignupButton } from "../../components/signupButton";


export function SigninForm() {
  const [state, action] = useFormState(signin, undefined);


  return (
    <form className={styles["form-container"]} action={action}>
      <div>
        <label htmlFor="email">Почта</label>
        <input
          className={styles["form-input"]}
          id="email"
          name="email"
          placeholder="Почта"
        />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          className={styles["form-input"]}
          id="password"
          name="password"
          type="password"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state?.errors?.password.map((error: string) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <GoogleSigninButton />
      <SignupButton />
    </form>
  );
}
