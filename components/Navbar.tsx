import Link from "next/link";

function NavbarItems() {
    return (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/posts/intro">Intro</Link>
            </li>
        </>
    );
}

export default function Navbar() {
    return (
        <div className="navbar bg-cat-base pl-5 text-cat-text">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="text-cat-peach lg:hidden">
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
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="z-1 menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-cat-crust p-2 shadow"
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">L.I.G.M.A.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-cat-peach">
                    <NavbarItems />
                </ul>
            </div>
            <div className="navbar-end"></div>
        </div>
    );
}
