import { FC} from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Htag from "@/components/Htag/Htag";
import Navigation from "../components/Navigation/Navigation";
import AuthWrapper from "../components/AuthWrapper/AuthWrapper";




const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.logo_wrapper}>
        {/* <Htag tag="h2">Оказание бесплатной ритуальной помощи в г.Казань</Htag> */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="268px" height="151px" viewBox="0 0 268 151" enable-background="new 0 0 268 151" xml:space="preserve">  <image id="image0" width="268" height="151" x="0" y="0" xlink:href="data:image/png;base64,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"/>
      </svg>
      </div>

      <nav className={styles.navigation}>
        <Navigation />
      </nav>

     {/*  <div className={styles.auth}>
        <AuthWrapper />
      </div> */}
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
