"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ label, url }) => {

  const pathname = usePathname();
  const isWudonPage = pathname === "/wudon" || pathname === "/wudon/";

  return (
    <Link href={url} className={`
        ${isWudonPage ? "bg-[#29396e]" : "bg-[#114a27]"} text-white w-max rounded-full flex items-center gap-[0.6rem]
        pl-[1.1rem] py-[0.5rem] pr-[0.5rem] text-[1rem] ${isWudonPage ? "hover:bg-[#ad030c]" : "hover:bg-[#7d4c0a]"} group transition duration-500
    `}>
      {label}
      <MdArrowOutward className={`
          ${isWudonPage ? "bg-[#ad030c]" : "bg-[#7d4c0a]"} w-[32px] h-[32px] rounded-full p-[0.3rem] group-hover:rotate-45 ${isWudonPage ? "group-hover:bg-[#29396e]" : "group-hover:bg-[#114a27]"} transition duration-500
        `}/>
    </Link>
  )
}

export default Button;