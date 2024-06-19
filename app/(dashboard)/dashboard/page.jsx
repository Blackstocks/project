'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Card_D from '@/components/card_dashboard';
import Loading from '@/components/Loading';
import useUserDetails from '@/hooks/useUserDetails';

const Ecommerce = () => {
  const { user, details, loading } = useUserDetails();
  const [locked, setLocked] = useState({
    availStartupIndiaCertificate: true,
    gstCertificate: true, // Example: GST Certificate is locked by default
    intellectualProperty: true,
    virtualOfficeSupport: true,
    capTableManagement: true,
    diyPitchDeck: true,
    financialInsights: true,
    connectWithIncubators: true,
    debtFundraising: true,
    equityFundraising: true,
    ma: true,
    valuateMyBusiness: true,
    investmentBankingSupport: true,
    fundraisingSecondaryShares: true,
    contractsAndAgreements: true,
    reviewMyTermsheet: true,
    reviewMySHA: true,
    globalDealflow: true,
    valuateStartup: true,
    createSyndicate: true,
    joinSyndicate: true,
    followInvestment: true,
    sellShares: true,
    exitStrategy: true,
    dueDiligenceSupport: true,
    shaSupport: true,
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {details?.type === 'startup' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card title='Investment Readiness'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                  <Card_D
                    title='Avail Startup India Certificate'
                    text='download'
                    href='/profile'
                    isLocked={locked.availStartupIndiaCertificate}
                  />
                  <Card_D
                    title='GST Certificate'
                    text='download'
                    href='/profile'
                    isLocked={locked.gstCertificate}
                  />
                  <Card_D
                    title='Intellectual Property'
                    text='Learn More'
                    href='/profile'
                    isLocked={locked.intellectualProperty}
                  />
                  <Card_D
                    title='Virtual Office Support'
                    text='Learn More'
                    href='/profile'
                    isLocked={locked.virtualOfficeSupport}
                  />
                </div>
                <Card_D
                  title='CapTable Management'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.capTableManagement}
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card>
              <Card_D
                title='DIY Pitch Deck'
                text='Learn More'
                href='/profile'
                isLocked={locked.diyPitchDeck}
              />
              <Card_D
                title='Financial Insights'
                text='Learn More'
                href='/profile'
                isLocked={locked.financialInsights}
              />
              <Card_D
                title='Connect with Incubators'
                text='Learn More'
                href='/profile'
                isLocked={locked.connectWithIncubators}
              />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Fundraising'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <Card_D
                  title='Debt Fundraising'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.debtFundraising}
                />
                <Card_D
                  title='Equity Fundraising'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.equityFundraising}
                />
                <Card_D
                  title='M&A'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.ma}
                />
                <Card_D
                  title='Valuate My Business'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.valuateMyBusiness}
                />
                <Card_D
                  title='Investment Banking Support'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.investmentBankingSupport}
                />
                <Card_D
                  title='Fundraising through Secondary Shares'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.fundraisingSecondaryShares}
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Legal Help Desk'>
              <Card_D
                title='Contracts and Agreements'
                text='Learn More'
                href='/profile'
                isLocked={locked.contractsAndAgreements}
              />
              <Card_D
                title='Review my Termsheet'
                text='Learn More'
                href='/profile'
                isLocked={locked.reviewMyTermsheet}
              />
              <Card_D
                title='Review my SHA'
                text='Learn More'
                href='/profile'
                isLocked={locked.reviewMySHA}
              />
            </Card>
          </div>
        </div>
      )}
      {details?.type === 'investor' && (
        <div className='grid grid-cols-12 gap-5'>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12'>
            <Card>
              <div className='grid md:grid-cols-1 grid-cols-1 gap-5'>
                <Card_D
                  title='Global Dealflow'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.globalDealflow}
                />
                <Card_D
                  title='Valuate a Startup'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.valuateStartup}
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12 gap-5'>
            <Card title='Syndicate'>
              <Card_D
                title='Create a Syndicate'
                text='Learn More'
                href='/profile'
                isLocked={locked.createSyndicate}
              />
              <Card_D
                title='Join a Syndicate'
                text='Learn More'
                href='/profile'
                isLocked={locked.joinSyndicate}
              />
            </Card>
          </div>
          <div className='2xl:col-span-8 lg:col-span-7 col-span-12 gap-5'>
            <Card title='Portfolio Management'>
              <div className='grid md:grid-cols-2 grid-cols-2 gap-5'>
                <Card_D
                  title='Follow your Investment'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.followInvestment}
                />
                <Card_D
                  title='Sell my Shares (Secondary Shares)'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.sellShares}
                />
                <Card_D
                  title='Exit Strategy'
                  text='Learn More'
                  href='/profile'
                  isLocked={locked.exitStrategy}
                />
              </div>
            </Card>
          </div>
          <div className='2xl:col-span-4 lg:col-span-5 col-span-12'>
            <Card title='Post Term Sheet' titleClass='text-center'>
              <Card_D
                title='Valuate a Startup'
                text='Learn More'
                href='/profile'
                isLocked={locked.valuateStartup}
              />
              <Card_D
                title='Due-Diligence Support'
                text='Learn More'
                href='/profile'
                isLocked={locked.dueDiligenceSupport}
              />
              <Card_D
                title='SHA Support'
                text='Learn More'
                href='/profile'
                isLocked={locked.shaSupport}
              />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
