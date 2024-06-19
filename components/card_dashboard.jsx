import React from 'react';
import Link from 'next/link';

const Card_D = ({ title, text }) => {
  return (
    <div className='bg-slate-50  dark:bg-slate-900 p-4 rounded text-center'>
      {/* <div className='h-12 w-12 rounded-full mb-4 mx-auto'>
        <img src={item.img} alt="" className="w-full h-full rounded-full" />
      </div> */}
      <span className='text-slate-600 dark:text-slate-300 font-semibold mb-4 block'>
        {title}
      </span>
      <Link
        href='#'
        className='btn max-w-[10rem] mx-auto  btn-secondary dark:bg-slate-1000 dark:hover:bg-slate-600 block w-full text-center btn-sm'
      >
        {text}
      </Link>
    </div>
  );
};

export default Card_D;
