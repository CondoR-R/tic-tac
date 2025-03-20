import { useContext } from "react";
import styles from "./ModalWindow.module.css";
import { AppContext } from "../AppProvider";

function ModalWindow() {
  const { winner, isEnd, handleNewGame } = useContext(AppContext);
  const pText = winner
    ? `Победили ${winner}`
    : isEnd
    ? `Ничья!`
    : `Начать новую игру`;
  return (
    <div className={styles.layout}>
      <div className={styles.modal}>
        <div className={styles.body}>
          <p className={styles.paragraph}>{pText}</p>
          <button onClick={handleNewGame} className={styles.button}>
            Новая игра
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
