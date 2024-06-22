import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import Icon from '@/components/ui/Icon';
import Card from '@/components/ui/Card';
import Textinput from '@/components/ui/Textinput';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import useUserDetails from '@/hooks/useUserDetails';
import Loading from '@/components/Loading';

const buttons = [
  { title: 'General Info', icon: 'heroicons-outline:home' },
  { title: 'Startup Profile', icon: 'heroicons-outline:office-building' },
  { title: 'Founder Information', icon: 'heroicons-outline:user' },
  { title: 'Business Details', icon: 'heroicons-outline:briefcase' },
  { title: 'Funding Information', icon: 'heroicons-outline:cash' },
];

const VerticalNavTabs = ({ editingSection, setEditingSection, handleSave }) => {
  const { user, details, loading } = useUserDetails();

  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
      <Tab.Group>
        <div className='grid grid-cols-12 lg:gap-5 md:gap-5'>
          <div className='xl:col-span-2 lg:col-span-3 lg:gap-5 md:col-span-5 col-span-12'>
            <Tab.List className='max-w-max'>
              {buttons.map((item, i) => (
                <Tab key={i} as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={`flex gap-2 ring-0 foucs:ring-0 focus:outline-none px-4 rounded-md py-2 transition duration-150 ${
                        selected
                          ? 'text-white bg-[rgb(30,41,59)]'
                          : 'text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon icon={item.icon} />
                      <button className='text-sm font-semibold md:block inline-block mb-4 last:mb-0 capitalize'>
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
                {editingSection === 'general_info' ? (
                  <Card title='Edit General Information'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(e.target, 'general_info');
                      }}
                    >
                      <Textinput label='Email' defaultValue={user?.email} />
                      <Textinput label='Phone' defaultValue={user?.mobile} />
                      <Textinput
                        label='Location'
                        defaultValue={`${details?.country}, ${details?.state_city}`}
                      />
                      <div className='flex lg:mt-4 mt-2'>
                        <Button
                          text='Save'
                          type='submit'
                          className='btn-dark lg:mr-4 mr-2'
                        />
                        <Button
                          text='Cancel'
                          onClick={() => setEditingSection(null)}
                          className='btn-light'
                        />
                      </div>
                    </form>
                  </Card>
                ) : (
                  <Card title='General Information' className='w-full'>
                    <div className='relative'>
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
                              href={`mailto:${user?.email}`}
                              className='text-base text-slate-600 dark:text-slate-50'
                            >
                              {user?.email}
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
                              href={`tel:${user?.mobile}`}
                              className='text-base text-slate-600 dark:text-slate-50'
                            >
                              {user?.mobile}
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
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.country}, {details?.state_city}
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Button
                        onClick={() => setEditingSection('general_info')}
                        className='absolute right-4 top-4 h-8 w-auto text-white bg-[rgb(30,41,59)]  rounded-md shadow-md flex items-center justify-center px-3'
                      >
                        <Icon icon='heroicons:pencil-square' className='mr-1' />
                        Edit
                      </Button>
                    </div>
                  </Card>
                )}
              </Tab.Panel>
              <Tab.Panel>
                {editingSection === 'startup_details' ? (
                  <Card title='Edit Startup Details'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(e.target, 'startup_details');
                      }}
                    >
                      <Textinput
                        label='Company Name'
                        defaultValue={details?.company_name}
                      />
                      <Textinput
                        label='Incorporation Date'
                        type='date'
                        defaultValue={details?.incorporation_date}
                      />
                      <Textinput
                        label='Office Address'
                        defaultValue={details?.office_address}
                      />
                      <Textinput
                        label='Company Website'
                        defaultValue={details?.company_website}
                      />
                      <Textarea
                        label='Business Description'
                        defaultValue={details?.short_description}
                      />
                      <div className='flex lg:mt-4 mt-2'>
                        <Button
                          text='Save'
                          type='submit'
                          className='btn-dark lg:mr-4 mr-2'
                        />
                        <Button
                          text='Cancel'
                          onClick={() => setEditingSection(null)}
                          className='btn-light'
                        />
                      </div>
                    </form>
                  </Card>
                ) : (
                  <Card title='Startup Details'>
                    <div className='relative'>
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
                              {details?.company_name}
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
                              {details?.incorporation_date}
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
                              {details?.office_address}
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
                              href={details?.company_website}
                              className='text-base text-slate-600 dark:text-slate-50'
                            >
                              {details?.company_website}
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
                              {details?.short_description}
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Button
                        onClick={() => setEditingSection('startup_details')}
                        className='absolute right-4 top-4 h-8 w-auto text-white bg-[rgb(30,41,59)]  rounded-md shadow-md flex items-center justify-center px-3'
                      >
                        <Icon icon='heroicons:pencil-square' className='mr-1' />
                        Edit
                      </Button>
                    </div>
                  </Card>
                )}
              </Tab.Panel>
              <Tab.Panel>
                {editingSection === 'founder_info' ? (
                  <Card title='Edit Founder Information'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(e.target, 'founder_info');
                      }}
                    >
                      <Textinput
                        label='Founder Name'
                        defaultValue={details?.founderInformation?.founder_name}
                      />
                      <Textinput
                        label='Email'
                        defaultValue={
                          details?.founderInformation?.founder_email
                        }
                      />
                      <Textinput
                        label='Mobile Number'
                        defaultValue={
                          details?.founderInformation?.founder_mobile
                        }
                      />
                      <Textinput
                        label='LinkedIn Profile'
                        defaultValue={
                          details?.founderInformation?.founder_linkedin
                        }
                      />
                      <Textinput
                        label='Degree Name'
                        defaultValue={details?.founderInformation?.degree_name}
                      />
                      <Textinput
                        label='College Name'
                        defaultValue={details?.founderInformation?.college_name}
                      />
                      <Textinput
                        label='Year of Graduation'
                        type='date'
                        defaultValue={
                          details?.founderInformation?.graduation_year
                        }
                      />
                      <div className='flex lg:mt-4 mt-2'>
                        <Button
                          text='Save'
                          type='submit'
                          className='btn-dark lg:mr-4 mr-2'
                        />
                        <Button
                          text='Cancel'
                          onClick={() => setEditingSection(null)}
                          className='btn-light'
                        />
                      </div>
                    </form>
                  </Card>
                ) : (
                  <Card title='Founder Information'>
                    <div className='relative'>
                      <ul className='list space-y-8'>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:user' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              FOUNDER NAME
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.founder_name}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:envelope' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              EMAIL
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.founder_email}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:phone' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              MOBILE NUMBER
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.founder_mobile}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:globe-alt' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              LINKEDIN PROFILE
                            </div>
                            <a
                              href={
                                details?.founderInformation?.founder_linkedin
                              }
                              className='text-base text-slate-600 dark:text-slate-50'
                            >
                              {details?.founderInformation?.founder_linkedin}
                            </a>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:academic-cap' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              DEGREE NAME
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.degree_name}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:building-library' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              COLLEGE NAME
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.college_name}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:calendar' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              YEAR OF GRADUATION
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.founderInformation?.graduation_year}
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Button
                        onClick={() => setEditingSection('founder_info')}
                        className='absolute right-4 top-4 h-8 w-auto text-white bg-[rgb(30,41,59)]  rounded-md shadow-md flex items-center justify-center px-3'
                      >
                        <Icon icon='heroicons:pencil-square' className='mr-1' />
                        Edit
                      </Button>
                    </div>
                  </Card>
                )}
              </Tab.Panel>
              <Tab.Panel>
                {editingSection === 'business_details' ? (
                  <Card title='Edit Business Details'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(e.target, 'business_details');
                      }}
                    >
                      <Textinput
                        label='Industry or Sector'
                        defaultValue={details?.businessDetails?.industry_sector}
                      />
                      <Textinput
                        label='Current Stage'
                        defaultValue={details?.businessDetails?.current_stage}
                      />
                      <Textinput
                        label='Current Traction'
                        defaultValue={
                          details?.businessDetails?.current_traction
                        }
                      />
                      <Textinput
                        label='Target Audience'
                        defaultValue={details?.businessDetails?.target_audience}
                      />
                      <Textinput
                        label='Team Size'
                        type='number'
                        defaultValue={details?.businessDetails?.team_size}
                      />
                      <Textarea
                        label='USP/MOAT'
                        defaultValue={details?.businessDetails?.usp_moat}
                      />
                      <div className='flex lg:mt-4 mt-2'>
                        <Button
                          text='Save'
                          type='submit'
                          className='btn-dark lg:mr-4 mr-2'
                        />
                        <Button
                          text='Cancel'
                          onClick={() => setEditingSection(null)}
                          className='btn-light'
                        />
                      </div>
                    </form>
                  </Card>
                ) : (
                  <Card title='Business Details'>
                    <div className='relative'>
                      <ul className='list space-y-8'>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:briefcase' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              INDUSTRY OR SECTOR
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.businessDetails?.industry_sector}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:chart-bar' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              CURRENT STAGE
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.businessDetails?.current_stage}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:users' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              TEAM SIZE
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.businessDetails?.team_size}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:flag' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              TARGET AUDIENCE
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.businessDetails?.target_audience}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:light-bulb' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              USP/MOAT
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.businessDetails?.usp_moat}
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Button
                        onClick={() => setEditingSection('business_details')}
                        className='absolute right-4 top-4 h-8 w-auto text-white bg-[rgb(30,41,59)]  rounded-md shadow-md flex items-center justify-center px-3'
                      >
                        <Icon icon='heroicons:pencil-square' className='mr-1' />
                        Edit
                      </Button>
                    </div>
                  </Card>
                )}
              </Tab.Panel>
              <Tab.Panel>
                {editingSection === 'funding_info' ? (
                  <Card title='Edit Funding Information'>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSave(e.target, 'funding_info');
                      }}
                    >
                      <Textinput
                        label='Total Funding Ask'
                        defaultValue={
                          details?.fundingInformation?.total_funding_ask
                        }
                      />
                      <Textinput
                        label='Amount Committed'
                        defaultValue={
                          details?.fundingInformation?.amount_committed
                        }
                      />
                      <Textinput
                        label='Government Grants'
                        defaultValue={
                          details?.fundingInformation?.government_grants
                        }
                      />
                      <Textinput
                        label='Equity Split'
                        defaultValue={details?.fundingInformation?.equity_split}
                      />
                      <Textarea
                        label='Fund Utilization'
                        defaultValue={
                          details?.fundingInformation?.fund_utilization
                        }
                      />
                      <Textinput
                        label='ARR'
                        defaultValue={details?.fundingInformation?.arr}
                      />
                      <Textinput
                        label='MRR'
                        defaultValue={details?.fundingInformation?.mrr}
                      />
                      <div className='flex lg:mt-4 mt-2'>
                        <Button
                          text='Save'
                          type='submit'
                          className='btn-dark lg:mr-4 mr-2'
                        />
                        <Button
                          text='Cancel'
                          onClick={() => setEditingSection(null)}
                          className='btn-light'
                        />
                      </div>
                    </form>
                  </Card>
                ) : (
                  <Card title='Funding Information'>
                    <div className='relative'>
                      <ul className='list space-y-8'>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:currency-dollar' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              TOTAL FUNDING ASK
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.total_funding_ask}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:banknotes' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              AMOUNT COMMITTED
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.amount_committed}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:clipboard-document-check' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              GOVERNMENT GRANTS
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.government_grants}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:chart-pie' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              EQUITY SPLIT
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.equity_split}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:document-text' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              FUND UTILIZATION
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.fund_utilization}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:chart-bar' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              ARR
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.arr}
                            </div>
                          </div>
                        </li>
                        <li className='flex space-x-3 rtl:space-x-reverse'>
                          <div className='flex-none text-2xl text-slate-600 dark:text-slate-300'>
                            <Icon icon='heroicons:chart-bar' />
                          </div>
                          <div className='flex-1'>
                            <div className='uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]'>
                              MRR
                            </div>
                            <div className='text-base text-slate-600 dark:text-slate-50'>
                              {details?.fundingInformation?.mrr}
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Button
                        onClick={() => setEditingSection('funding_info')}
                        className='absolute right-4 top-4 h-8 w-auto text-white bg-[rgb(30,41,59)] rounded-md shadow-md flex items-center justify-center px-3'
                      >
                        <Icon icon='heroicons:pencil-square' className='mr-1' />
                        Edit
                      </Button>
                    </div>
                  </Card>
                )}
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </Card>
  );
};

export default VerticalNavTabs;
