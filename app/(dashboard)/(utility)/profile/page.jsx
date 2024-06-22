'use client';
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import useUserDetails from '@/hooks/useUserDetails';
import Textinput from '@/components/ui/Textinput';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Loading from '@/components/Loading';
import VerticalNavTabs from '@/components/profileSideBar';
import {
  updateGeneralInfo,
  updateStartupDetails,
  updateFounderInfo,
  updateBusinessDetails,
  updateFundingInfo,
} from '@/lib/actions/insertformdetails';

const Profile = () => {
  const { user, details, loading } = useUserDetails();
  const [editingSection, setEditingSection] = useState(null);

  const handleSave = async (formData, section) => {
    const formData = new FormData(formElement);
    const updatedData = {};

    formData.forEach((value, key) => {
      updatedData[key] = value;
    });

    console.log('Updated Data:', updatedData);

    try {
      let result;
      switch (section) {
        case 'general_info':
          result = await updateGeneralInfo(user.id, updatedData);
          break;
        case 'startup_details':
          result = await updateStartupDetails(details.profile_id, updatedData);
          break;
        case 'founder_info':
          result = await updateFounderInfo(details.company_id, updatedData);
          break;
        case 'business_details':
          result = await updateBusinessDetails(details.company_id, updatedData);
          break;
        case 'funding_info':
          result = await updateFundingInfo(details.company_id, updatedData);
          break;
        default:
          console.error('Unknown section:', section);
          return;
      }

      console.log('Profile updated:', result);
      // Optionally, you can update the state with new details
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setEditingSection(null);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
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
                <button
                  onClick={() => setEditingSection('')}
                  className='absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]'
                >
                  <Icon icon='heroicons:pencil-square' />
                </button>
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
          {details?.type === 'investor' && (
            <Card title='User Info'>
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
                    <Button text='Save' type='submit' className='btn-dark' />
                    <Button
                      text='Cancel'
                      onClick={() => setEditingSection(null)}
                      className='btn-light'
                    />
                  </form>
                </Card>
              ) : (
                <Card className='w-full'>
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
                  </div>
                </Card>
              )}
            </Card>
          )}
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
      </div>
      {details?.type === 'startup' && (
        <VerticalNavTabs
          editingSection={editingSection}
          setEditingSection={setEditingSection}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default Profile;
