import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="w-full flex justify-evenly bg-slate-400 py-4 items-center">
            <Link className="font-bold text-white" href={'/'}>Home</Link>
            <Link className="font-bold text-white" href={'/books'}>Books</Link>
            <Link className="font-bold text-white" href={'/movies'}>Movies</Link>
            <Link className="font-bold text-white" href={'/games'}>Games</Link>
        </nav>
    )
}

export default Navbar;