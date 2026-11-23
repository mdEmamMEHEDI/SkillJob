function TestimonialImage({ image, name }) {
    return (
        <img
            src={image}
            alt={name}
            className="w-48 h-50 rounded-lg object-cover"
        />
    );
}

export default TestimonialImage;
