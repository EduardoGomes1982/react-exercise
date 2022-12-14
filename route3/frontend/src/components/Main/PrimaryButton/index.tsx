import "./styles.css";

type Props = {
    textValue: string;
}

export default function PrimaryButton({ textValue }: Props) {
    return (
        <div className="primary-button">{textValue}</div>
    );
}