import { useContext } from "react";
import Field from "./components/Field";
import { AppContext } from "./AppProvider";
import styles from "./App.module.css";
import ModalWindow from "./components/ModalWindow";

function App() {
  const { currentCourse, winner, countCourse, isModal } =
    useContext(AppContext);
  const pText = winner
    ? `Победили ${winner}`
    : countCourse <= 9
    ? `Ходят ${currentCourse}`
    : `Ничья!`;
  return (
    <div className={styles.app}>
      <p className={styles.status}>{pText}</p>
      <Field />
      {isModal && <ModalWindow />}
    </div>
  );
}

export default App;
