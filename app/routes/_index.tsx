import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="w-full md:pt-10 pb-10">
        <div className="container mx-auto px-5 w-full md:w-[900px] lg:w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          </div>
        </div>
      </main>
    </>
  );
}
