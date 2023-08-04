import img from '../assets/images/logo512.png'

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-3 bg-black text-white sticky top-0 w-full">
            <div>
                <img src={img} alt='' className='w-10'/>
            </div>
            <nav className='nav'>
                <ul className="flex gap-6">
                    <li>Product</li>
                    <li>Feature</li>
                    <li>Marketplace</li>
                    <li>Company</li>
                </ul>
            </nav>
            <div>
                <button className='bg-blue-300 text-black p-3 font-semibold rounded-lg hover:bg-blue-400 transition ease-in-out duration-300 hover:text-white'>Log in </button>
            </div>
        </header>
    )
}