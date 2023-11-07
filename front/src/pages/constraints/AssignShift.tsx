import ConstraintPage from "./ConstraintPage";

interface AssignShiftProps {
    onBack: () => void;
}

export default function AssignShift(props: AssignShiftProps) {
    const { onBack } = props;

    return (
        <ConstraintPage onBack={onBack}>
            <div>AssignShift</div>
        </ConstraintPage>
    );
}
