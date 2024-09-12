import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import API from "@/utils/api/api";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<null | {name : string}>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      // если токен отсутствует, перенаправляем на страницу авторизации
    } else {
      fetch(API.compass.user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Token is valid");
            return response.json();
          } else {
            console.log("Token is invalid");
            Cookies.remove("token");
            // перенаправляем на страницу авторизации
            throw new Error("Invalid token");
          }
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <svg
        className={styles["svg_burger"]}
        onClick={handleToggle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.sidebarContent}>
          <div className={styles.logo}>
            <Link href="/admin">{userData?.name}</Link>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href="/admin/company">Добавить компанию</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/blog">Добавить пост</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
