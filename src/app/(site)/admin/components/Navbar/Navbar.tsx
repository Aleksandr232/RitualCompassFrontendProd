import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import styles from "./Navbar.module.css";
import Button from "@/components/Button/Button";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState(Cookies.get("theme") || "light");

  useEffect(() => {
    const token = Cookies.get("token");
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    Cookies.set("theme", theme, { expires: 365 });
    console.log(token);

    setIsAuthenticated(!!token);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
    setIsAuthenticated(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/admin">Админка</Link>
        </div>
        {/* <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/admin/users">
              Users
            </Link>
          </li>
        </ul> */}
        <div className={styles["theme-toggle"]} onClick={toggleTheme}>
          {theme === "light" ? (
            <FaSun className={styles["theme-icon"]} />
          ) : (
            <FaMoon className={styles["theme-icon"]} />
          )}
        </div>
        <div className={styles.exit} onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
