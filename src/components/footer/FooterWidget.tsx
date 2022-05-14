import React from "react";

interface IProps{

}

const FooterWidget: React.FC<IProps> = () => {
  return (
    <>
      <ul className="fList">
        <li className="fListItem">Countries</li>
        <li className="fListItem">Regions</li>
        <li className="fListItem">Cities</li>
        <li className="fListItem">Districts</li>
        <li className="fListItem">Airports</li>
        <li className="fListItem">Hotels</li>
      </ul>
    </>
  );
};

export default FooterWidget;
