import Image from "next/image";

import { TABS, TEAM } from "@/utils/constant";
import BitcoinMain from "@/components/BitcoinMain";

import leftarrow from "../public/images/leftarrow.svg";
import upArrow from "../public/images/uparrow.svg"
import char1 from "../public/images/character1.svg";
import tableInfo from "../public/images/table.svg";
import arrow from "../public/images/arrow.svg";
import newsIcon from "../public/images/newsIcon.svg"
import stockIcon from "../public/images/stockIcon.svg"
import corousalBtn from "../public/images/corousalBtn.svg"
import profitImg from "../public/images/profitImg.svg"
import taxImg from "../public/images/taxImg.svg"
import tokenomicsImg from "../public/images/tokenomicsImg.svg"
import info from "../public/images/info.svg"

export default function Home() {
  return (
    <main className="flex h-[4399px] bg-[#EFF2F5] flex-col items-center justify-between">
      <div className="w-[80%]">
        <div className="flex gap-2 font-light py-4">
          <span className="text-[#49616E]">Cryptocurrency</span>{" "}
          <Image src={leftarrow}></Image> Bitcoin
        </div>

        <section className="flex w-full gap-6">

          {/* Left section */}
          <div className="flex flex-col w-[65%] gap-4 h-screen">
            
            <BitcoinMain/>

            <div className="flex gap-6 py-4 h-[52px] border-b-[1px]">
              <div className="text-[#0141CF] pb-[32px] border-b-4 border-[#0052FE]">Overview</div>
              {TABS.map((items) => (
                <div>{items}</div>
              ))}
            </div>

            {/* Performance */}
            <div className="bg-white w-full h-[700px] px-8 py-4 text-center rounded-lg ">
              <h1 className=" py-2 mb-2 text-left text-2xl font-semibold">Performance</h1>

              <div className="flex justify-between items-center mb-6  gap-12">
                <div className="flex flex-col leading-8 text-md font-normal"><span className=" leading-8 text-sm font-light">Today's Low</span> 46,930.22</div>

                <div className="w-[60%] bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-full h-[4px]">
                  <Image className="mt-2 ml-80" src={upArrow}></Image>
                  <span className=" leading-6 text-sm ml-36 font-light">$48,637.83</span>
                </div>

                <div className="flex flex-col leading-8 text-md font-normal"><span className=" leading-8 text-sm font-light">Today's Low</span> 46,930.22</div>
              </div>
              <div className="flex justify-between items-center gap-12">
                <div className="flex flex-col leading-8 text-md font-normal"><span className=" leading-8 text-sm font-light">52W Low</span> 16,930.22</div>

                <div className="w-[60%] bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-full h-[4px]"></div>

                <div className="flex flex-col leading-8 text-md font-normal"><span className=" leading-8 text-sm font-light">52W High</span> 49,743.83</div>
              </div>

              <h2 className=" flex py-2 mt-8 text-left text-lg text-[#44475B] font-semibold gap-2">Fundamentals <Image src={info}></Image> </h2>
              <Image src={tableInfo}></Image>

            </div>

            {/* Sentiments */}
            <div className="bg-white p-6 w-full h-[700px] rounded-lg ">
              <h1 className="py-2 text-left text-2xl font-semibold">Sentiment</h1>
              <h2 className=" flex py-2 text-left text-lg text-[#44475B] font-semibold gap-2">Key Events <Image src={info}></Image> </h2>

              <div className="relative flex flex-shrink-0 overscroll-hidden gap-4">
                <figure className="flex gap-4 w-[640px] h-[210px] items-start p-6 rounded-2xl bg-[#E8F4FD]">
                  <Image src={newsIcon}></Image>
                  <div>
                    <p className="mb-2 text-left font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    <p className="text-left font-light text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                  </div>
                </figure>
                <figure className="flex gap-4 items-start w-[640px] h-[210px] p-6 rounded-2xl bg-[#EBF9F4]">
                  <Image src={stockIcon}></Image>
                  <div>
                    <p className="mb-2 text-left font-medium text-sm">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                    <p className="text-left font-light text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                  </div>
                </figure>
                <Image src={corousalBtn} className="absolute mt-16 right-0"></Image>
              </div>

              <h2 className=" flex py-2 mt-8 text-left text-lg text-[#44475B] font-semibold gap-2">Analyst Estimates <Image src={info}></Image> </h2>

              <div className="flex items-center gap-10 mb-4">
                <div className="w-[100px] h-[100px] flex gap-1 justify-center items-center rounded-full bg-[#EBF9F4] text-[#0FBA83]"><span className=" text-4xl font-semibold">76</span>%</div>
                <div className="text-[#7C7E8C] w-[550px]">
                  <span className="flex font-semibold gap-8 items-center">Buy<figure className="w-[76%] h-3 rounded-sm bg-[#00B386]"></figure>76%</span>
                  <span className="flex font-semibold gap-6 items-center">Hold<figure className="w-[8%] h-3 rounded-sm bg-[#C7C8CE]"></figure>8%</span>
                  <span className="flex font-semibold gap-8 items-center">Sell<figure className="w-[16%] h-3 rounded-sm bg-[#F7324C]"></figure>16%</span>
                </div>
              </div>
            </div>

            {/* About Bitcoin */}
            <div className="bg-white w-full py-4 px-8 text-center rounded-lg ">
              <h1 className="py-2 text-left text-2xl font-semibold">About Bitcoin</h1>
              <>
                <h2 className=" flex py-2 text-left text-base font-bold gap-2">What is Bitcoin</h2>
                <p className="mb-2 text-left font-medium text-base text-[#3E424A]">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
              </>
              <div className="h-[1px] my-4 bg-[#DFE2EB]"></div>
              <>
                <h2 className=" flex pb-2 text-left text-base font-bold gap-2">Lorem ipsum dolor sit amet</h2>
                <p className="mb-2 text-left font-medium text-base text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                  <br />
                  <br />
                  Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                  <br />
                  <br />
                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
              </>
              <div className="h-[1px] my-4 bg-[#DFE2EB]"></div>
              <h1 className="py-2 text-left text-2xl font-semibold">Already Holding Bitcoin?</h1>
              <div className="flex mt-4 mb-10 gap-8">
                <figure className="flex bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] w-[50%] p-4 rounded-xl">
                  <Image src={profitImg} ></Image>
                  <div className="flex flex-col gap-6 px-10">
                    <h2 className="text-left text-lg font-bold text-[white]">Calculate your Profits</h2>
                    <button className="flex gap-4 bg-white rounded-lg p-2 w-[150px] font-bold items-center">Check Now <Image src={arrow}></Image></button>
                  </div>
                </figure>
                <figure className="flex bg-gradient-to-r from-[#FF9865] to-[#EF3031] w-[50%] p-4 rounded-xl">
                  <Image src={taxImg} ></Image>
                  <div className="flex flex-col gap-6 px-10">
                    <h2 className="text-left text-lg font-bold text-[white]">Calculate your tax liability</h2>
                    <button className="flex gap-4 bg-white rounded-lg p-2 w-[150px] font-bold items-center">Check Now <Image src={arrow}></Image></button>
                  </div>
                </figure>
              </div>
              <p className="my-6 text-left font-medium text-base text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>

            {/* Tokenomics */}
            <div className="bg-white w-full py-4 px-8 rounded-lg ">
              <h1 className="py-2 text-left text-2xl font-semibold">Tokenomics</h1>
              <h2 className=" flex py-2 text-left text-lg font-semibold gap-2">Initial Distribution</h2>
              <Image src={tokenomicsImg}></Image>
              <p className="text-left font-medium mb-8 text-base text-[#3E424A] ">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
            </div>
            <div className="bg-white w-full py-4 px-8 rounded-lg ">
              <h1 className="py-2 text-left text-2xl font-semibold">Team</h1>
              <p className="text-left font-medium py-4 mb-8 text-base text-[#3E424A] ">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
              {TEAM.map((data)=>(
                <div className="bg-[#E8F4FD] flex gap-6 items-center rounded-md py-2 px-4 my-4">
                  <div className="flex flex-col w-[500px] justify-center items-center">
                    <Image src={data.img} width={90} ></Image>
                    <h2 className=" font-semibold text-base mt-4">{data.name}</h2>
                    <p className=" text-xs font-medium text-[#8DA2AD] text-center">{data.desg}</p>
                  </div>
                  <p className="text-sm">{data.para}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-6 w-[35%] h-screen">
            <div className="w-full h-[515px] flex flex-col justify-center items-center px-10 gap-6 bg-[#0052FE] rounded-2xl text-white ">
              <h1 className=" leading-10 text-center text-2xl font-semibold">
                Get Started with KoinX <br /> for FREE
              </h1>
              <p className=" font-light text-center">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </p>
              <Image src={char1}></Image>
              <button className="text-black flex bg-white rounded-md py-2 px-6 items-center gap-2">
                Get Started for FREE <Image src={arrow}></Image>
              </button>
            </div>

            <div className="bg-white w-full h-[250px] p-10 text-center rounded-lg ">
              Top three Bitcoins
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
