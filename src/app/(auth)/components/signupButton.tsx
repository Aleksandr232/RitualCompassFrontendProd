"use client";

import Button from "@/components/Button/Button";
import { useFormStatus } from "react-dom";

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" appearance="small">
      {pending ? "Отправка..." : "Войти"}
    </Button>
  );
}
