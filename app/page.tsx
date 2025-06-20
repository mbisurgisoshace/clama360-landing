import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main className="h-full bg-[#F4F4FA] flex flex-col row-start-2 items-center sm:items-start">
        <div className="h-[64px] w-full bg-white px-[100px] flex items-center justify-center md:justify-start border-b border-b-[#DEDEDE]">
          <Image
            priority
            height={30}
            width={180}
            src="/logo.png"
            alt="Clama360 logo"
            className="h-[30px] w-[180px] sm:h-[40px] sm:w-[240px] object-contain"
          />
        </div>

        <div className="h-full w-full flex flex-col items-center justify-center gap-12 p-20">
          <Image
            priority
            height={60}
            width={350}
            src="/logo.png"
            alt="Clama360 logo"
            className="h-[30px] w-[350px] sm:h-[60px] sm:w-[240px] object-contain"
          />
          <h3 className="font-bold text-[#0F172A] text-xl align-center">
            Estamos trabajando en nuestra página web
          </h3>
        </div>
      </main>
    </div>
  );
}
