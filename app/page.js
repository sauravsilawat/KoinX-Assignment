import Image from "next/image";

import { TABS } from "@/utils/constant";

import leftarrow from "../public/images/leftarrow.svg";
import char1 from "../public/images/character1.svg";
import arrow from "../public/images/arrow.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#EFF2F5] flex-col items-center justify-between">
      <div className="w-[90%]">
        <div className="flex gap-2 font-light py-4">
          <span className="text-[#49616E]">Cryptocurrency</span>{" "}
          <Image src={leftarrow}></Image> Bitcoin
        </div>

        <section className="flex w-full gap-6">
          <div className="flex flex-col w-[65%] gap-6 h-screen">
            <div className="bg-white w-full h-[700px] p-44 text-center rounded-lg ">
              Bitcoin graph
            </div>
          
            <div className="flex gap-6 py-4 h-[52px] border-b-[1px]">
              <div className="text-[#0141CF] pb-[32px] border-b-4 border-[#0052FE]">Overview</div>
              {TABS.map((items)=>(
                <div>{items}</div>
              ))}  
            </div>
          </div>

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
