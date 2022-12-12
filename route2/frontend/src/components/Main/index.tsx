import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import PrimaryButton from "./PrimaryButton";
import "./styles.css";

type Props = {
    elementCard: JSX.Element;
    primaryButtonText: string;
    buttonLink: string;
    showTitle?: boolean;
}

export default function Main({ elementCard, primaryButtonText, buttonLink, showTitle = false }: Props) {
    return (
        <main>
            <section id="content-section" className="container">
                {showTitle && <h2>Faça sua Inscrição!</h2>}
                <ContentCard element={elementCard} />
                <Link to={buttonLink}>
                    <PrimaryButton textValue={primaryButtonText} />
                </Link>
            </section>
        </main>
    );
}