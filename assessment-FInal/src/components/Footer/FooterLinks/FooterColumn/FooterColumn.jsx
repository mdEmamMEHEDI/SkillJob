import FooterLink from "./FooterLink/FooterLink";

function FooterColumn({ title, links }) {
    return (
        <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                {title}
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                {links.map((link) => (
                    <FooterLink key={link} link={link} />
                ))}
            </div>
        </div>
    );
}

export default FooterColumn;
