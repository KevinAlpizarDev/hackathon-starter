export const Nav = () => {
    return (
        <nav className="bg-blue p-4 h-16 mb-0">
            <div className="flex justify-between w-full">
                <div className="w-1/6 flex justify-center ">
                    <div className="text-2xl font-black">
                        FACEBOOK
                    </div>
                </div>
                <div className="w-full flex justify-end relative group">
                    <div className="text-2xl font-black hidden md:flex w-1/2">
                        2
                    </div>
                    <div className="flex md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        </svg>

                    </div>
                    {/* <div className="absolute left-0 top-8 w-full h-full hidden group-hover:flex justify-center items-center bg-black">
                        <span className="text-xl font-black text-white">5</span>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};
