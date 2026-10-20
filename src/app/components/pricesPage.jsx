import Image from "next/image";
import substruck from "../../img/numbers/Subtract.png";
import bgPrices from "../../img/prices/bg.png";
import virtual from "../../img/prices/virtual.png";
import works from "../../img/prices/works.png";
import account from "../../img/prices/accaunt.png";
import Link from "next/link";

const features = [
  {
    image: virtual,
    alt: "Virtual balance",
    text: "Virtual 10,000 USDT on balance",
    className: "md:col-start-1 md:row-start-1",
  },
  {
    image: works,
    alt: "No subscription limits",
    text: "Works without subscription and time limits",
    className: "md:col-start-1 md:row-start-2",
  },
  {
    image: account,
    alt: "Multiple accounts",
    text: "You can create multiple accounts for different purposes",
    className: "md:col-start-2 md:row-start-2",
  },
];

export default function PricesPage() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 pb-6 pt-6 text-white sm:px-8 md:min-h-[650px] md:px-10 md:pt-8">
      <div
        className="absolute pointer-events-none inset-0 -z-10 top-16"
        style={{
          background: "radial-gradient(ellipse at 90% 65%, rgba(110, 0, 180, 0.75) 0%, rgba(55, 0, 100, 0.38) 28%, transparent 58%)",
        }}
      />
      <Image src={bgPrices} alt="" aria-hidden="true" className="pointer-events-none absolute top-16 left-[20%] -z-10 w-[65%] max-w-[560px] object-contain opacity-90" />

      <h2 className="relative z-10 text-[44px] font-normal leading-none tracking-[-2px] sm:text-[56px] md:text-[68px]">Prices</h2>

      {/* Main content */}
      <div className="relative mt-8 min-h-[500px]  px-4 pb-10 pt-3 sm:px-6 md:mt-9 md:px-4">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div className="max-w-[370px]">
            <h3 className="text-[34px] pl-4 font-medium leading-tight tracking-[-1.5px] sm:text-[40px] md:text-[44px]">
              demo <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">account</span>
            </h3>

            <p className="mt-7 pl-6 max-w-[340px] text-[26px] font-light leading-[1.16] tracking-[-0.7px] sm:text-[30px]">
              Available immediately <span className="bg-gradient-to-r from-[#c5a6f5] to-[#7134c8] bg-clip-text text-transparent">after registering with</span> Capico.
            </p>

            <Link href="#demo-account" className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-[#a35cff] transition-colors hover:text-white border rounded-[20px] w-[200px] justify-center">
              Read more
              <span aria-hidden="true" className="text-2xl">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 md:pt-6">
            {features.map((feature) => (
              <article key={feature.alt} className={`relative flex min-h-[145px] flex-col justify-between overflow-hidden rounded-[24px] bg-[#0d0d12] p-5 sm:min-h-[155px] ${feature.className}`}>
                <Image src={feature.image} alt={feature.alt} className="ml-auto h-[48px] w-[48px] object-contain sm:h-[54px] sm:w-[54px]" />

                <p className="max-w-[190px] text-[11px] font-light leading-[1.25] text-white/85 sm:text-lg">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Trial period */}
      <div className="relative mt-8 min-h-[500px]  px-4 pb-10 pt-3 sm:px-6 md:mt-9 md:px-4">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div className="max-w-[370px]">
            <h3 className="text-[34px] pl-4 font-medium leading-tight tracking-[-1.5px] sm:text-[40px] md:text-[44px]">
              trial <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">period</span>
            </h3>
          </div>
          <p className="mt-17 max-w-[540px] text-[26px] font-light leading-[1.16] tracking-[-0.7px] sm:text-[30px] text-center">When adding an API key from a real exchange, a 7-day trial period starts. Upon completion, you must have a paid subscription or continue working at a free rate. </p>
        </div>
      </div>
      {/* Subscription */}
      <div className="relative mt-8 min-h-[500px]  px-4 pb-10 pt-3 sm:px-6 md:mt-9 md:px-4">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />
         <div className="max-w-[370px]">
            <h3 className="text-[34px] pl-4 font-medium leading-tight tracking-[-1.5px] sm:text-[40px] md:text-[44px]">
              subscri<span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">ption</span>
            </h3>
          </div>
      </div>
    </section>
  );
}
