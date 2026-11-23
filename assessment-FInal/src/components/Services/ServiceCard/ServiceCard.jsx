import CardText from "./CardText/CardText";
import CardImage from "./CardImage/CardImage";

function ServiceCard({ title, text, image, alt }) {
    return (
        <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative last:border-b-0 border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
            <CardText title={title} text={text} />
            <CardImage image={image} alt={alt} />
        </div>
    );
}

export default ServiceCard;
