import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [field, setField] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [currentCourse, setCurrentCourse] = useState("X");
  const [countCourse, setCountCourse] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isModal, setIsModal] = useState(true);

  const newGame = () => {
    setWinner(null);
    setIsEnd();
    setCurrentCourse("X");
    setCountCourse(1);
    setField([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const handleNewGame = () => {
    setIsModal(false);
    newGame();
  };

  const handleCellClick = (x, y) => () => {
    if (field[x][y]) return;

    const newField = field.map((row) => row.map((cell) => cell));
    newField[x][y] = currentCourse;

    setField(newField);
    setCurrentCourse((prev) => (prev === "X" ? "O" : "X"));
    setCountCourse((prev) => prev + 1);

    // проверка на диагонали
    if (
      newField[1][1] &&
      ((newField[0][0] === newField[1][1] &&
        newField[0][0] === newField[2][2]) ||
        (newField[0][2] === newField[1][1] &&
          newField[0][2] === newField[2][0]))
    ) {
      setIsEnd(true);
      setWinner(newField[1][1]);
      setIsModal(true);
      return;
    }

    // проверка на горизонтали и вертикали
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          newField[i][j] &&
          ((newField[i][0] === newField[i][1] &&
            newField[i][0] === newField[i][2]) ||
            (newField[0][j] === newField[1][j] &&
              newField[0][j] === newField[2][j]))
        ) {
          setIsEnd(true);
          setWinner(newField[i][j]);
          setIsModal(true);
          return;
        }
      }
    }

    // проверка на завершение игры без выигрыша
    if (countCourse === 9) {
      setIsEnd(true);
      setIsModal(true);
    }
  };

  const contextValue = {
    field,
    isEnd,
    winner,
    currentCourse,
    countCourse,
    isModal,
    handleCellClick,
    handleNewGame,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
