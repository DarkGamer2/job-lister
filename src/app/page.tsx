import Login from "./components/Login";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  display: "swap",
  weight: ["400"],
  variable: "--font-bebas-neue"
});

export default function Home() {
  return (
    <div className={`${bebasNeue.variable} font-sans`}>
      <h1 className="text-4xl font-bold mb-4 text-center mt-5">Job Lister</h1>
      <Login />
    </div>
  );
}