import { Button } from "@mui/material";

interface ConstraintItemProps {
    name: string;
    onClick: () => void;
}

export default function ConstraintItem(props: ConstraintItemProps) {
    const { name, onClick } = props;

    return (
        <Button
            onClick={onClick}
            sx={{
                p: 2,
                width: "100%",
                textAlign: "left",
                justifyContent: "flex-start",
                background: " rgba(77, 180, 255, 0.12)",
                color: "#0797FF",
                fontSize: "12px",
                textTransform: "none",
            }}
        >
            {name}
        </Button>
    );
}
