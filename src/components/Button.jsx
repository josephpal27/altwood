import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";

const Button = ({label, url}) => {
  return (
    <Link href={url} className="
        bg-[#6b1930] text-white w-max rounded-full flex items-center gap-[0.6rem]
        pl-[1.1rem] py-[0.5rem] pr-[0.5rem] text-[1rem] hover:bg-black group transition duration-500
    ">
        {label}
        <MdArrowOutward className="
          bg-[#d7b36e] w-[32px] h-[32px] rounded-full p-[0.3rem] group-hover:rotate-45 transition duration-500
        "/>
    </Link>
  )
}

export default Button;