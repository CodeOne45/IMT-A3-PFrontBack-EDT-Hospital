import "./Version.scss";

export const VersionComponent = ({
  versionNumber,
  selectedVersion = false,
}: {
  versionNumber: number,
  selectedVersion?: boolean
}) => {
  return (
    <div
      className={`version ${selectedVersion? "version-selected" : null}`}
    >
      <div className="version__container">
        <div className="line-container line-container-v">
          <div></div>
          <div className="line line-vertical"></div>
          <div className="line line-vertical"></div>
          <div className="line line-vertical"></div>
          <div></div>
        </div>

        <div className="line-container line-container-h">
          <div></div>
          <div className="line line-horizontal"></div>
          <div className="line line-horizontal"></div>
          <div className="line line-horizontal"></div>
          <div></div>
        </div>
      </div>
      <p className="version__number">Version {versionNumber}</p>
    </div>
  );
};
