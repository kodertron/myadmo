import { Button, HomeNav } from '@/components'

const contents = {
  headerTitle: "Share & Earn Along the Way",
  headerHighlight: "Connect",
  headerDescription: "Every interaction brings you closer to value—whether it’s a simple like, a thoughtful comment, or a deep discussion that sparks new ideas.",
  headerButtons: [
    {
      icon: "/images/app-store.png",
      subTitle: "Download on the",
      title: "App Store"
    },
    {
      icon: "/images/googlePlay.webp",
      subTitle: "GET IT ON",
      title: "Google Play"
    },
  ],

  headerImages: [
    "/images/avatar-1.jpg",
    "/images/avatar-2.png",
    "/images/avatar-3.png",
    "/images/avatar-4.png",
    "/images/avatar-5.png",
    "/images/avatar-6.png",
    "/images/globe.jpg",
  ]
};

const Background = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 z-0">
      <div className="h-[100px] w-[100px] shape-2 bg-blue-500 absolute top-0 left-0"></div>
      <div className="h-[100px] w-[100px] shape-2 bg-blue-500 absolute top-0 right-0 flip"></div>
      <div className="h-[100px] w-[100px] shape-2 bg-slate-900 absolute bottom-0 right-0 flip-flip"></div>
      <div className="h-[100px] w-[100px] shape-2 bg-slate-900 absolute bottom-0 left-0 reverse-flip"></div>
      <div className="h-[10px] w-full bg-slate-900 absolute bottom-0 left-0"></div>
      <div className="h-[10px] w-full bg-blue-500 absolute top-0 left-0"></div>
      <div className="h-[88%] w-[10px] bg-blue-500 absolute top-0 left-0 max-[600px]:hidden"></div>
      <div className="h-[88%] w-[10px] bg-slate-900 absolute bottom-0 right-0 max-[600px]:hidden"></div>
    </div>
  );
}


const Home = () => {
  return (
    <div className='dark:bg-slate-950 dark:text-white duration-300 transition-all'>
      <HomeNav />
      <header className='relative'>

        <div className="fixed top-[90%] left-1/2 -translate-x-1/2 h-[400vw] w-[400vw] bg-slate-900 rounded-full"></div>
        <Background />


        <div className="h-screen flex justify-center items-center z-10">

          <div className="flex flex-col justify-center items-center relative max-[1124px]:scale-75">

            {/* images in circles */}

              <div className="absolute -top-20 -right-20 max-[816px]:right-0 h-[70px] w-[70px] rounded-full overflow-hidden bg-blue-500 border-4 border-blue-500">
                <img src={contents.headerImages[0]} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-40 max-[816px]:-right-20 max-[516px]:-right-12 max-[390px]:hidden h-[70px] w-[70px] rounded-full overflow-hidden bg-blue-500 border-4 border-blue-500">
                <img src={contents.headerImages[1]} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-20 -right-20 max-[816px]:right-0 h-[70px] w-[70px] rounded-full overflow-hidden bg-blue-500 border-4 border-blue-500">
                <img src={contents.headerImages[2]} alt="" className="h-full w-full object-cover" />
              </div>

              <div className="absolute -top-20 -left-20 max-[816px]:left-0 h-[70px] w-[70px] rounded-full overflow-hidden bg-blue-500 border-4 border-blue-500">
                <img src={contents.headerImages[3]} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-40 max-[816px]:-left-20 max-[516px]:-left-12 max-[390px]:hidden h-[70px] w-[70px] rounded-full overflow-hidden bg-blue-500 border-4 border-blue-500">
                <img src={contents.headerImages[4]} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-20 -left-20 max-[816px]:-left-0 h-[70px] w-[70px] rounded-full overflow-hidden bg-slate-900 border-4 border-blue-500">
                <img src={contents.headerImages[5]} alt="" className="h-full w-full object-cover" />
              </div>

              
            {/* ***************** */}


            <h1 className="text-6xl max-[516px]:text-5xl  font-black text-center text-slate-900 dark:text-white max-w-[700px] font-2 relative z-10">
              <span className="text-blue-500">{contents.headerHighlight}</span>, {contents.headerTitle.replace(contents.headerHighlight, '')}
            </h1>

            <p className="text text-center text-slate-900 dark:text-white max-w-[630px] my-3 relative z-10">
              {contents.headerDescription}
            </p>

            <div className="flex items-center relative z-10">
              {contents.headerButtons.map( btn => 
                <Button.IconTwoText icon={btn.icon} textOne={btn.subTitle} textTwo={btn.title} extra="w-[208px] scale-90"/>
              )}
            </div>
          </div>

        </div>


      </header>
    </div>
  )
}

export default Home