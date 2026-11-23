function FeatureText({ title, text }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
                {title}
            </h3>
            <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                {text}
            </p>
        </div>
    );
}

export default FeatureText;
