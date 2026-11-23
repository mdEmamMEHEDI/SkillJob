import { Badge } from "../../Common/Common";
import TestimonialsIcon from "../../icons/TestimonialsIcon/TestimonialsIcon";

function TestimonialsHeader() {
    return (
        <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
            <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
                <Badge icon={<TestimonialsIcon />} label="Testimonials" />
                <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
                    Confidence backed by results
                </div>
                <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
                    Our customers achieve more each day
                    <br className="hidden sm:block" />{" "}
                    because their tools are simple, powerful, and clear.
                </div>
            </div>
        </div>
    );
}

export default TestimonialsHeader;
