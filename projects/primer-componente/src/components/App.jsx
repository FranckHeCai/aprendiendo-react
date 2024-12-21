import "../styles/App.css"
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
    return(
        <section className="tw-followCard-list">
            <TwitterFollowCard name="Franck Cai" userName="Zuko" />
            <TwitterFollowCard name="Miguel Angel Duran" userName="midudev" />
            <TwitterFollowCard name="Naruto Uzumaki Namikaze" userName="senlou" />
            <TwitterFollowCard name="Don Pepito" userName="steve" />
        </section>
    );
}