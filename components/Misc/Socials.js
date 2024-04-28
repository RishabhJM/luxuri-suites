import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  const iconStyle = "w-[24px] h-[24px] md:w-[36px] md:h-[36px]";
  return (
    <div className="flex justify-between w-3/5 lg:w-4/5">
      <Link href="mailto:booking@luxuri.com"><Image src="/mail-outline 1.png" className={iconStyle} width={36} height={36} alt=""></Image></Link>
      <Link href="https://www.instagram.com/luxuri/"><Image src="/logo-instagram 1.png" className={iconStyle} width={36} height={36} alt=""></Image></Link>
      <Link href="https://www.linkedin.com/company/luxuri/"><Image src="/Linkedin.png" className={iconStyle} width={36} height={36} alt=""></Image></Link>
      <Link href="https://www.facebook.com/luxurirentals"><Image src="/facebook 1.png" className={iconStyle} width={36} height={36} alt=""></Image></Link>
      <Link href="https://twitter.com/luxuritweets"><Image src="/twitter 1.png" className={iconStyle} width={36} height={36} alt=""></Image></Link>
    </div>
  );
}
