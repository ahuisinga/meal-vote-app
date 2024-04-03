import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <Link href={"/group/create"}>Create New Group</Link>
          </li>
          <li>
            <Link href={"/group/join"}>Join a Group</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl italic text-accent">
          EAT!
        </Link>
      </div>
      <div className="hidden flex-none gap-2 sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/group/create"}>Create New Group</Link>
          </li>
          <li>
            <Link href={"/group/join"}>Join a Group</Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
