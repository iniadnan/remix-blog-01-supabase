import { Link } from "@remix-run/react"

export default function Navbar() {
    return (
        <nav className="w-full border-b-2 py-3 bg-gray-50">
            <div className="container mx-auto px-5 flex items-center justify-between">
                <div className='flex items-end gap-x-5'>
                    <Link to='/' className="font-semibold text-xl md:text-3xl text-gray-700 inline-block mr-5">Home</Link>
                    <Link to='/about' className="font-medium text-sm md:text-base text-gray-600">About</Link>
                    <Link to='/contact' className="font-medium text-sm md:text-base text-gray-600">Contact</Link>
                </div>
            </div>
        </nav>
    )
}