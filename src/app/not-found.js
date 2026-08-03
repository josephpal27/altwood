import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Altwood",
  description: "",
};

export default function NotFound() {
    return (
        <>
            <section className="h-[100dvh] flex flex-col justify-center items-center">
                <h1 className="
                    text-[3rem] sm:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    text-[#7d4c0a] font-[600] tracking-[3]
                ">
                    404
                </h1>
                <p className="
                    text-[1.5rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                    text-black font-[600] my-[0.5rem]
                ">
                    PAGE NOT FOUND
                </p>
                <Link href="/" className="
                    bg-[#114a27] hover:bg-[#7d4c0a] text-[#fff] font-[500]
                    py-[0.4rem] px-[1rem] rounded-[6px] mt-[1rem] transition
                    text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                ">
                    View Home
                </Link>
            </section>
        </>
    );
}