import styles from "./Cell.module.css";

function Cell({ cell, onClick }) {
  return (
    <div className={styles.cell}>
      <button onClick={onClick} className={styles.button}>
        {cell}
      </button>
    </div>
  );
}

export default Cell;
