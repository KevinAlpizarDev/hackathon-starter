import { SideBar, NavBar } from '../../components'
export const ProjectLayout = ({ children }) => {




    return (
        <>
            <div className=" h-screen  top-0 left-0'">
                {/* navbar */}
                <NavBar />

                <div className='flex h-full w-full'>
                    <SideBar />
                    <div className="w-full flex p-2 justify-center items-center bg-slate-300   mt-24 ml-4 mr-4 mb-4 rounded-md  md:mt-36">
                        {children}

                    </div>

                </div>
            </div>
        </>
    )
}

