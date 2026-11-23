function CardImage({ image, alt }) {
    return (
        <img
            src={image}
            alt={alt}
            className="w-full h-40 object-cover rounded-md mt-3"
        />
    );
}

export default CardImage;
