function TestimonialAuthor({ name, role }) {
    return (
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                {name}
            </div>
            <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
                {role}
            </div>
        </div>
    );
}

export default TestimonialAuthor;
