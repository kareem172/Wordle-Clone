import { useDispatch, useSelector } from "react-redux";
import LetterBox from "./LetterBox";
import { RootState } from "../store";
import { useEffect, useMemo, useRef } from "react";
import { setWrongWordError } from "../features/wordleSlice";

type RowProps = {
  rowIndex: number;
};
export default function Row({ rowIndex }: RowProps) {
  const dispatcher = useDispatch();
  const currentRow = useSelector((state: RootState) => state.rowIndex);
  const isWrongWord = useSelector((state: RootState) => state.IsWrongWord);
  const isSameRow = useMemo(
    () => rowIndex === currentRow,
    [rowIndex, currentRow],
  );
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isWrongWord && isSameRow) {
      rowRef.current?.classList.add("animate-shake");
      setTimeout(() => {
        rowRef.current?.classList.remove("animate-shake");
        dispatcher(setWrongWordError(false));
      }, 1000);
    }
  }, [isWrongWord, isSameRow, dispatcher]);
  return (
    <div className="flex gap-1" ref={rowRef}>
      <LetterBox rowIndex={rowIndex} letterIndex={0} />
      <LetterBox rowIndex={rowIndex} letterIndex={1} />
      <LetterBox rowIndex={rowIndex} letterIndex={2} />
      <LetterBox rowIndex={rowIndex} letterIndex={3} />
      <LetterBox rowIndex={rowIndex} letterIndex={4} />
    </div>
  );
}
