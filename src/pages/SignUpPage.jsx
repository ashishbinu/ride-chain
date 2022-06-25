function SignUpPage() {
    return (
        <section>
            <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Signup For Riders</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="Name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <div className="mt-1">
                                    <input id="Name " name="Name " type="Text" autocomplete="Name " required="" placeholder="Enter Your Name" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700"> Vehicle Type </label>
                                <div className="mt-1">
                                    <input id="vehicle" name="vehicle" type="Text" autocomplete="vehicle" required="" placeholder="Enter Vehicle Type" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Phone Number </label>
                                <div className="mt-1">
                                    <input id="phone" name="phone" type="tel" autocomplete="phone" required="" placeholder="Enter Your Phone Number" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="formFile" className="block text-sm font-medium text-gray-700">Upload Your Photo</label>
                                <div className="mt-1"></div>
                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-30 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />

                            </div></form>

                    </div>
                    <div>
                        <button type="submit" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">Sign in</button>
                    </div>
                </div>
            </div >
        </section >
    );
}
export default SignUpPage;
