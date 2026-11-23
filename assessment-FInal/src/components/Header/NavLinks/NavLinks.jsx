import NavLink from "./NavLink/NavLink";

const links = ["Products", "Pricing", "Docs"];

function NavLinks() {
    return (
        <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
            {links.map((link) => (
                <NavLink key={link} link={link} />
            ))}
        </div>
    );
}

export default NavLinks;
