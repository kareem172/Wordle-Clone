import { useSelector } from "react-redux";
import { RootState } from "../store";
type LetterBoxProps = {
  rowIndex: number;
  letterIndex: number;
};

export default function LetterBox({ rowIndex, letterIndex }: LetterBoxProps) {
  const currentWord = useSelector((state: RootState) => state.currentWord);
  const usedWords = useSelector((state: RootState) => state.usedWords);
  const currentRow = useSelector((state: RootState) => state.rowIndex);
  const correctWord = useSelector((state: RootState) => state.correctWord);
  const value =
    usedWords[rowIndex]?.split("")[letterIndex] ||
    (rowIndex === currentRow ? currentWord.split("")[letterIndex] : "");
  console.log(correctWord);
  const isCorrectLetter =
    usedWords[rowIndex]?.split("")[letterIndex] ===
    correctWord.split("")[letterIndex];
  const isLetterInWord = correctWord
    .split("")
    .includes(usedWords[rowIndex]?.split("")[letterIndex]);

  const backGroundColor = isCorrectLetter
    ? "bg-primary "
    : isLetterInWord
      ? "bg-yellow "
      : "bg-darkGrey";

  const animationDelay = 300 * letterIndex;

  return (
    <div
      style={{ transitionDelay: `${animationDelay}ms` }}
      className={`letter transition-transform duration-1000  ${rowIndex < currentRow && " rotation "} `}
    >
      <div
        className={`front  ${Boolean(value) && " animate-small-pulse border-2 border-light/40 "}`}
      >
        {value}
      </div>
      <div className={`back ${backGroundColor} `}>{value}</div>
    </div>
  );
}
