import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary p-5 text-primary-content">
      <div className=" mx-auto flex flex-row justify-between">
        <p>Created by Anna</p>
        <p>&copy; 2024</p>
        <Link href={"/about"}>About</Link>
      </div>
    </footer>
  );
}
