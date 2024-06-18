'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseclient';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import Loading from '@/components/Loading';
import useUserDetails from '@/hooks/useUserDetails';

const Profile = () => {
  const { user, details, loading } = useUserDetails();
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className='space-y-5 profile-page'>
        <div className='profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]'>
          <div className='bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg'></div>
          <div className='profile-box flex-none md:text-start text-center'>
            <div className='md:flex items-end md:space-x-6 rtl:space-x-reverse'>
              <div className='flex-none'>
                <div className='md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative'>
                  <img
                    src={
                      details?.company_logo || '/assets/images/users/user-1.jpg'
                    }
                    alt=''
                    className='w-full h-full object-cover rounded-full'
                  />
                  <Link
                    href='#'
                    className='absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]'
                  >
                    <Icon icon='heroicons:pencil-square' />
                  </Link>
                </div>
              </div>
              <div className='flex-1'>
                <div className='text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]'>
                  {user?.name || 'User Name'}
                </div>
                <div className='text-sm font-light text-slate-600 dark:text-slate-400'>
                  {details?.typeof || 'Role'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-6 col-span-6'>
            <Card title='User Info'>
              <ul className='list space-y-8'>
                <li className='flex space-x-3 rtl:space-x-reverse'>
                  <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                    <Icon icon='heroicons:envelope' />
                  </div>
                  <div className='flex-1'>
                    <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${user?.email || 'info-500@dashcode.com'}`}
                      className='text-base text-slate-600 dark:text-slate-50'
                    >
                      {user?.email || 'info-500@dashcode.com'}
                    </a>
                  </div>
                </li>

                <li className='flex space-x-3 rtl:space-x-reverse'>
                  <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                    <Icon icon='heroicons:phone-arrow-up-right' />
                  </div>
                  <div className='flex-1'>
                    <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                      PHONE
                    </div>
                    <a
                      href={`tel:${user?.mobile || '0189749676767'}`}
                      className='text-base text-slate-600 dark:text-slate-50'
                    >
                      {user?.mobile || '+1-202-555-0151'}
                    </a>
                  </div>
                </li>

                <li className='flex space-x-3 rtl:space-x-reverse'>
                  <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                    <Icon icon='heroicons:map' />
                  </div>
                  <div className='flex-1'>
                    <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                      LOCATION
                    </div>
                    {details?.type === 'startup' && (
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.country}, {details.state_city}
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          {details?.type === 'investor' && (
            <div className='lg:col-span-6 col-span-6'>
              <Card title='Investor Details'>
                <ul className='list space-y-8'>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:briefcase' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        INVESTOR TYPE
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.typeof}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:credit-card' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        CHEQUE SIZE
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.cheque_size}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:chart-bar' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        SECTORS
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {Array.isArray(details.sectors)
                          ? details.sectors.join(', ')
                          : details.sectors}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:calendar' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        INVESTMENT STAGE
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.investment_stage}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:document-text' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        INVESTMENT THESIS
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.investment_thesis}
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          )}

          {details?.type === 'startup' && (
            <div className='lg:col-span-6 col-span-6'>
              <Card title='Startup Details'>
                <ul className='list space-y-8'>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:building-storefront' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        COMPANY NAME
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.company_name}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:calendar' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        INCORPORATION DATE
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.incorporation_date}
                      </div>
                    </div>
                  </li>

                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:building-office' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        OFFICE ADDRESS
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.office_address}
                      </div>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:globe-alt' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        COMPANY WEBSITE
                      </div>
                      <a
                        href={details.company_website}
                        className='text-base text-slate-600 dark:text-slate-50'
                      >
                        {details.company_website}
                      </a>
                    </div>
                  </li>
                  <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:briefcase' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        BUSINESS DESCRIPTION
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.short_description}
                      </div>
                    </div>
                  </li>
                  {/* <li className='flex space-x-3 rtl:space-x-reverse'>
                    <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                      <Icon icon='heroicons:light-bulb' />
                    </div>
                    <div className='flex-1'>
                      <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                        USP/MOAT
                      </div>
                      <div className='text-base text-slate-600 dark:text-slate-50'>
                        {details.usp_moat}
                      </div>
                    </div>
                  </li> */}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
