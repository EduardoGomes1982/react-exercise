import "./styles.css";

type Props = {
    element: JSX.Element;
}

export default function ContentCard({ element }: Props) {
    return (
        <div className="content-card">
            {element}
        </div>
    );
}