import * as React from "react";
import { Box } from "@material-ui/core";
import VisualBox from "./VisualBox";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./DailyUpdate.css";

// Images
import van from "./van.png";
import vanRev from "./vanRev.png";

import UserContext from "../../UserContext";

export interface DailyUpdateProps {}

const DailyUpdate = () => {
  const user = React.useContext(UserContext);

  const query = gql`
    {
      allDeliveries(condition: {partnerId: ${user}}) {
        edges {
          node {            
            totalKg
            totalMeals
          }
        }
      }
    }
    `;

  let foodWeight = 0.0;
  let numOfMeals = 0.0;

  const { loading, error, data } = useQuery(query);

  if (!(loading || error)) {
    // todo: fix this so it filters to today's date
    // todo: make this have proper types
    // todo: fix this so it is a class component
    // todo: use destructuring
    let totalKg = 0.0;
    let totalMeals = 0.0;

    for (let edge of data.allDeliveries.edges) {
      totalKg += edge.node.totalKg;
      totalMeals += edge.node.totalMeals;
    }

    foodWeight = totalKg;
    numOfMeals = totalMeals;
  }

  return (
    <Box className="daily-update-box">
      <h2 className="daily-update-title">Today</h2>

      <VisualBox imageSrc={van} leftOffset={25} topOffset={20}>
        <b>{foodWeight}</b>kg of food have been donated.
      </VisualBox>

      <VisualBox imageSrc={vanRev} leftOffset={170} topOffset={20}>
        <b>{numOfMeals}</b>meals have been donated.
      </VisualBox>
    </Box>
  );
};

export default DailyUpdate;
