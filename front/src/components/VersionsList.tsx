import { Button } from "@mui/material";
import { VersionComponent } from "./Version";

export const VersionsList = ({
  versions,
  selectedVersion,
  onSelectVersion,
}: {
  versions: number;
  selectedVersion: number;
  onSelectVersion: (index: number) => void;
}) => {
  return (
    <>
      {Array.from({ length: versions }).map((_, index) => (
        <Button onClick={() => onSelectVersion(index)} key={index}>
          <VersionComponent
            versionNumber={index}
            selectedVersion={index === selectedVersion}
          />
        </Button>
      ))}
    </>
  );
};
