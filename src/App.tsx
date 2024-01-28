import { useEffect } from "react";
import Header from "./components/Header";
import Wordle from "./components/Wordle";
import { useDispatch } from "react-redux";
import { addCorrectWord } from "./features/wordleSlice";
import { potentialWords } from "./assets/PotintialWords";
import { Toaster } from "react-hot-toast";

export default function App() {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(
      addCorrectWord(
        potentialWords[Math.floor(Math.random() * potentialWords.length)],
      ),
    );
  }, [dispatcher]);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName="m-2"
        toastOptions={{
          className:
            "m-w-[600px] bg-light text-secondary font-semibold text-lg text-center",
          duration: 3000,
          success: {
            className: "bg-primary text-light font-semibold text-xl",
          },
          error: {
            className: "bg-darkGrey text-light  text-xl",
          },
        }}
      />
      <main className="min-h-dvh overflow-hidden bg-secondary text-light ">
        <Header />
        <Wordle />
      </main>
    </>
  );
}
