import substruck from "../../img/numbers/Subtract.png";
import Image from "next/image";

import security from "../../img/security/security.png";
import key from "../../img/security/key.png";
import server from "../../img/security/server.png";
import fa from "../../img/security/2fa.png";

const securityDb = [
  {
    title: "API Keys",
    img: key,
    desc: "Trading takes place through API keys of exchanges with the inability to withdraw funds.",
  },
  {
    title: "Server",
    img: server,
    desc: "User data is encrypted and stored on an isolated server.",
  },
  {
    title: "2FA",
    img: fa,
    desc: "Checking new devices and IP addresses, as well as two-factor authentication allow you to securely protect your account from unauthorized access.",
  },
];

export default function HighSecurity() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-2 text-white sm:px-6 lg:px-8">
      {" "}
        <Image src={substruck} alt="" className="absolute top-0 z-1" />
       <h2 className="text-[32px] font-normal leading-none tracking-[-1.5px] sm:text-[40px] ml-6">
          high security platform
        </h2>

        <div className="relative z-10 mt-8 flex flex-col items-center md:mt-[10px] md:flex-row md:items-center md:justify-between max-w-[80%] mx-auto">
          <div className="flex w-full justify-center md:w-[50%] md:justify-start">
            <Image src={security} alt="High security platform" className="w-[75%] max-w-[500px] object-contain md:w-[90%]" />
          </div>

          <div className="grid w-full max-w-[520px] grid-cols-2 gap-4 md:w-[45%]">
            {securityDb.map((item, index) => (
              <article key={item.title} className={`flex min-h-[180px] flex-col rounded-[22px] border border-[#332044] bg-black p-5 md:min-h-[180px] md:p-6 ${index === 2 ? "col-span-1" : ""}`}>
                <h3 className="text-[17px] font-medium text-white md:text-[18px]">{item.title}</h3>

                <div className="mt-3 flex h-[55px] items-center">
                  <Image src={item.img} alt={item.title} width={55} height={55} className="object-contain" />
                </div>

                <p className="mt-auto max-w-[170px] text-[7px] leading-[1.4] text-white/45 md:text-[8px]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      
    </section>
  );
}
