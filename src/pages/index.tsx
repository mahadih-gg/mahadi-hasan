import Navigation from "@/components/Navigation";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div>
      <Navigation />
      <button className="text-red-400">Dark/Light</button>
      <h1>Starting Portfolio</h1>

      <Test />
    </div>
  );
}
