import Htag from "@/components/Htag/Htag";
import Link from "next/link";

const stylesWrapper = {
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  gap: "40px",
  "margin-top": "50px",
};

const stylesLink = {
  background: "var(--accent-color)",
  color: "var(--text-button-color)",
  " font-family": "Open_Sans",
  border: "none",
  padding: "15px 30px",
  "text-decoration": "none",
  "text-transform": "uppercase",
};

export default function NotFound() {
  return (
    <div style={stylesWrapper}>
      <Htag tag="h2">Страница не найдена</Htag>
      <p>Не удалось найти запрошенный ресурс</p>

      <Link style={stylesLink} href="/">
        Вернуться домой
      </Link>
    </div>
  );
}
