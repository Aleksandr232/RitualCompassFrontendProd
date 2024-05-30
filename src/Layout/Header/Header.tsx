import { FC} from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Htag from "@/components/Htag/Htag";
import Navigation from "../components/Navigation/Navigation";
import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import Icon from "../../../public/icon.svg";




const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.logo_wrapper}>
        {/* <Htag tag="h2">Оказание бесплатной ритуальной помощи в г.Казань</Htag> */}
        <Icon/>
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
