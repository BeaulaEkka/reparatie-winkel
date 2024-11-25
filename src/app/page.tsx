import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-sky-700/50 w-4/5 sm:max-w-96 mx-auto text-white border  border-sky-300/50 sm:text-2xl">
          <h1 className="font-bold">Beaula&apos;s Repair Shop</h1>
          <address className="text-xl sm:text-md">
            35 Schiedamseweg,
            <br /> Rotterdam 3288RR
          </address>
          <p className="text-xl sm:text-md">Open Daily:9am to 5pm</p>
          <Link
            href={"tel:123456789"}
            className="hover:underline text-xl sm:text-md"
          >
            555-555-555
          </Link>
        </div>
      </main>
    </div>
  );
}
