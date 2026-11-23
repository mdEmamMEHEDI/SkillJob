import TwitterIcon from "../../../icons/TwitterIcon/TwitterIcon";
import LinkedinIcon from "../../../icons/LinkedinIcon/LinkedinIcon";
import GithubIcon from "../../../icons/GithubIcon/GithubIcon";

const icons = [TwitterIcon, LinkedinIcon, GithubIcon];

function SocialIcons() {
    return (
        <div className="flex justify-start items-start gap-4">
            {icons.map((Icon, index) => (
                <div key={index} className="w-6 h-6 relative overflow-hidden">
                    <Icon />
                </div>
            ))}
        </div>
    );
}

export default SocialIcons;
