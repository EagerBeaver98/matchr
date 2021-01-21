import React from "react";
import "../App.scss";
import "../bootstrap/vendor/bootstrap/css/bootstrap.css";
import CarouselContainer from "./CarouselContainer";

function Matcher(props: any) {

  return (
    <div className="content-card restaurant">
      <div>
        <CarouselContainer
          reset={props.reset}
          user={props.user}
        />
      </div>
    </div>
  );
}

export default Matcher;
