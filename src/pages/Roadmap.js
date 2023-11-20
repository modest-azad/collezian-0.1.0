import Link from "next/link";

export default function Roadmap() {
  return (
    <section className="roadmap">
      <h2 className="text-center text-xl font-bold bg-blue-200 p-4">Roadmap</h2>

      <aside className="flex flex-col just">
        <Link href="#">Android App Development</Link>
        <Link href="#">Comptetive Programming Raodmap</Link>
      </aside>
    </section>
  );
}
