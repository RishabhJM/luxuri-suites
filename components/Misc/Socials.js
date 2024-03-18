import Image from "next/image";

export default function Socials() {
  const iconStyle = "w-[24px] h-[24px] md:w-[36px] md:h-[36px]";
  return (
    <div className="flex justify-between w-3/5 lg:w-4/5">
      <Image src="/mail-outline 1.png" className={iconStyle} width={36} height={36} alt=""></Image>
      <Image src="/logo-instagram 1.png" className={iconStyle} width={36} height={36} alt=""></Image>
      <Image src="/Linkedin.png" className={iconStyle} width={36} height={36} alt=""></Image>
      <Image src="/facebook 1.png" className={iconStyle} width={36} height={36} alt=""></Image>
      <Image src="/twitter 1.png" className={iconStyle} width={36} height={36} alt=""></Image>
    </div>
  );
}
