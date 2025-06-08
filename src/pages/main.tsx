import { MainNav } from "@/features/nav";
import { Main } from "@/widgets/user/Main";

export function MainPage() {
  return (
    <>
      <MainNav />
      <h1 className="h1">Vite + React</h1>
      <div className="card">
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
