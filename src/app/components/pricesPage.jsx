import Image from "next/image";
import substruck from "../../img/numbers/Subtract.png";
import bgPrices from "../../img/prices/bg.png";
import virtual from "../../img/prices/virtual.png";
import works from "../../img/prices/works.png";
import account from "../../img/prices/accaunt.png";
import Link from "next/link";
import binance from '../../img/hero/binance.png'
import ftx from '../../img/hero/ftx.png'
import huobi from '../../img/hero/huobi.png'
import okx from '../../img/hero/okx.png'

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

const plans = [
  {
    name: "Month",
    price: "$15",
    detail: "",
    economy: "Get started right now",
    discount: "",
  },
  {
    name: "3 months",
    price: "$39",
    detail: "$13/mo",
    economy: "$6 economy",
    discount: "-13%",
  },
  {
    name: "6 months",
    price: "$69",
    detail: "$13/mo",
    economy: "$21 economy",
    discount: "-23%",
  },
  {
    name: "Yearly subscribe",
    price: "$119",
    detail: "$9.9/mo",
    economy: "$61 economy",
    discount: "-33%",
    featured: true,
  },
];
const exchanges = [
  {
    name: "BINANCE",
    logo: binance,
    href: "https://www.binance.com/",
  },
  {
    name: "FTX",
    logo: ftx,
    href: "https://ftx.com/",
  },
  {
    name: "Huobi",
    logo: huobi,
    href: "https://www.htx.com/",
  },
  {
    name: "OKX",
    logo: okx,
    href: "https://www.okx.com/",
  },
];
export default function PricesPage() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-5 pb-6 pt-6 text-white sm:px-8 md:min-h-[650px] md:px-10 md:pt-8">
      <Image src={bgPrices} alt="" aria-hidden="true" className="pointer-events-none absolute top-16 left-[20%] -z-10 w-[65%] max-w-[560px] object-contain opacity-90" />

      <h2 className="relative z-10 text-[44px] font-normal leading-none tracking-[-2px] sm:text-[56px] md:text-[68px]">Prices</h2>

      {/* Main content */}
      <div className="relative mt-8 min-h-[500px]  px-4 pb-10 pt-3 sm:px-6 md:mt-9 md:px-4 overflow-visible">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />
        <div
          className="absolute pointer-events-none inset-0 z-100 top-16 "
          style={{
            background: "radial-gradient(ellipse at 90% 65%, rgba(110, 0, 180, 0.75) 0%, rgba(55, 0, 100, 0.38) 28%, transparent 58%)",
          }}
        />
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
      <div className="relative mt-8 min-h-[500px] px-4 pb-10 pt-3 sm:px-6 md:mt-9 md:px-4">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div className="max-w-[370px]">
            <h3 className="text-[34px] pl-4 font-medium leading-tight tracking-[-1.5px] sm:text-[40px] md:text-[44px]">
              trial <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">period</span>
            </h3>
          </div>
        </div>
        <p className="mt-27 max-w-[740px] text-[28px] text-[#cdc2e1] font-light leading-[1.16] tracking-[-0.7px] sm:text-[30px] text-center mx-auto my-auto">
          When adding an API key from a real exchange, a 7-day trial period starts. Upon completion, you must have a paid subscription or continue working at a free rate.{" "}
        </p>
      </div>

      {/* Subscription */}
      <div className="relative mt-8 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#351477] via-[#4b2394] to-[#6845a5] px-5 pb-8 pt-6 sm:px-7 md:px-8 md:pb-6 w-full">
        <Image src={substruck} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-1 z-0 h-auto w-full" />

        <h3 className="relative z-10 pl-1 text-[34px] font-medium leading-tight tracking-[-1.5px] sm:text-[40px] md:text-[44px]">
          subscri
          <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">ption</span>
        </h3>

        <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`flex min-h-[170px] flex-col justify-between rounded-[22px] p-4 sm:min-h-[173px] ${plan.featured ? "bg-gradient-to-br from-[#4000c9] to-[#a000f5]" : "bg-[#6546a5]/85"}`}>
              <p className="text-sm font-medium">{plan.name}</p>

              <div className="text-center">
                <p className="text-[38px] font-normal leading-tight sm:text-[40px]">{plan.price}</p>
                {plan.detail && <p className="mt-0.5 text-[11px] text-white/90">{plan.detail}</p>}
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] text-white/85">{plan.economy}</span>

                {plan.discount && <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${plan.featured ? "bg-white text-[#6500d8]" : "bg-[#a000f5] text-white"}`}>{plan.discount}</span>}
              </div>
            </div>
          ))}
        </div>

        <p className="relative z-10 mt-10 max-w-[460px] text-[18px] font-light leading-[1.25] sm:text-[20px]">
          You can subscribe and renew your subscription in{" "}
          <Link href="/login" className="text-[#a77aff] underline underline-offset-2 transition hover:text-white">
            your account
          </Link>
        </p>

        <p className="relative z-10 mt-8 text-center text-[10px] text-white/50">
          More details and payment instructions can be found in{" "}
          <Link href="/articles" className="underline underline-offset-2 transition hover:text-white">
            this article
          </Link>
        </p>
      </div>
       {/* Free use */}
      <div className="relative isolate overflow-hidden  px-4 py-5 text-white sm:px-6">
        {/* Purple glow */}
          <Image src={substruck} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-1 z-0 h-auto w-full" />
        <div className="pointer-events-none absolute -bottom-44 left-1/2 -z-10 h-[330px] w-[120%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(112,39,255,0.85)_0%,rgba(77,30,178,0.5)_38%,rgba(23,17,50,0.2)_65%,transparent_78%)] blur-[32px]" />

        <div className="relative z-10">
          <h2 className="bg-gradient-to-r from-white to-[#c7b2ed] bg-clip-text text-[38px] font-medium leading-[1.15] tracking-[-2px] text-transparent sm:text-[50px] sm:tracking-[-2.5px]">free use</h2>

          <p className="mx-auto my-10 max-w-[620px] text-center text-[13px] leading-[1.45] tracking-[-0.3px] text-[#c0b9cd] sm:my-[62px] sm:text-[14px]">
            Capico provides free access to the platform through partnerships
            <br className="hidden sm:block" /> with well-known cryptocurrency exchanges. There are no hidden fees
            <br className="hidden sm:block" /> or functionality limitations.
          </p>

          <div className="flex flex-col gap-[18px]">
            <p className="text-[11px] leading-[1.25] text-[#c0bac8]">
              Click on the desired exchange and find
              <br />
              out the conditions for connecting to the
              <br />
              free plan:
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {exchanges.map((exchange) => (
          <Link
            key={exchange.name}
            href={exchange.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[58px] items-center justify-center gap-[5px] rounded-[14px] border border-transparent bg-[#100b18] px-2 text-[11px] font-bold text-[#f8f6fc] no-underline transition-all duration-300 hover:-translate-y-[3px] hover:border-[#aa75ff]/65 hover:bg-[#1b102d] sm:min-h-[64px] sm:rounded-[17px] sm:text-xs"
          >
            <Image
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              width={40}
              height={40}
              className="h-auto w-[50px] shrink-0 object-contain"
            />
          
          </Link>
        ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
