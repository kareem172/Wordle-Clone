import { useEffect } from "react";
import { useWordleActions } from "../hooks/useWordleActions";

import Keyboard from "./Keyboard";
import Row from "./Row";

export default function Wordle() {
  const { handleEnterClick, handleBackSpaceClick, handleLetterClick } =
    useWordleActions();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          handleEnterClick();
          break;
        case "Backspace":
          handleBackSpaceClick();
          break;
        default:
          handleLetterClick(e.key);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleBackSpaceClick, handleEnterClick, handleLetterClick]);
  return (
    <section className="flex min-h-[calc(100dvh-77px)] flex-col items-center justify-evenly gap-1 p-4">
      <main className="flex flex-col gap-1 ">
        <Row rowIndex={0} />
        <Row rowIndex={1} />
        <Row rowIndex={2} />
        <Row rowIndex={3} />
        <Row rowIndex={4} />
        <Row rowIndex={5} />
      </main>
      <Keyboard />
    </section>
  );
}
