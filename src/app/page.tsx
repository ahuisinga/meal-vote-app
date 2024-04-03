import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Link href={"/group/create"} className="btn btn-accent">
        Create a Group
      </Link>
      <p>OR</p>
      <Link href={"/group/join"} className="btn btn-secondary">
        Join a Group
      </Link>
    </div>
  );
}
