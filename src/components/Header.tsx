import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-screen flex justify-between items-center">
      <div className="bg-orange-500 text-white p-2 rounded-lg">
        <h1 className="text-2xl font-bold text-black">Quizz App</h1>
      </div>
      <div className="text-2xl cursor-pointer">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};
