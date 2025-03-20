import styles from "./Field.module.css";
import Cell from "./Cell";
import { useContext } from "react";
import { AppContext } from "../AppProvider";

function Field() {
  const { field, handleCellClick } = useContext(AppContext);
  return (
    <div className={styles.field}>
      {field.map((row, i) =>
        row.map((cell, j) => (
          <Cell key={`${i}${j}`} onClick={handleCellClick(i, j)} cell={cell} />
        ))
      )}
    </div>
  );
}

export default Field;
