import Logo from "../assets/logo.png";
import User from "../assets/icons/user.svg";

export default function Navbar() {
  return (
    <nav className="px-64 flex justify-between h-20 items-center shadow-md">
      <div>
        <img src={Logo} alt="logo" className="cursor-pointer" />
      </div>
      <div className="flex justify-around">
        <h1 className="uppercase font-outfit text-2xl font-black text-[var(--primary-text)] drop-shadow-lg px-3 py-6 hover:bg-[#333333] hover:shadow-none cursor-pointer">
          fotografia
        </h1>
        <h1 className="uppercase font-outfit text-2xl font-black text-[var(--primary-text)] drop-shadow-lg px-3 py-6 hover:bg-[#333333] hover:shadow-none cursor-pointer">
          filmowanie
        </h1>
        <h1 className="uppercase font-outfit text-2xl font-black text-[var(--primary-text)] drop-shadow-lg px-3 py-6 hover:bg-[#333333] hover:shadow-none cursor-pointer">
          inspekcja
        </h1>
      </div>
      <div>
        <button className="btn">
          <img src={User} alt="" />
          Kontakt
        </button>
      </div>
    </nav>
  );
}
