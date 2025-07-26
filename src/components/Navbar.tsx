interface NavbarProps {
  handleSignup: () => void;
  handleLogin: () => void;
}

export const Navbar = ({ handleLogin, handleSignup }: NavbarProps) => {
  return (
    <nav className="grid grid-cols-[120px_1fr_180px] w-5xl items-center">
      <span className="glassmorphism-left uppercase font-extrabold py-1.5 flex justify-center text-lg text-white">
        tiket.ku
      </span>
      <div className="bg-aquamarine-500 w-full h-full" />
      <ul className="glassmorphism-right flex items-center justify-around divide-x divide-aquamarine-400/40 h-full">
        {/* <li>Home</li> */}
        <li
          className="px-4 py-1.5 text-white font-semibold cursor-pointer"
          onClick={handleSignup}
        >
          Signup
        </li>
        <li
          className="px-4 py-1.5 text-white font-semibold cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </li>
      </ul>
    </nav>
  );
};
