import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rowIndex: 0,
  letterIndex: 0,
  correctWord: "",
  currentWord: "",
  IsWrongWord: false,
  isFound: false,
  usedWords: [] as string[],
  usedLetters: [] as string[],
  correctLetters: [] as string[],
  correctPlacedLetters: [] as string[],
};

const wordleSlice = createSlice({
  name: "wordle",
  initialState,
  reducers: {
    addCorrectWord: (state, action) => {
      state.correctWord = action.payload;
      state.correctLetters = action.payload.split("");
    },
    setCorrectWord: (state, action) => {
      state.correctWord = action.payload;
    },
    addUsedWord: (state, action) => {
      state.usedWords.push(action.payload);
    },

    addLetter: (state, action) => {
      state.currentWord += action.payload;
      state.letterIndex += 1;
    },

    removeLetter: (state) => {
      state.currentWord = state.currentWord.slice(0, -1);
      state.letterIndex -= 1;
    },
    setWrongWordError: (state, action) => {
      state.IsWrongWord = action.payload;
    },

    checkWord: (state) => {
      state.isFound = state.currentWord === state.correctWord;
      state.usedWords = [...state.usedWords, state.currentWord];
      state.usedLetters = [
        ...new Set(state.usedLetters.concat(state.currentWord.split(""))),
      ];
      state.correctPlacedLetters = [
        ...state.correctPlacedLetters,
        ...state.currentWord
          .split("")
          .filter(
            (letter, index) =>
              state.correctLetters.includes(letter) &&
              state.correctLetters[index] === letter,
          ),
      ];
      state.currentWord = "";
      state.letterIndex = 0;
      state.rowIndex += 1;
    },

    reset: () => initialState,
  },
});
export const {
  addCorrectWord,
  setCorrectWord,
  addUsedWord,
  reset,
  checkWord,
  removeLetter,
  addLetter,
  setWrongWordError,
} = wordleSlice.actions;

export default wordleSlice.reducer;
