function FeatureImage({ image, imageClass }) {
    return (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative">
            <img src={image} className={imageClass} />
        </div>
    );
}

export default FeatureImage;
