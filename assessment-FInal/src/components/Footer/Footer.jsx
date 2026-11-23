import FooterBrand from "./FooterBrand/FooterBrand";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterPattern from "./FooterPattern/FooterPattern";

function Footer() {
    return (
        <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
            <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
                <FooterBrand />
                <FooterLinks />
            </div>
            <FooterPattern />
        </div>
    );
}

export default Footer;
