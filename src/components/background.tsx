import { Content } from "./content";
import { Description } from "./description";
import { Logo } from "./logo";

export function Background() {
    return (
        <div className="background">
            <Logo />
            <div className="profile-box">
                <Content />
                <Description />
            </div>
        </div>



    )
}