
export const AuthLayout = ({ children, title = '' }) => {
    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex bg-black flex-col items-center justify-center px-6 py-8 mx-auto">

                <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">




                    <div className="p-6 space-y-4 sm:p-8">


                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                            {title}
                        </h1>





                        {children}

                    </div>
                </div>

            </div>

        </section >

    )
}
