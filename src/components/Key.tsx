import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useWordleActions } from "../hooks/useWordleActions";

type KeyProps = {
  value: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Key({ value, children, className = "" }: KeyProps) {
  const correctLetters = useSelector(
    (state: RootState) => state.correctLetters,
  );
  const usedLetters = useSelector((state: RootState) => state.usedLetters);
  const correctPlacedLetters = useSelector(
    (state: RootState) => state.correctPlacedLetters,
  );

  const { handleEnterClick, handleBackSpaceClick, handleLetterClick } =
    useWordleActions();

  const backGroundColor = correctPlacedLetters.includes(value)
    ? "bg-primary"
    : correctLetters.includes(value) && usedLetters.includes(value)
      ? " bg-yellow "
      : usedLetters.includes(value)
        ? " bg-darkGrey "
        : " bg-grey ";

  const handleClick = () => {
    switch (value) {
      case "Enter":
        handleEnterClick();
        break;
      case "BackSpace":
        handleBackSpaceClick();
        break;
      default:
        handleLetterClick(value);
        break;
    }
  };
  return (
    <button
      className={
        className +
        backGroundColor +
        " flex min-h-[50px] min-w-[30px] items-center justify-center rounded px-2 py-3 text-lg font-bold capitalize md:min-h-[60px] md:py-4 md:min-w-[40px] md:text-xl"
      }
      onClick={handleClick}
    >
      {children || value}
    </button>
  );
}
