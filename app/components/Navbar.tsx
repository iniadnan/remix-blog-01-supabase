import { Link } from "@remix-run/react"

export default function Navbar(props: { navHandleModal?: () => void, newPost: boolean }) {

    const { navHandleModal, newPost } = props;

    return (
        <nav className="w-full border-b-2 py-3 bg-gray-50">
            <div className="container mx-auto px-5 flex items-center justify-between">
                <div className='flex items-end gap-x-5'>
                    <Link to='/' className="font-semibold text-xl md:text-3xl text-gray-700 inline-block mr-5">Home</Link>
                    <Link to='/about' className="font-medium text-sm md:text-base text-gray-600">About</Link>
                    <Link to='/contact' className="font-medium text-sm md:text-base text-gray-600">Contact</Link>
                </div>
                {newPost === true &&
                    <button type="button" onClick={navHandleModal} className="text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium py-2 px-5 rounded-lg">New Post</button>
                }
            </div>
        </nav>
    )
}