import Link from "next/link"

const Button = ({label, url}) => {
  return (
    <Link href={url} className="
        bg-[#6b1930] text-white w-max rounded-full
        px-[1.3rem] py-[0.8rem]
    ">
        {label}
    </Link>
  )
}

export default Button;