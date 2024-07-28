import { Header } from "@/components/Header";

export const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 w-full">
          <Header />
        </div>
      </div>
    </>
  );
};
