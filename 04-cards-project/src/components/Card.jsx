import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.img} alt="" />

          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.companyName}&nbsp;
            <span>{props.jobposted}</span>
          </h3>
          <h2>{props.jobTitle}</h2>
          <div className="tag">
            <h4>{props.shift}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.salary}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;
