function CardText({ title, text }) {
    return (
        <>
            <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
                {title}
            </div>
            <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
                {text}
            </div>
        </>
    );
}

export default CardText;
