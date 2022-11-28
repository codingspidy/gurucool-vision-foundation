import CampaignSlider from "../components/CampaignSlider";

export default function Work() {
  return (
    <>
      {/* <div className="h-[50px] lg:h-[68px]" /> */}
      <div className="relative h-screen w-full pt-48 bg-[url('../images/work-intro3.jpg')] bg-no-repeat bg-center bg-cover text-white">
        <div className="absolute inset-0 overlay-gradient-r" />
        <div className="absolute inset-0 overlay-gradient-t" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 overlay-gradient-l" />
        <div className="relative px-4 z-50 flex flex-col gap-10 items-center justify-center max-w-screen-xl mx-auto">
          <div className="play">
            <button
              id="playBtn"
              className="border-2 border-white w-20 h-20 rounded-full"
            >
              <i className="fas fa-play text-white text-3xl"></i>
            </button>
          </div>
          <div>
            <div className="text-2xl lg:text-5xl font-semibold flex items-center flex-wrap gap-2 mb-6">
              IT&#39;S
              <p className="text-black bg-primary leading-none px-2">#NEVERTOOLATE</p> TO MAKE A DIFFERENCE
            </div>
            <p className="text-base lg:text-xl mb-10">
              Watch this powerful, interactive video of the life of a child in
              need of care and protection, and experience how taking action can
              transform outcomes.
            </p>
            <div className="flex items-center gap-3">
            <div className="text-base lg:text-xl">Share</div>
            <div className="w-12 h-12 rounded-full bg-blue-700" />
            <div className="w-12 h-12 rounded-full bg-blue-500" />
            <div className="w-12 h-12 rounded-full bg-green-500" />
          </div>
          </div>
        </div>
      </div>
      <CampaignSlider />
    </>
  );
}
