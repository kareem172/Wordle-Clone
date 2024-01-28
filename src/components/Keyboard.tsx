import { LETTERS } from "../assets/letters";
import Key from "./Key";
import { IoIosBackspace } from "react-icons/io";

export default function Keyboard() {
  const Letters = LETTERS;
  return (
    <div className="m-2 flex flex-col gap-2 ">
      <div className="flex items-center justify-center gap-2">
        {Letters.slice(0, 10).map((letter, index) => {
          return <Key value={letter} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center gap-2">
        {Letters.slice(10, 19).map((letter, index) => {
          return <Key value={letter} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Key value="Enter" className="grow text-sm">
          Enter
        </Key>
        {Letters.slice(19, 26).map((letter, index) => {
          return <Key value={letter} key={index} />;
        })}
        <Key value="BackSpace" className=" grow">
          <IoIosBackspace size={28} />
        </Key>
      </div>
    </div>
  );
}
