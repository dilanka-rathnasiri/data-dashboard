"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const ids = Array.from({ length: 4 }, (_, i) => i + 1);
  const paths = ids.map((id) => `/${id}`);
  const pathname = usePathname();

  const activeStyle = (path) => `btn ${pathname === path ? "btn-dark" : ""}`;

  return (
    <nav className="navbar bg-success navbar-expand-lg">
      <div className="nav-item ps-4 pe-4">
        <Link href="/">
          <button className={activeStyle("/")}>
            <span className="text-white fw-bold">Home</span>
          </button>
        </Link>
      </div>

      {ids.map((id, index) => (
        <div key={index} className="nav-item ps-4 pe-4">
          <Link href={paths[index]}>
            <button className={activeStyle(paths[index])}>
              <span className="text-white fw-bold">Page{id}</span>
            </button>
          </Link>
        </div>
      ))}
    </nav>
  );
}
