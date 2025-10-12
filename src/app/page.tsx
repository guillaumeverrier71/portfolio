"use client";
import Navbar from "./components/page";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center text-center gap-15 mt-50">
      <Navbar />
      <div className="text-6xl">Welcome to my website !</div>
      <div className="text-4xl">Guillaume VERRIER, Front-end Developer, engineer student.</div>
    </div>
  );
}
