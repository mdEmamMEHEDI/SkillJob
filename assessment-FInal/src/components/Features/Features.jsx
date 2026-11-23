import FeaturesHeader from "./FeaturesHeader/FeaturesHeader";
import { PatternBar } from "../Common/Common";
import FeatureCard from "./FeatureCard/FeatureCard";

const features = [
    {
        title: "Smart. Simple. Brilliant.",
        text: "Your data is beautifully organized so you see everything clearly without the clutter.",
        image: "./assets/images/services/work-order.png",
        border: "border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)]",
        imageClass: "h-1/2 object-cover",
    },
    {
        title: "Your work, in sync",
        text: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
        image: "./assets/images/services/work-sync.png",
        border: "border-b border-[rgba(55,50,47,0.12)]",
        imageClass: "h-full object-cover",
    },
    {
        title: "Effortless integration",
        text: "All your favorite tools connect in one place and work together seamlessly by design.",
        image: "./assets/images/services/integration.png",
        border: "border-r-0 md:border-r border-[rgba(55,50,47,0.12)]",
        imageClass: "h-full object-cover",
    },
    {
        title: "Numbers that speak",
        text: "Track growth with precision and turn raw data into confident decisions you can trust.",
        image: "./assets/images/services/speak.png",
        border: "",
        imageClass: "h-full object-cover",
    },
];

function Features() {
    return (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            <FeaturesHeader />

            <div className="self-stretch flex justify-center items-start">
                <PatternBar id="pattern-template-3" type="features" />

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>

                <PatternBar id="pattern-template-4" type="features" />
            </div>
        </div>
    );
}

export default Features;
