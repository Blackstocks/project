'use client';

import React from 'react';
import Link from 'next/link';
import useDarkMode from '@/hooks/useDarkMode';
import RegForm from '@/components/partials/auth/reg-from';
import Social from '@/components/partials/auth/social';

const Register = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <div className='loginwrapper'>
        <div className='lg-inner-column'>
          <div className='left-column relative z-[1]'>
            <div className='max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  height: '10vh',
                }}
              >
                <img
                  src='assets/images/logo/X (8).png'
                  alt='Logo'
                  style={{
                    height: '300px', // increased height
                    width: '450px', // increased width
                    objectFit: 'contain',
                    marginTop: '15vh',
                    marginLeft: '10vh',
                  }}
                />
              </div>

              <div>
                <img
                  src='/assets/images/giff/giflogoun.gif'
                  alt='GIF Logo'
                  style={{
                    height: '500px',
                    width: '600px',
                    marginLeft: '70px',
                    marginTop: '60px',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='right-column relative bg-white dark:bg-slate-800'>
            <div className='inner-content h-full flex flex-col bg-white dark:bg-slate-800'>
              <div className='auth-box h-full flex flex-col justify-center'>
                {/* <div className='mobile-logo text-center mb-6 lg:hidden block'>
                  <Link href='/'>
                    <img
                      src={
                        isDark
                          ? '/assets/images/logo/logo-white.svg'
                          : '/assets/images/logo/logo.svg'
                      }
                      alt=''
                      className='mx-auto'
                    />
                  </Link>
                </div> */}
                <div className='text-center 2xl:mb-10 mb-5'>
                  <h4 className='font-medium'>Sign up</h4>
                  <div className='text-slate-500 dark:text-slate-400 text-base mt-3'>
                    Create an account
                  </div>
                </div>
                <RegForm />

                <div className='max-w-[225px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-3 mt-3 uppercase text-sm'>
                  Already registered?
                  <Link
                    href='/'
                    className='text-slate-900 dark:text-white font-medium hover:underline'
                  >
                    Sign In
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

export default Register;
