import { Link, useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Header from "../components/Header";
// 0x9004B74B7A22F8EC7DCBE8FE94849D5a7AEe60eD
function HeroPage() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
      console.log("isAuthenticated", isAuthenticated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (user) navigate("available-drivers");
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  const signUp = async () => {
    // await logOut();
    navigate("signup")
  };
      // {isAuthenticated && <Header>{user?.get("ethAddress")}</Header>}
  return (
    <>
      <section className="w-full h-screen py-auto bg-white">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Ride Sharing For <br className="hidden lg:block" />
                  College Students
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                  This is a platform where students can share the ride for small
                  and long distances at minimal cost.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button
                      className="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={login}
                    >
                      Get a ride
                    </button>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button
                      className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={signUp}
                    >
                      Sign up for riders
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroPage;
