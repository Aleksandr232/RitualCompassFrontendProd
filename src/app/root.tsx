import { Button } from "@/shared/ui/button/button";
import { Main } from "@/widgets/user/Main";
import { useState } from "react";

export function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="h1">Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Main />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
