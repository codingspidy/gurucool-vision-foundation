import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center md:text-left py-6 px-6">
      <div className="md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col items-center gap-16">
            <Link className="w-auto h-auto cursor-pointer" href="/">
              <Image
                alt="logo"
                src="/logo.png"
                width={150}
                height={50}
                loading="eager"
                className="object-contain"
              />
            </Link>
            <div className="flex gap-5 px-10 items-center text-lg sm:text-2xl">
              <Link href="">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="">
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link href="">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <div className="h-40 w-[1px] bg-white hidden md:block" />
          </div>
          <div className="md:-order-10 md:w-1/2 md:pt-[90px] mt-4 md:border-t border-white">
            <p>
              Make a Difference is a registered society under the Travancore
              Cochin Literary, Scientific and Charitable Societies Registration
              Act, 1955. We are a 12A registered society with section 80(G)
              status of income tax act and we are eligible to receive foreign
              funding via the Foreign Contribution (Regulation) Act. Our
              financial records are audited annually by G. Joseph & Associates.
            </p>
            <p className="mt-4 md:mt-6">
              MAD follows all financial regulations set forth for non-profits by
              the Government of India, and is audited annually.
            </p>
          </div>
          <div className="md:w-1/2 md:text-right md:pt-[90px] mt-10 md:mt-4 md:border-t border-white">
            <ul className="space-y-4">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li className="text-xl font-bold">Contact Us</li>
              <li>contact@makeadiff.in</li>
              <li>+91 93930 93030</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center footer-links mt-20 md:mt-10 text-xs md:text-sm">
          <div className="px-2 py-4">💛 2022 | Gurucool Vision Foundation</div>
        </div>
      </div>
    </footer>
  );
}
