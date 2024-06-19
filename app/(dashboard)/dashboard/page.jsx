'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import ImageBlock2 from '@/components/partials/widget/block/image-block-2';
import GroupChart2 from '@/components/partials/widget/chart/group-chart-2';
import RevenueBarChart from '@/components/partials/widget/chart/revenue-bar-chart';
import ProfitChart from '@/components/partials/widget/chart/profit-chart';
import OrderChart from '@/components/partials/widget/chart/order-chart';
import EarningChart from '@/components/partials/widget/chart/earning-chart';
import SelectMonth from '@/components/partials/SelectMonth';
import Customer from '@/components/partials/widget/customer';
import RecentOrderTable from '@/components/partials/table/recentOrder-table';
import BasicArea from '@/components/partials/chart/appex-chart/BasicArea';
import VisitorRadar from '@/components/partials/widget/chart/visitor-radar';
import MostSales2 from '@/components/partials/widget/most-sales2';
import Products from '@/components/partials/widget/products';
import HomeBredCurbs from '@/components/partials/HomeBredCurbs';
import Card_D from '@/components/card_dashboard';
import Loading from '@/components/Loading';
import useUserDetails from '@/hooks/useUserDetails';

const Ecommerce = () => {
  const { user, details, loading } = useUserDetails();
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {details?.type === 'startup' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card title='Investment Readines'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                  {/* <OrderChart /> */}
                  <Card_D
                    title='Avail Startup India Certificate'
                    text='download'
                  />
                  <Card_D title='GST Certificate' text='download' />
                  <Card_D title='Intellectual Property' text='Learn More' />
                  <Card_D title='Virtual Office Support' text='Learn More' />
                </div>
                <Card_D title='CapTable Management' text='Learn More' />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card>
              <Card_D title='DIY Pitch Deck' text='Learn More' />
              <Card_D title='Financial Insights' text='Learn More' />
              <Card_D title='Connect with Incubators' text='Learn More' />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Fundraising'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                {/* <OrderChart /> */}
                <Card_D title='Debt Fundraising' text='Learn More' />
                <Card_D title='Equity Fundraising' text='Learn More' />
                <Card_D title='M&A' text='Learn More' />

                <Card_D title='Valuate My Business' text='Learn More' />
                <Card_D title='Investment Banking Support' text='Learn More' />
                <Card_D
                  title='Fundraising through secondary shares'
                  text='Learn More'
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Legal Help Desk'>
              <Card_D title='Contracts and Agreements' text='Learn More' />
              <Card_D title='Review my Termsheet' text='Learn More' />
              <Card_D title='Review my SHA' text='Learn More' />
            </Card>
          </div>
        </div>
      )}
      {details?.type === 'investor' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card>
              <div className='grid md:grid-cols-1 grid-cols-1 gap-5'>
                <Card_D title='Global Dealflow' text='Learn More' />
                <Card_D title='Valuate a startup' text='Learn More' />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card title='Syndicate'>
              <Card_D title='Create a Syndicate' text='Learn More' />
              <Card_D title='Join a syndicate' text='Learn More' />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Portfolio Management'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <Card_D title='Follow your investment' text='Learn More' />
                <Card_D
                  title='Sell my shares (Secondary Shares)'
                  text='Learn More'
                />
                <Card_D title='Exit Strategy' text='Learn More' />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Post Term Sheet' titleClass='text-center'>
              <Card_D title='Valuate a startup' text='Learn More' />
              <Card_D title='Due-Diligence Support' text='Learn More' />
              <Card_D title='SHA Support' text='Learn More' />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
