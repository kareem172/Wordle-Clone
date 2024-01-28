import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import toast from "react-hot-toast";
import { potentialWords } from "../assets/PotintialWords";
import {
  addLetter,
  checkWord,
  removeLetter,
  setWrongWordError,
} from "../features/wordleSlice";
import { LETTERS } from "../assets/letters";

export function useWordleActions() {
  const currentWord = useSelector((state: RootState) => state.currentWord);
  const isFound = useSelector((state: RootState) => state.isFound);
  const dispatcher = useDispatch();
  const handleEnterClick = () => {
    if(isFound) return;
    if (currentWord.length < 5) {
      toast.error("Word must be 5 letters long");
      dispatcher(setWrongWordError(true));
      return;
    }
    if (!potentialWords.includes(currentWord)) {
      toast.error("This is not a word on our list");
      dispatcher(setWrongWordError(true));
      return;
    }
    dispatcher(checkWord());
  };

  const handleLetterClick = (letter: string) => {
    if(isFound) return;
    if (LETTERS.includes(letter.toLowerCase()) && currentWord.length < 5) {
      dispatcher(addLetter(letter));
    }
  };

  const handleBackSpaceClick = () => {
    if(isFound) return;
    if (currentWord.length > 0) {
      dispatcher(removeLetter());
    }
  };
  return { handleEnterClick, handleLetterClick, handleBackSpaceClick };
}
