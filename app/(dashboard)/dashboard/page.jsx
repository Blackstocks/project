"use client";

import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Card_D from "@/components/card_dashboard";
import Loading from "@/components/Loading";
import useUserDetails from "@/hooks/useUserDetails";

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
    <div className="w-full">
      {details?.type === "startup" && (
        <div className="w-full border">
          <section class="py-8 w-full">
            <div class="container px-4 mx-auto">
              <div class="grid grid-cols-3 ">
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\Invest.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        Investment Readiness
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Achieve investment readiness with our comprehensive
                        tools for incorporation, certification, IP, and cap
                        table management.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\pitchdeck.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        DIY Pitch Deck
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Create your own pitch deck effortlessly with our DIY
                        tool, equipped with templates and customization options.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\financial.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        Financial Insights
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Gain comprehensive financial insights with our advanced
                        analytics tool, providing real-time data and trends.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="py-8 w-full">
            <div class="container px-4 mx-auto">
              <div class="grid grid-cols-3 ">
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\fund.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        Fundraising
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Streamline your fund raising with our platform, offering
                        tailored solutions and connections to potential
                        investors.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\legal.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        Legal Help Desk
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Access expert legal assistance with our help desk,
                        offering guidance on contracts, compliance, and legal
                        documentation.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="p-4 bg-white rounded">
                    <div class="relative h-40 w-full mb-4">
                      <img
                        class="w-full h-full object-cover rounded"
                        src="\assets\images\dashboard\connect.jpg"
                        alt=""
                      />
                    </div>
                    <div class="flex mb-6 justify-center items-center">
                      <h1
                        class="text-sm font-medium"
                        style={{
                          fontSize: "large",
                          textAlign: "center",
                        }}
                      >
                        Connect with Incubators
                      </h1>
                    </div>
                    <div class="flex mb-2 justify-between items-center">
                      <h3 class="text-xs font-medium">
                        Connect with top incubators through our platform,
                        fostering growth and providing valuable mentorship and
                        resources.
                      </h3>
                    </div>
                    <div
                      class="flex items-center justify-start border-t border-gray-50 pt-4"
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a
                        class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white transition duration-200"
                        href="#"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {details?.type === "investor" && (
        <div className="grid grid-cols-12 gap-5">
          <div className="2xl:col-span-8 lg:col-span-7 col-span-12">
            <Card>
              <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
                <Card_D
                  title="Global Dealflow"
                  text="Learn More"
                  href="/profile"
                  isLocked={locked.globalDealflow}
                />
                <Card_D
                  title="Valuate a Startup"
                  text="Learn More"
                  href="/profile"
                  isLocked={locked.valuateStartup}
                />
              </div>
            </Card>
          </div>
          <div className="2xl:col-span-4 lg:col-span-5 col-span-12 gap-5">
            <Card title="Syndicate">
              <Card_D
                title="Create a Syndicate"
                text="Learn More"
                href="/profile"
                isLocked={locked.createSyndicate}
              />
              <Card_D
                title="Join a Syndicate"
                text="Learn More"
                href="/profile"
                isLocked={locked.joinSyndicate}
              />
            </Card>
          </div>
          <div className="2xl:col-span-8 lg:col-span-7 col-span-12 gap-5">
            <Card title="Portfolio Management">
              <div className="grid md:grid-cols-2 grid-cols-2 gap-5">
                <Card_D
                  title="Follow your Investment"
                  text="Learn More"
                  href="/profile"
                  isLocked={locked.followInvestment}
                />
                <Card_D
                  title="Sell my Shares (Secondary Shares)"
                  text="Learn More"
                  href="/profile"
                  isLocked={locked.sellShares}
                />
                <Card_D
                  title="Exit Strategy"
                  text="Learn More"
                  href="/profile"
                  isLocked={locked.exitStrategy}
                />
              </div>
            </Card>
          </div>
          <div className="2xl:col-span-4 lg:col-span-5 col-span-12">
            <Card title="Post Term Sheet" titleClass="text-center">
              <Card_D
                title="Valuate a Startup"
                text="Learn More"
                href="/profile"
                isLocked={locked.valuateStartup}
              />
              <Card_D
                title="Due-Diligence Support"
                text="Learn More"
                href="/profile"
                isLocked={locked.dueDiligenceSupport}
              />
              <Card_D
                title="SHA Support"
                text="Learn More"
                href="/profile"
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
