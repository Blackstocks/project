"use client";
import Link from "next/link";
import LoginForm from "@/components/partials/auth/login-form";
import Social from "@/components/partials/auth/social";
import useDarkMode from "@/hooks/useDarkMode";

// image import

const Login = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="absolute left-0 2xl:bottom-[-10px] bottom-[-10px] h-full w-full z-[-1]">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  height: "10vh",
                }}
              >
                <img
                  src="\assets\images\auth\logoblueun.png"
                  alt="Logo"
                  style={{
                    height: "300px", // increased height
                    width: "450px", // increased width
                    objectFit: "contain",
                    marginTop: "25vh",
                  }}
                />
              </div>

              <div>
                <img
                  src="/assets/images/giff/giflogoun.gif"
                  alt="GIF Logo"
                  style={{
                    height: "600px",
                    width: "600px",
                    marginLeft: "70px",
                    marginTop: "60px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link href="/">
                    <img
                      src={
                        isDark
                          ? "/assets/images/logo/logo-white.svg"
                          : "/assets/images/logo/logo.svg"
                      }
                      alt=""
                      // className="mx-auto"
                      style={{
                        height:"200px",
                        width:"200px",
                        marginLeft: "80px",
                        marginBottom:"-50px",
                        marginTop:"-50px",
                      }}
                    />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4 className="font-medium">Sign in</h4>
                </div>
                <LoginForm />
                <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                  Don’t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
