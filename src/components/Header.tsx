import toast from "react-hot-toast";
import { HiCog, HiMoon, HiOutlineUser } from "react-icons/hi";

export default function Header() {
  return (
    <nav className="grid grid-cols-3 border-b-[1px] border-light/20 p-4">
      <button
        title="Developer Profile"
        onClick={() => window.open("https://github.com/kareem172")}
      >
        <HiOutlineUser size={30} />
      </button>
      <h1 className="bottom-0 flex items-baseline justify-center text-3xl  font-bold">
        Wordle
      </h1>
      <ul className=" flex justify-end gap-5">
        <li>
          <button
            title="Dark mood"
            onClick={() => toast("Light Mood will be implemented soon ⏳")}
          >
            <HiMoon size={30} />
          </button>
        </li>
        <li>
          <button
            title="Settings"
            onClick={() => toast("This Feature will be implemented soon ⏳")}
          >
            <HiCog size={30} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
