import Image from "next/image";
import { Avatar } from "./Avatar";
import Navbar from "./Navbar/navbar";

export default function Home() {
  return (
    <>
      {" "}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        <Avatar
          size={process.env.AVATAR_SIZE ? +process.env.AVATAR_SIZE : 256}
          src={process.env.AVATAR_URL ? process.env.AVATAR_URL : "/avatar/choix.jpg"}></Avatar>
      </div>
      <div className="">
        <p>cc</p>
      </div>
      <div className="">
        <p>cc</p>
      </div>
      <div className="">
        <p>cc</p>
      </div>
      <div className="">
        <p>cc</p>
      </div>
    </>
  );
}
