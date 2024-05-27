"use client";

import { FC, useEffect, useState } from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Cookies from "js-cookie";
import Button from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import LinkTag from "@/components/LinkTag/LinkTag";

const Header: FC<IHeaderProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);

    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <header className={styles.header} {...props}>
      <div style={{ display: "flex", gap: "30px" }}>
        <Htag tag="h2">Оказание бесплатной ритуальной помощи в г.Казань</Htag>
        <nav style={{ width: "100%" }}>
          <ul style={{ display: "flex", gap: "30px" }}>
            <li>туда сюда</li>
            <li>сюда туда </li>
            <li>тут</li>
          </ul>
        </nav>

        <div style={{ display: "flex", gap: "30px" }}>
          {!isAuthenticated ? (
            <>
              <LinkTag url="/login" appearance="medium">
                Войти
              </LinkTag>
              <LinkTag url="/registration" appearance="medium">
                registration
              </LinkTag>
            </>
          ) : (
            <Button appearance="medium" onClick={handleLogout}>Выйти</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// //логика такая если нажал лайк/дизлайк, то уже не можешь ставить лайк/дизлайк

// const [likes, setLikes] = useState(2);
// const [dislikes, setDislikes] = useState(2);
// const [likeActive, setLikeActive] = useState(false);
// const [dislikeActive, setDislikeActive] = useState(false);

// //логика такая если нажал лайк/дизлайк, то уже не можешь ставить лайк/дизлайк
// const handleLike = () => {
//   if (!likeActive) {
//     setLikes((prevLikes) => prevLikes + 1);
//     setLikeActive(true);

//     if (dislikeActive) {
//       setDislikes((prevDislikes) => prevDislikes - 1);
//       setDislikeActive(false);
//     }
//   } else {
//     setLikes((prevLikes) => prevLikes - 1);
//     setLikeActive(false);
//   }
// };
// //логика такая если нажал лайк/дизлайк, то уже не можешь ставить лайк/дизлайк
// const handleDislike = () => {
//   if (!dislikeActive) {
//     setDislikes((prevDislikes) => prevDislikes + 1);
//     setDislikeActive(true);
//     if (likeActive) {
//       setLikes((prevLikes) => prevLikes - 1);
//       setLikeActive(false);
//     }
//   } else {
//     setDislikes((prevDislikes) => prevDislikes - 1);
//     setDislikeActive(false);
//   }
// };
