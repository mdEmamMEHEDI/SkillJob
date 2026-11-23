import TestimonialsHeader from "./TestimonialsHeader/TestimonialsHeader";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const testimonial = {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png",
    name: "Jamie Marshall",
    role: "Co-founder, Exponent",
    quote: '"In just a few minutes, we transformed our data into actionable insights. The process was seamless and incredibly efficient!"',
};

function Testimonials() {
    return (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            <TestimonialsHeader />
            <TestimonialCard {...testimonial} />
        </div>
    );
}

export default Testimonials;
