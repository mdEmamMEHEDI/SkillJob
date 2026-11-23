import TestimonialImage from "./TestimonialImage/TestimonialImage";
import TestimonialQuote from "./TestimonialQuote/TestimonialQuote";
import TestimonialAuthor from "./TestimonialAuthor/TestimonialAuthor";

function TestimonialCard({ image, name, role, quote }) {
    return (
        <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0 border-gray-200">
            <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
                <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
                    <TestimonialImage image={image} name={name} />

                    <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
                        <TestimonialQuote quote={quote} />
                        <TestimonialAuthor name={name} role={role} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;
