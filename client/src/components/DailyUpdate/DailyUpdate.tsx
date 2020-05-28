import * as React from "react";
import { Box } from "@material-ui/core";
import VisualBox from "./VisualBox";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./DailyUpdate.css";

// Images
import van from "./van.png";
import vanRev from "./vanRev.png";

export interface DailyUpdateProps {
  foodWeight: number;
  numOfMeals: number;
}

const DailyUpdate: React.FC<DailyUpdateProps> = (props) => {
  return (
    <Box className="daily-update-box">
      <h2 className="daily-update-title">Today</h2>

      <VisualBox imageSrc={van} leftOffset={25} topOffset={20}>
        <b>{props.foodWeight}</b>kg of food have been donated.
      </VisualBox>

      <VisualBox imageSrc={vanRev} leftOffset={190} topOffset={20}>
        <b>{props.numOfMeals}</b>meals have been donated.
      </VisualBox>
    </Box>
  );
};

export default DailyUpdate;
