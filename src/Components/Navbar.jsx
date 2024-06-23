import Logo from "../assets/logo.png";
import User from "../assets/icons/user.svg";

export default function Navbar() {
  return (
    <nav className="bg-transparent fixed top-0 w-full backdrop-blur-sm">
      <div className="py-2 px-64 flex justify-between w-full">
        <img src={Logo} alt="logo" className="cursor-pointer filter drop-shadow-lg" />
        <button className="btn">
          <img src={User} alt="person-image" />
          Kontakt
        </button>
      </div>
      <div className="">
        <hr className="border z-10" />
        <div className="flex justify-center text-white">
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            Strona Główna
          </button>
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            O Nas
          </button>
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            Wyposażenie
          </button>
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            Projekty
          </button>
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            Wydarzenia
          </button>
          <button className="font-outfit font-semibold text-2xl py-1 hover:bg-[rgba(0,0,0,0.2)] hover:scale-110 transition-all px-10">
            Miasto
          </button>
        </div>
        <hr className="border z-10" />
      </div>
    </nav>
  );
}
