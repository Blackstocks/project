'use client';
import React, { Fragment } from 'react';
import Card from '@/components/ui/Card';
import { Tab } from '@headlessui/react';
import Loading from '@/components/Loading';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import useUserDetails from '@/hooks/useUserDetails';

const buttons = [
  {
    title: 'General Info',
    icon: 'heroicons-outline:home',
  },
  {
    title: 'Company Profile',
    icon: 'heroicons-outline:office-building',
  },
  {
    title: 'Founder Information',
    icon: 'heroicons-outline:user',
  },
  {
    title: 'Business Details',
    icon: 'heroicons-outline:briefcase',
  },
  {
    title: 'Funding Information',
    icon: 'heroicons-outline:cash',
  },
];

const VerticalNavTabs = () => {
  const { user, details, loading } = useUserDetails();
  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
      <Tab.Group>
        <div className='grid grid-cols-12 lg:gap-5 md:gap-5'>
          <div className='xl:col-span-2 lg:col-span-3 lg:gap-5 md:col-span-5 col-span-12'>
            <Tab.List className=' max-w-max'>
              {buttons.map((item, i) => (
                <Tab key={i} as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={`flex gap-2 ring-0 foucs:ring-0 focus:outline-none px-4 rounded-md py-2 transition duration-150  ${
                        selected
                          ? 'text-white bg-[rgb(30,41,59)] '
                          : 'text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon icon={item.icon} />
                      <button className='text-sm font-semibold md:block inline-block mb-4 last:mb-0 capitalize '>
                        {item.title}
                      </button>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <div className='lg:col-span-9 md:col-span-7 col-span-12'>
            <Tab.Panels>
              <Tab.Panel>
                <Card title='General Information' className='w-full'>
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
                          href={`mailto:${
                            user?.email || 'info-500@dashcode.com'
                          }`}
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
              </Tab.Panel>
              <Tab.Panel>
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
              </Tab.Panel>
              <Tab.Panel>
                <div className='text-slate-600 dark:text-slate-400 text-sm font-normal'>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='text-slate-600 dark:text-slate-400 text-sm font-normal'>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </Card>
  );
};

export default VerticalNavTabs;