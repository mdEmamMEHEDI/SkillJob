import FeatureText from "./FeatureText/FeatureText";
import FeatureImage from "./FeatureImage/FeatureImage";

function FeatureCard({ title, text, image, border, imageClass }) {
    return (
        <div
            className={`${border} p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6`}
        >
            <FeatureText title={title} text={text} />
            <FeatureImage image={image} imageClass={imageClass} />
        </div>
    );
}

export default FeatureCard;
