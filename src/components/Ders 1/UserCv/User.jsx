import React from "react";
import Contacts from "../Contacts/Contacts";
import Personal from "../PersonalInfo/Personal";
import Experience from "../Experience/Experience";
import "./user.css";

const User = () => {
  return (
    <>
      <div className="container">
        <div className="information">
          Information
          <p className="paragraph"><Personal /></p>
        </div>
        <div className="information">
          Experience
          <p className="paragraph"><Contacts /></p>
        </div>
        <div className="information">
          Experience
          <p className="paragraph"><Experience /></p>
        </div>
        
      </div>
    </>
  );
};

export default User;
