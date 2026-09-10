import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  
} from "react-icons/fa";

import logo from "../../img/logo.svg";

export default function Footer() {
  return (
    <footer className="rounded-t-[28px] bg-[#160d20] px-8 py-8 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={logo}
                  alt="Capico"
                  width={115}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
            </div>

            <div className="mt-8">
              <p className="mb-4 max-w-[130px] text-[11px] leading-tight text-white/50">
                We are in social
                <br />
                networks
              </p>

              <div className="flex items-center gap-2">
                <SocialIcon href="#" icon={<FaTwitter />} />
                <SocialIcon href="#" icon={<FaFacebookF />} />
                <SocialIcon href="#" icon={<FaYoutube />} />
                <SocialIcon href="#" icon={<FaTelegramPlane />} />
             
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[15px] font-medium">Documents</h3>

            <nav className="flex flex-col gap-2">
              <FooterLink href="#">Terms of use</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Referral Agreement</FooterLink>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-[15px] font-medium">Platform</h3>

            <nav className="flex flex-col gap-2">
              <FooterLink href="#">Functions</FooterLink>
              <FooterLink href="#">Tariffs</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Academy</FooterLink>
              <FooterLink href="#">Knowledge base</FooterLink>
              <FooterLink href="#">Popular questions</FooterLink>
              <FooterLink href="#">Jobs</FooterLink>
            </nav>
          </div>

       
          <div>
            <nav className="flex flex-col gap-5">
              <Link
                href="/signin"
                className="text-[15px] transition-opacity hover:opacity-60"
              >
                Sign in
              </Link>

              <Link
                href="/signup"
                className="text-[15px] transition-opacity hover:opacity-60"
              >
                Create an account
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-[11px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Capico ltd.</p>

          <a
            href="mailto:info@capico.app"
            className="transition-colors hover:text-white"
          >
            info@capico.app
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-[10px] text-white/40 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, icon, purple = false }) {
  return (
    <Link
      href={href}
      className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] transition-transform hover:scale-110 ${
        purple
          ? "bg-[#853cff] text-white"
          : "bg-white text-[#160d20]"
      }`}
    >
      {icon}
    </Link>
  );
}