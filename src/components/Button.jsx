import Link from "next/link"
import { MdArrowOutward } from "react-icons/md";

const Button = ({label, url}) => {
  return (
    <Link href={url} className="
        bg-[#114a27] text-white w-max rounded-full flex items-center gap-[0.6rem]
        pl-[1.1rem] py-[0.5rem] pr-[0.5rem] text-[1rem] hover:bg-[#7d4c0a] group transition duration-500
    ">
        {label}
        <MdArrowOutward className="
          bg-[#7d4c0a] w-[32px] h-[32px] rounded-full p-[0.3rem] group-hover:rotate-45 group-hover:bg-[#114a27] transition duration-500
        "/>
    </Link>
  )
}

export default Button;