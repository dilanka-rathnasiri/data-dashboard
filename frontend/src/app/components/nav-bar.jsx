import Link from "next/link";

export function NavBar() {
  return (
    <nav className="navbar bg-success navbar-expand-lg">
      <div className="nav-item ps-4 pe-4">
        <Link href="/">
          <button className="btn">
            <span className="text-white fw-bold">Home</span>
          </button>
        </Link>
      </div>
      <Link href="/page-1">
        <button className="btn">
          <span className="text-white fw-bold">Page1</span>
        </button>
      </Link>

      <div className="nav-item ps-4 pe-4">
        <Link href="/page-2">
          <button className="btn">
            <span className="text-white fw-bold">Page2</span>
          </button>
        </Link>
      </div>
      <div className="nav-item ps-4 pe-4">
        <Link href="/page-3">
          <button className="btn">
            <span className="text-white fw-bold">Page3</span>
          </button>
        </Link>
      </div>
      <div className="nav-item ps-4 pe-4">
        <Link href="/page-4">
          <button className="btn">
            <span className="text-white fw-bold">Page4</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
