import FooterColumn from "./FooterColumn/FooterColumn";

const columns = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Integrations", "Real-time Previews", "Multi-Agent Coding"],
    },
    {
        title: "Company",
        links: ["About us", "Our team", "Careers", "Brand", "Contact"],
    },
    {
        title: "Resources",
        links: ["Terms of use", "API Reference", "Documentation", "Community", "Support"],
    },
];

function FooterLinks() {
    return (
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
            {columns.map((column) => (
                <FooterColumn key={column.title} {...column} />
            ))}
        </div>
    );
}

export default FooterLinks;
