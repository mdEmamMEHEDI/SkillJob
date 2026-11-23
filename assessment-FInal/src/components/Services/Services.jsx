import { PatternBar } from "../Common/Common";
import ServiceCard from "./ServiceCard/ServiceCard";

const services = [
    {
        title: "Plan your schedules",
        text: "Streamline customer subscriptions and billing with automated scheduling tools.",
        image: "./assets/images/services/plan-your-schedules.jpeg",
        alt: "Plan schedules dashboard",
    },
    {
        title: "Analytics & insights",
        text: "Transform your business data into actionable insights with real-time analytics.",
        image: "./assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
        alt: "Analytics dashboard",
    },
    {
        title: "Collaborate seamlessly",
        text: "Keep your team aligned with shared dashboards and collaborative workflows.",
        image: "./assets/images/services/data-visualization-dashboard-with-interactive-char.jpg",
        alt: "Data visualization dashboard",
    },
];

function Services() {
    return (
        <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
            <PatternBar id="pattern-template" type="hero" />

            <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>

            <PatternBar id="pattern-template-2" type="hero" />
        </div>
    );
}

export default Services;
