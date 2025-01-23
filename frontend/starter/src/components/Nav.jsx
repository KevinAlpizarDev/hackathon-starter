export const Nav = () => {
    return (
        <nav className="bg-blue-500 p-4 h-16">
            <div className="flex justify-between w-full">
                <div className="w-1/2 flex justify-center">
                    <div className="text-2xl font-black flex md:hidden">
                        1
                    </div>
                </div>
                <div className="w-1/2 flex justify-center relative group">
                    <div className="text-2xl font-black hidden md:flex w-1/2">
                        2
                    </div>

                    <div className="absolute left-0 top-8 w-full h-full hidden group-hover:flex justify-center items-center bg-black">
                        <span className="text-xl font-black text-white">5</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
