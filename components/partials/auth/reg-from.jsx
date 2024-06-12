import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Textinput from '@/components/ui/Textinput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseclient'; // Import Supabase client

const schema = yup
  .object({
    name: yup.string().required('Name is Required'),
    email: yup.string().email('Invalid email').required('Email is Required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(20, "Password shouldn't be more than 20 characters")
      .required('Please enter password'),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const RegForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const { data: signUpData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error.message);
      setIsSubmitting(false);
    } else if (signUpData?.user) {
      const { error: insertError } = await supabase
        .from('profiles')
        .insert([
          { id: signUpData.user.id, name: data.name, email: data.email },
        ]);

      if (insertError) {
        toast.error(insertError.message);
        setIsSubmitting(false);
      } else {
        toast.success('Account created successfully!');
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <Textinput
        name='name'
        label='Name'
        type='text'
        placeholder='Enter your name'
        register={register}
        error={errors.name}
      />
      <Textinput
        name='email'
        label='Email'
        type='email'
        placeholder='Enter your email'
        register={register}
        error={errors.email}
      />
      <Textinput
        name='password'
        label='Password'
        type='password'
        placeholder='Enter your password'
        register={register}
        error={errors.password}
      />
      <Textinput
        name='confirmpassword'
        label='Confirm Password'
        type='password'
        placeholder='Confirm your password'
        register={register}
        error={errors.confirmpassword}
      />

      <button
        className='btn btn-dark block w-full text-center'
        type='submit'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Create an account'}
      </button>
    </form>
  );
};

export default RegForm;
