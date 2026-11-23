import HeroHeading from "./HeroHeading/HeroHeading";
import HeroSubheading from "./HeroSubheading/HeroSubheading";

function HeroText() {
    return (
        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <HeroHeading />
                <HeroSubheading />
            </div>
        </div>
    );
}

export default HeroText;
