import Link from "next/link";

export default function Impact() {
  return (
    <div>
      <div className="w-full h-[50px] lg:h-[68px]" />
      <section id="campaignIntro">
        <div className="relative bg-[url('../images/unicef-child.jpg')] bg-no-repeat bg-center bg-cover px-4 py-16 text-white">
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative z-50 max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="bg-black/75 p-4 pt-6 rounded-md md:w-[60%]">
                <div className="text-xl sm:text-2xl lg:text-5xl font-semibold mb-7">
                  <div className="mb-1 sm:mb-3 lg:mb-8 flex items-center gap-3">
                    <p className="bg-white text-black px-3 leading-none">
                      TAKE ACTION:
                    </p>
                    <span className="text-white">JOIN THE</span>
                  </div>
                  <div>
                    <span>#CARE</span>{" "}
                    <span className="text-primary">COLLECTIVE</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                    It is estimated that there are 35 million children in India
                    who are in need of care and protection.
                  </p>
                  <p>
                    It IS a large number. But, at Make A Difference, we believe
                    that the way to solve this problem is to build a community
                    around these children. A community of those who care and
                    want to contribute in whichever way then can to help build
                    long-term solutions to this problem.
                  </p>
                  <p>
                    Imagine what a collective of 1 million doers and believers
                    will be able to do. We can. And we can&#39;t wait to get
                    started!
                  </p>
                </div>
              </div>
              <div className="text-white flex flex-col items-center lg:items-stretch gap-4">
                <div className="p-4 border border-white rounded-md w-fit">
                  <div className="text-5xl lg:text-6xl font-semibold">
                    50000+
                  </div>
                  <div>MEMBERS TILL NOW</div>
                </div>
                <div className="bg-primary lg:text-xl font-semibold text-white p-2">
                  JOIN OUR COMMUNITY --&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-primary text-black px-4 lg:px-20 py-12 flex flex-col justify-center">
                <div className="mb-2">
                  <div className="flex items-center gap-1 text-lg lg:text-2xl font-semibold mb-7">
                    <p className="bg-black text-white px-2 leading-tight">
                      INDIVIDUAL
                    </p>
                    <span> GIVING</span>
                  </div>
                  <p className="text-[15px] lg:text-xl font-medium">
                    YOUR MONEY, YOUR IMPACT
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-sm lg:text-lg">
                    Contribute monthly or one time to finance critical services
                    for children in urgent need of care and protection. MAD
                    follows all financial regulations set forth f or non-profits
                    by the Government of India, and is audited annually.
                  </p>
                </div>
                <div>
                  <Link
                    className="py-[6px] px-12 bg-black text-sm lg:text-lg text-white"
                    href="/"
                  >
                    DONATE --&gt;
                  </Link>
                </div>
              </div>
              <div className="relative lg:w-1/2 bg-[url('../images/campaign-child3.jpg')] bg-cover bg-no-repeat bg-center lg:px-20 text-white px-4 py-12">
                <div className="absolute inset-0 bg-black/80" />
                <div className="flex flex-col justify-center items-center relative z-50 sm:w-[60%] lg:w-full">
                  <div className="bg-black/75 rounded-md p-4 pt-6 py-8">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-lg lg:text-2xl font-semibold mb-5">
                        <span>ANNUAL</span>
                        <p className="bg-primary px-2 leading-tight">REPORT</p>
                      </div>
                      <div className="text-[15px] lg:text-xl font-medium mb-3">
                        A LOOK BACK AT OUR WORK SO FAR
                      </div>
                      <p className="text-sm lg:text-lg">
                        Explore in depth our purpose, vision mission, strategies
                        and our long term roadmap to really making a dent in the
                        universe for vulnerable children in India.
                      </p>
                    </div>
                  </div>
                  <Link
                    className="bg-primary text-black text-sm lg:text-base self-start px-10 py-1"
                    href="/"
                  >
                    DOWNLOAD --&gt;
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-[url('../images/unicef-child2.jpg')] bg-no-repeat bg-center bg-cover text-white px-4 lg:px-20 py-12 relative">
                <div className="absolute inset-0 bg-black/80" />
                <div className="bg-black/75 rounded-md p-4 pt-6 py-8 relative z-50 flex flex-col xl:flex-row items-start gap-6 sm:w-[60%] lg:w-full">
                  <div>
                    <div className="flex items-center gap-2 text-lg lg:text-2xl font-semibold mb-5">
                      <span>OUR</span>
                      <p className="bg-primary px-2 leading-tight">
                        FINANCIALS
                      </p>
                    </div>
                    <div className="mb-3">FOR EVERY 100 INR, WE SPEND</div>
                    <div className="flex gap-6">
                      <div className="circle-wrap">
                        <div className="circle circle1">
                          <div className="inside-circle"> PROGRAMS </div>
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                        </div>
                      </div>
                      <div className="circle-wrap">
                        <div className="circle circle2">
                          <div className="inside-circle"> FUNDRAISING</div>
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                        </div>
                      </div>
                      <div className="circle-wrap">
                        <div className="circle circle3">
                          <div className="inside-circle"> OPERATIONS </div>
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm lg:text-lg">
                      Our volunteer based model is highly efficient in use of
                      funds. Our total operating cost is estimated to be less
                      than 1/10th that of any equivalent sized entity in India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="-order-10 lg:order-10 lg:w-1/2 bg-black/95 text-white px-4 lg:px-20 py-12 flex flex-col justify-center">
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-lg lg:text-2xl font-semibold mb-7">
                    <p className="bg-primary text-black px-2 leading-tight">
                      CORPORATE
                    </p>
                    <span> GIVING</span>
                  </div>
                  <p className="text-[15px] lg:text-xl font-medium">
                    YOUR MONEY, YOUR IMPACT
                  </p>
                </div>
                <div className="mb-5">
                  <p className="text-sm lg:text-lg">
                    Contribute monthly or one time to finance critical services
                    for children in urgent need of care and protection. MAD
                    follows all financial regulations set forth f or non-profits
                    by the Government of India, and is audited annually.
                  </p>
                </div>
                <Link
                  className="bg-primary text-black text-sm lg:text-base self-start px-10 py-1"
                  href="/"
                >
                  KNOW MORE --&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
