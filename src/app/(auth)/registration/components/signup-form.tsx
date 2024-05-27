import { useFormState } from "react-dom";

import styles from "./form.module.css";
import { signup } from "../actions/auth";
import { SignupButton } from "../../components/signupButton";


export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form className={styles["form-container"]} action={action}>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          className={styles["form-input"]}
          id="name"
          name="name"
          placeholder="Имя"
        />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}

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
      <SignupButton />
    </form>
  );
}
