import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [passWord, setPassWord] = useState<string>("");
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        className="absolute bottom-0 top-0 -z-10 w-screen"
        src={"/images/001.png"}
        loading="lazy"
        alt=""
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className=" mt-24 w-full px-10">
        <div className="flex flex-col items-center text-center text-6xl font-bold text-white">
          <span>LO</span>
          <span>GO</span>
          <span className="mt-4 text-4xl">App</span>
        </div>
        <span className="mt-20 ml-2 flex text-4xl font-bold text-white">
          Welcome!
        </span>
        <div className="mt-14 ml-2">
          <input
            type={"text"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="w-full border-b-2 bg-transparent pb-1 text-white placeholder:text-sm placeholder:text-white"
          />
          <input
            type={"password"}
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="Password"
            className="mt-10 w-full border-b-2 bg-transparent pb-1 text-white placeholder:text-sm placeholder:text-white"
          />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <button className="w-full rounded-full bg-white py-3 text-[#b08fe6] shadow-xl">
            Login
          </button>
          <span className="mt-3 text-xs font-bold text-white">
            Forget Password?
          </span>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <span className="text-xs font-bold text-white">
            dont have an account
          </span>
          <button className="mt-2 rounded-full bg-white px-14 py-2 text-[#b08fe6] shadow-xl">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
