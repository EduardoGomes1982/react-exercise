import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import PrimaryButton from "./PrimaryButton";
import "./styles.css";

type Props = {
    elementCard: JSX.Element;
    primaryButtonText: string;
    buttonLink: string;
}

export default function Main({ elementCard, primaryButtonText, buttonLink }: Props) {
    return (
        <main>
            <section id="content-section" className="container">
                <ContentCard element={elementCard} />
                <Link to={buttonLink}>
                    <PrimaryButton textValue={primaryButtonText} />
                </Link>
            </section>
        </main>
    );
}