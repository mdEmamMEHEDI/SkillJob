const styles = {
    hero: {
        box: "w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden",
        inner: "w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start",
        line: "self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
    },
    features: {
        box: "w-12 self-stretch relative overflow-hidden hidden md:block",
        inner: "w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start",
        line: "self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
    },
};

function PatternBar({ id, type }) {
    const style = styles[type];

    return (
        <div className={style.box}>
            <div className={style.inner}>
                <template id={id}>
                    <div className={style.line}></div>
                </template>
            </div>
        </div>
    );
}

export default PatternBar;
