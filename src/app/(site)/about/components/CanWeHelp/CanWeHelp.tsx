import Button from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import { FC } from "react";
import { ICanWeHelpProps } from "./CanWeHelp.props";
import { useRouter } from "next/navigation";
import Telephone from "@/components/Telephone/Telephone";

import styles from "./CanWeHelp.module.css";

const CanWeHelp: FC<ICanWeHelpProps> = ({ title, description }) => {
  const router = useRouter();
  console.log(description);

  return (
    <>
      <Htag tag="h1">{title}</Htag>
      {description && typeof description === "object" ? (
        description.map((desc, index) => (
          <Ptag size="medium" key={index} className={styles.text}>
            {desc}
          </Ptag>
        ))
      ) : (
        <Ptag size="medium" className={styles.text}>
          {description}
        </Ptag>
      )}
      <div className={styles.buttons_wrapper}>
        <Button
          onClick={() => router.push("/about", { scroll: false })}
          appearance="medium"
        >
          Назад
        </Button>
        <Telephone />
      </div>
    </>
  );
};

export default CanWeHelp;
