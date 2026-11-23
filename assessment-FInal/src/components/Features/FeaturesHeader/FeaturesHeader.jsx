import { Badge } from "../../Common/Common";
import ServicesIcon from "../../icons/ServicesIcon/ServicesIcon";

function FeaturesHeader() {
    return (
        <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
            <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
                <Badge icon={<ServicesIcon />} label="Services" />
                <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
                    Built for absolute clarity and focused work
                </div>
                <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
                    Stay focused with tools that organize, connect
                    <br />
                    and turn information into confident decisions.
                </div>
            </div>
        </div>
    );
}

export default FeaturesHeader;
