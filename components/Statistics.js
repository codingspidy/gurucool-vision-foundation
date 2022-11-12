import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section id="statistics">
      <div className="bg-light-primary">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 sm:py-28">
          <div className="flex gap-6 sm:gap-32">
            <div className="flex flex-col justify-between lg:flex-row gap-12 lg:gap-32 w-[50%]">
              <div className="flex flex-col">
                <div className="text-xl lg:text-4xl font-semibold relative">
                  <span>$</span>
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={75}
                  />
                  <span className="absolute top-0 left-12 lg:left-[75px]">
                    billion
                  </span>
                </div>
                <div className="text-xs lg:text-base max-w-[200px] sm:max-w-none">
                  24h trading volume on Binance exchange
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-4xl font-semibold relative">
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={350}
                  />
                  <span className="absolute top-0 left-[45px] lg:left-[70px]">
                    +
                  </span>
                </div>
                <div className="text-xs lg:text-base">
                  Cryptocurrencies listed
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:flex-row gap-12 lg:gap-32 w-[50%]">
              <div className="flex flex-col">
                <div className="text-xl lg:text-4xl font-semibold relative">
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    end={120}
                  />
                  <span className="absolute top-0 left-[44px] lg:left-16">
                    million
                  </span>
                </div>
                <div className="text-xs lg:text-base">Registered users</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-4xl font-semibold relative">
                  {"<"}
                  <CountUp
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    decimals={1}
                    end={0.9}
                  />
                  <span className="absolute top-0 left-[54px] lg:left-[80px]">
                    %
                  </span>
                </div>
                <div className="text-xs lg:text-base">
                  Lowest transaction fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
