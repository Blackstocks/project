import React, { useState, useEffect } from 'react';
import Textinput from '@/components/ui/Textinput';
import InputGroup from '@/components/ui/InputGroup';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const steps = [
  {
    id: 1,
    title: 'Contact Information',
  },
  {
    id: 2,
    title: 'Company Profile',
  },
  {
    id: 3,
    title: 'Founder and Education Information',
  },
  {
    id: 4,
    title: 'Business Details',
  },
  {
    id: 5,
    title: 'Funding Information',
  },
];

let contactSchema = yup.object().shape({
  mobile: yup.string().required('Mobile number is required'),
  businessDescription: yup
    .string()
    .required('Business description is required'),
});

let profileSchema = yup.object().shape({
  companyName: yup.string().required('Company name is required'),
  shortDescription: yup.string().required('Short description is required'),
  incorporationDate: yup.date().required('Date of Incorporation is required'),
  country: yup.string().required('Country is required'),
  stateCity: yup.string().required('State, City is required'),
  officeAddress: yup.string().required('Office address is required'),
  pinCode: yup.string().required('Pin code is required'),
  companyWebsite: yup
    .string()
    .url('Invalid URL')
    .required('Company website is required'),
  linkedinProfile: yup
    .string()
    .url('Invalid URL')
    .required('LinkedIn profile is required'),
});

let founderAndEducationSchema = yup.object().shape({
  founderName: yup.string().required('Full name is required'),
  founderEmail: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  founderMobile: yup.string().required('Mobile number is required'),
  founderLinkedin: yup
    .string()
    .url('Invalid URL')
    .required('LinkedIn profile is required'),
  cofounder: yup.boolean(),
  cofounderName: yup.string().when('cofounder', {
    is: true,
    then: yup.string().required('Co-Founder name is required'),
  }),
  cofounderEmail: yup.string().when('cofounder', {
    is: true,
    then: yup
      .string()
      .email('Invalid email')
      .required('Co-Founder email is required'),
  }),
  cofounderMobile: yup.string().when('cofounder', {
    is: true,
    then: yup.string().required('Co-Founder mobile number is required'),
  }),
  cofounderLinkedin: yup.string().when('cofounder', {
    is: true,
    then: yup
      .string()
      .url('Invalid URL')
      .required('Co-Founder LinkedIn profile is required'),
  }),
  degreeName: yup.string().required('Degree name is required'),
  collegeName: yup.string().required('College name is required'),
  graduationYear: yup.date().required('Year of graduation is required'),
});

let businessSchema = yup.object().shape({
  certificateOfIncorporation: yup
    .mixed()
    .required('Certificate of Incorporation is required'),
  gstCertificate: yup.mixed().required('GST Certificate is required'),
  startupIndiaCertificate: yup
    .mixed()
    .required('Startup India Certificate is required'),
  dueDiligenceReport: yup.mixed().required('Due Diligence Report is required'),
  businessValuationReport: yup
    .mixed()
    .required('Business Valuation Report is required'),
  industrySector: yup.string().required('Industry or sector is required'),
  currentStage: yup
    .string()
    .required('Current stage of the company is required'),
  currentTraction: yup.string().required('Current traction is required'),
  mis: yup.mixed().required('MIS is required'),
  pitchDeck: yup.mixed().required('Pitch Deck is required'),
  videoPitch: yup.mixed().required('Video Pitch is required'),
  targetAudience: yup.string().required('Target Audience is required'),
  teamSize: yup.number().required('Team Size is required'),
  uspMoat: yup.string().required('USP/MOAT is required'),
});

let fundingSchema = yup.object().shape({
  previousFunding: yup.boolean(),
  totalFundingAsk: yup.number().required('Total funding ask is required'),
  amountCommitted: yup.number().required('Amount committed so far is required'),
  currentCapTable: yup.mixed().required('Current cap table is required'),
  governmentGrants: yup.string().required('Government grants are required'),
  equitySplit: yup
    .string()
    .required('Equity split among the founders is required'),
  fundUtilization: yup
    .string()
    .required('Fund utilization summary is required'),
  arr: yup.number().required('ARR is required'),
  mrr: yup.number().required('MRR is required'),
});

const FormWizard = () => {
  const [stepNumber, setStepNumber] = useState(0);

  let currentStepSchema;
  switch (stepNumber) {
    case 0:
      currentStepSchema = contactSchema;
      break;
    case 1:
      currentStepSchema = profileSchema;
      break;
    case 2:
      currentStepSchema = founderAndEducationSchema;
      break;
    case 3:
      currentStepSchema = businessSchema;
      break;
    case 4:
      currentStepSchema = fundingSchema;
      break;
    default:
      currentStepSchema = contactSchema;
  }

  useEffect(() => {}, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    mode: 'all',
  });

  const onSubmit = (data) => {
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;
    if (isLastStep) {
      console.log(data);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };

  return (
    <div>
      <Card title='Startup Registration'>
        <div>
          <div className='flex z-[5] items-center relative justify-center md:mx-8'>
            {steps.map((item, i) => (
              <div
                className='relative z-[1] items-center item flex flex-start flex-1 last:flex-none group'
                key={i}
              >
                <div
                  className={`${
                    stepNumber >= i
                      ? 'bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900'
                      : 'bg-white ring-slate-900 ring-opacity-70 text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70'
                  } transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`}
                >
                  {stepNumber <= i ? (
                    <span> {i + 1}</span>
                  ) : (
                    <span className='text-3xl'>
                      <Icon icon='bx:check-double' />
                    </span>
                  )}
                </div>

                <div
                  className={`${
                    stepNumber >= i
                      ? 'bg-slate-900 dark:bg-slate-900'
                      : 'bg-[#E0EAFF] dark:bg-slate-700'
                  } absolute top-1/2 h-[2px] w-full`}
                ></div>
                <div
                  className={`${
                    stepNumber >= i
                      ? 'text-slate-900 dark:text-slate-300'
                      : 'text-slate-500 dark:text-slate-300 dark:text-opacity-40'
                  } absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`}
                >
                  <span className='w-max'>{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='content-box'>
            <form onSubmit={handleSubmit(onSubmit)}>
              {stepNumber === 0 && (
                <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                      <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                        Enter Your Contact Information
                      </h4>
                    </div>
                    <InputGroup
                      label='Mobile Number'
                      type='text'
                      prepend='+'
                      placeholder='Mobile Number'
                      name='mobile'
                      error={errors.mobile}
                      register={register}
                    />
                    <Textarea
                      label='Business Description'
                      placeholder='Describe your business'
                      name='businessDescription'
                      error={errors.businessDescription}
                      register={register}
                    />
                  </div>
                </div>
              )}

              {stepNumber === 1 && (
                <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                      <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                        Enter Your Company Profile
                      </h4>
                    </div>
                    <Textinput
                      label='Company Name'
                      type='text'
                      placeholder='Company Name'
                      name='companyName'
                      error={errors.companyName}
                      register={register}
                    />
                    <Textarea
                      label='Short Description'
                      placeholder='Elevator Pitch'
                      name='shortDescription'
                      error={errors.shortDescription}
                      register={register}
                    />
                    <Textinput
                      label='Date of Incorporation'
                      type='date'
                      placeholder='Date of Incorporation'
                      name='incorporationDate'
                      error={errors.incorporationDate}
                      register={register}
                    />
                    <Textinput
                      label='Country'
                      type='text'
                      placeholder='Country'
                      name='country'
                      error={errors.country}
                      register={register}
                    />
                    <Textinput
                      label='State, City'
                      type='text'
                      placeholder='State, City'
                      name='stateCity'
                      error={errors.stateCity}
                      register={register}
                    />
                    <Textinput
                      label='Office Address'
                      type='text'
                      placeholder='Office Address'
                      name='officeAddress'
                      error={errors.officeAddress}
                      register={register}
                    />
                    <Textinput
                      label='Pin Code'
                      type='text'
                      placeholder='Pin Code'
                      name='pinCode'
                      error={errors.pinCode}
                      register={register}
                    />
                    <Textinput
                      label='Company Website'
                      type='url'
                      placeholder='Company Website'
                      name='companyWebsite'
                      error={errors.companyWebsite}
                      register={register}
                    />
                    <Textinput
                      label='LinkedIn Profile'
                      type='url'
                      placeholder='LinkedIn Profile'
                      name='linkedinProfile'
                      error={errors.linkedinProfile}
                      register={register}
                    />
                  </div>
                </div>
              )}

              {stepNumber === 2 && (
                <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                      <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                        Enter Founder and Educational Information
                      </h4>
                    </div>
                    <Textinput
                      label='Full Name'
                      type='text'
                      placeholder='Full Name'
                      name='founderName'
                      error={errors.founderName}
                      register={register}
                    />
                    <Textinput
                      label='Email'
                      type='email'
                      placeholder='Email'
                      name='founderEmail'
                      error={errors.founderEmail}
                      register={register}
                    />
                    <Textinput
                      label='Mobile Number'
                      type='text'
                      placeholder='Mobile Number'
                      name='founderMobile'
                      error={errors.founderMobile}
                      register={register}
                    />
                    <Textinput
                      label='LinkedIn Profile'
                      type='url'
                      placeholder='LinkedIn Profile'
                      name='founderLinkedin'
                      error={errors.founderLinkedin}
                      register={register}
                    />
                    <InputGroup
                      label='Any other Co-Founder?'
                      type='checkbox'
                      name='cofounder'
                      register={register}
                    />
                    {watch('cofounder') && (
                      <>
                        <Textinput
                          label='Co-Founder Full Name'
                          type='text'
                          placeholder='Co-Founder Full Name'
                          name='cofounderName'
                          error={errors.cofounderName}
                          register={register}
                        />
                        <Textinput
                          label='Co-Founder Email'
                          type='email'
                          placeholder='Co-Founder Email'
                          name='cofounderEmail'
                          error={errors.cofounderEmail}
                          register={register}
                        />
                        <Textinput
                          label='Co-Founder Mobile Number'
                          type='text'
                          placeholder='Co-Founder Mobile Number'
                          name='cofounderMobile'
                          error={errors.cofounderMobile}
                          register={register}
                        />
                        <Textinput
                          label='Co-Founder LinkedIn Profile'
                          type='url'
                          placeholder='Co-Founder LinkedIn Profile'
                          name='cofounderLinkedin'
                          error={errors.cofounderLinkedin}
                          register={register}
                        />
                      </>
                    )}
                    <Textinput
                      label='Degree Name'
                      type='text'
                      placeholder='Degree Name'
                      name='degreeName'
                      error={errors.degreeName}
                      register={register}
                    />
                    <Textinput
                      label='College Name'
                      type='text'
                      placeholder='College Name'
                      name='collegeName'
                      error={errors.collegeName}
                      register={register}
                    />
                    <Textinput
                      label='Year of Graduation'
                      type='date'
                      placeholder='Year of Graduation'
                      name='graduationYear'
                      error={errors.graduationYear}
                      register={register}
                    />
                  </div>
                </div>
              )}

              {stepNumber === 3 && (
                <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                      <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                        Enter Business Details
                      </h4>
                    </div>
                    <Textinput
                      label='Industry or Sector'
                      type='text'
                      placeholder='Industry or Sector'
                      name='industrySector'
                      error={errors.industrySector}
                      register={register}
                    />
                    <Textinput
                      label='Current Stage'
                      type='text'
                      placeholder='Current Stage'
                      name='currentStage'
                      error={errors.currentStage}
                      register={register}
                    />
                    <Textarea
                      label='Current Traction'
                      placeholder='Current Traction'
                      name='currentTraction'
                      error={errors.currentTraction}
                      register={register}
                    />
                    <Textinput
                      label='Target Audience'
                      type='text'
                      placeholder='Target Audience'
                      name='targetAudience'
                      error={errors.targetAudience}
                      register={register}
                    />
                    <Textinput
                      label='Team Size'
                      type='number'
                      placeholder='Team Size'
                      name='teamSize'
                      error={errors.teamSize}
                      register={register}
                    />
                    <Textarea
                      label='USP/MOAT'
                      placeholder='USP/MOAT'
                      name='uspMoat'
                      error={errors.uspMoat}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Certificate of Incorporation'
                      type='file'
                      name='certificateOfIncorporation'
                      error={errors.certificateOfIncorporation}
                      register={register}
                    />
                    <InputGroup
                      label='Upload GST Certificate'
                      type='file'
                      name='gstCertificate'
                      error={errors.gstCertificate}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Startup India Certificate'
                      type='file'
                      name='startupIndiaCertificate'
                      error={errors.startupIndiaCertificate}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Due Diligence Report'
                      type='file'
                      name='dueDiligenceReport'
                      error={errors.dueDiligenceReport}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Business Valuation Report'
                      type='file'
                      name='businessValuationReport'
                      error={errors.businessValuationReport}
                      register={register}
                    />
                    <InputGroup
                      label='Upload MIS'
                      type='file'
                      name='mis'
                      error={errors.mis}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Pitch Deck'
                      type='file'
                      name='pitchDeck'
                      error={errors.pitchDeck}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Video Pitch'
                      type='file'
                      name='videoPitch'
                      error={errors.videoPitch}
                      register={register}
                    />
                  </div>
                </div>
              )}

              {stepNumber === 4 && (
                <div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10'>
                    <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                      <h4 className='text-base text-slate-800 dark:text-slate-300 my-6'>
                        Enter Funding Information
                      </h4>
                    </div>
                    <InputGroup
                      label='Any Previous Funding?'
                      type='checkbox'
                      name='previousFunding'
                      register={register}
                    />
                    <Textinput
                      label='Total Funding Ask'
                      type='number'
                      placeholder='Total Funding Ask'
                      name='totalFundingAsk'
                      error={errors.totalFundingAsk}
                      register={register}
                    />
                    <Textinput
                      label='Amount Committed So Far'
                      type='number'
                      placeholder='Amount Committed So Far'
                      name='amountCommitted'
                      error={errors.amountCommitted}
                      register={register}
                    />
                    <InputGroup
                      label='Upload Current Cap Table'
                      type='file'
                      name='currentCapTable'
                      error={errors.currentCapTable}
                      register={register}
                    />
                    <Textinput
                      label='Any Government Grants'
                      type='text'
                      placeholder='Any Government Grants'
                      name='governmentGrants'
                      error={errors.governmentGrants}
                      register={register}
                    />
                    <Textarea
                      label='Equity Split Among the Founders'
                      placeholder='Equity Split Among the Founders'
                      name='equitySplit'
                      error={errors.equitySplit}
                      register={register}
                    />
                    <Textarea
                      label='Fund Utilization Summary'
                      placeholder='Fund Utilization Summary'
                      name='fundUtilization'
                      error={errors.fundUtilization}
                      register={register}
                    />
                    <Textinput
                      label='ARR'
                      type='number'
                      placeholder='Annual Recurring Revenue (ARR)'
                      name='arr'
                      error={errors.arr}
                      register={register}
                    />
                    <Textinput
                      label='MRR'
                      type='number'
                      placeholder='Monthly Recurring Revenue (MRR)'
                      name='mrr'
                      error={errors.mrr}
                      register={register}
                    />
                  </div>
                </div>
              )}

              <div
                className={`${
                  stepNumber > 0 ? 'flex justify-between' : ' text-right'
                } mt-10`}
              >
                {stepNumber !== 0 && (
                  <Button
                    text='Previous'
                    className='btn-dark'
                    onClick={handlePrev}
                  />
                )}
                <Button
                  text={stepNumber !== steps.length - 1 ? 'Next' : 'Submit'}
                  className='btn-dark'
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormWizard;
