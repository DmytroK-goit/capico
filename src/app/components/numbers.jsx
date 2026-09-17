import Image from "next/image";
import bgNumbers from "../../img/numbers/bg.png";
import substruck from "../../img/numbers/Subtract.png";

const stats = [
  {
    value: "36M+",
    label: "We are online",
  },
  {
    value: "215K+",
    label: "Traders\nin platform",
  },
  {
    value: "325M+",
    label: "Total\ndeals in platform",
  },
];

export default function Numbers() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-black px-5 py-5 text-white sm:px-8 lg:px-12">

      <Image
        src={bgNumbers}
        alt="bgNumbers"
        fill
        className="pointer-events-none object-cover object-center"
      />

   
    <Image src={substruck} alt="Substruck" className="absolute top-0 "/>

      <div className="relative z-10 mx-auto flex min-h-[610px] max-w-[1400px] flex-col">
    
        <div className="flex items-start justify-between">
          <h2 className="text-[32px] font-normal leading-none tracking-[-1.5px] sm:text-[40px]">
            numbers
          </h2>

          <button className="mt-1 text-[9px] font-normal text-white/40 transition-colors hover:text-white">
            Manage positions
          </button>
        </div>

        <div className="mt-10 flex flex-1 flex-col justify-between lg:flex-row">
      
          <div className="relative z-20 lg:pt-8">
            <p className="text-[90px] font-light leading-[0.85] tracking-[-5px] sm:text-[120px] lg:text-[130px] xl:text-[140px]">
              $18.5 B+
            </p>

            <p className="mt-7 max-w-[180px] text-[20px] font-light leading-[1.05] sm:text-[22px]">
              Total trading
              <br />
              volume
            </p>

            <p className="mt-36 max-w-[100px] text-[7px] leading-[1.15] text-white/50">
              Actual statistic
              <br />
              on 19/07/2026
            </p>
          </div>

          <div className="relative z-20 mt-10 grid w-full max-w-[420px] grid-cols-2 gap-4 self-end lg:mt-0">
      
            <div className="col-span-2 flex h-[155px] flex-col justify-between rounded-[22px] border border-white/40 bg-black/10 p-5 backdrop-blur-[2px] sm:h-[160px]">
              <p className="text-[42px] font-light leading-none tracking-[-2px] sm:text-[48px]">
                {stats[0].value}
              </p>

              <p className="text-[10px] leading-[1.1] text-white/90">
                {stats[0].label}
              </p>
            </div>

            <div className="flex h-[155px] flex-col justify-between rounded-[22px] border border-white/40 bg-black/10 p-5 backdrop-blur-[2px] sm:h-[160px]">
              <p className="text-[42px] font-light leading-none tracking-[-2px] sm:text-[48px]">
                {stats[1].value}
              </p>

              <p className="whitespace-pre-line text-[10px] leading-[1.1] text-white/90">
                {stats[1].label}
              </p>
            </div>

            <div className="flex h-[155px] flex-col justify-between rounded-[22px] border border-white/40 bg-black/10 p-5 backdrop-blur-[2px] sm:h-[160px]">
              <p className="text-[42px] font-light leading-none tracking-[-2px] sm:text-[48px]">
                {stats[2].value}
              </p>

              <p className="whitespace-pre-line text-[10px] leading-[1.1] text-white/90">
                {stats[2].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}