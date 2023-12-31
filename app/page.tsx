import Link from "next/link";
import Button from "./components/Button";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold p-10 text-4xl text-center">HomePage</h1>
      <ul className="flex flex-row gap-4 px-24">
        <li className="hover:text-slate-600 hover:cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-slate-600 hover:cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-slate-600 hover:cursor-pointer">
          <Link href="/about/team">Teams</Link>
        </li>
        <li className="hover:text-slate-600 hover:cursor-pointer">
          <Link href="/random">Random</Link>
        </li>
      </ul>
      <div className="text-center mt-44">
        <Button buttonText="Get Started" />
      </div>
    </div>
  );
};

export default HomePage;
