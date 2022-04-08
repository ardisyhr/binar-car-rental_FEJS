const Navbar = () => {
    return (
        <>
            <nav className="bg-transparent fixed top-0 z-[100]">
                <div className="flex flex-wrap justify-between items-center fixed
                                py-7 px-16 2xl:px-48 w-full">
                    <a href="/" className="flex items-center">
                        <img src="/logo.png" alt="Placeholder Logo" />
                    </a>
                    <div className="flex md:order-1">
                        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden md:grid md:grid-cols-5 md:order-2 text-center md:gap-4 items-center col" id="mobile-menu-4">
                        <a href="/" className="text-black text-sm leading-5 font-normal hover:text-[13px] hover:leading-3 hover:font-semibold hover:text-neutral-4">Our Services</a>
                        <a href="/" className="text-black text-sm leading-5 font-normal hover:text-[13px] hover:leading-3 hover:font-semibold hover:text-neutral-4">Why Us</a>
                        <a href="/" className="text-black text-sm leading-5 font-normal hover:text-[13px] hover:leading-3 hover:font-semibold hover:text-neutral-4">Testimonial</a>
                        <a href="/" className="text-black text-sm leading-5 font-normal hover:text-[13px] hover:leading-3 hover:font-semibold hover:text-neutral-4">FAQ</a>
                        <button type="button" className="text-white bg-limegreen-4 hover:bg-limegreen-5 
                        font-bold rounded-sm text-sm text-center mr-3 md:mr-0 w-[81px] h-[36px]">
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
