import * as React from "react";
import { Box } from "@material-ui/core";
import VisualBox from "./VisualBox";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./DailyUpdate.css";

// Images
import van from "./van.png";
import vanRev from "./vanRev.png";

import GraphQLContext from "../../GraphQLContext";

export interface DailyUpdateProps {}

export interface DailyUpdateState {
  foodWeight: number;
  numOfMeals: number;
}

class DailyUpdate extends React.Component<DailyUpdateProps, DailyUpdateState> {
  state = { foodWeight: 0.0, numOfMeals: 0.0 };

  static contextType = GraphQLContext;

  componentDidMount() {
    const query = `
    {
      allDeliveries(condition: {partnerId: ${this.context.user}}) {
        edges {
          node {            
            totalKg
            totalMeals
          }
        }
      }
    }
    `;

    this.context.client
      .request(query, {})
      .then((data: any) => {
        let foodWeight = 0.0;
        let numOfMeals = 0.0;

        // todo: fix this so it filters to today's date
        // todo: make this have proper types
        // todo: use destructuring
        let totalKg = 0.0;
        let totalMeals = 0.0;

        for (let edge of data.allDeliveries.edges) {
          totalKg += edge.node.totalKg;
          totalMeals += edge.node.totalMeals;
        }

        this.setState({ foodWeight: totalKg, numOfMeals: totalMeals });
      })
      .catch((error: any) => this.setState({ foodWeight: 0, numOfMeals: 0 }));
  }

  render() {
    return (
      <Box className="daily-update-box">
        <h2 className="daily-update-title">Today</h2>

        <VisualBox imageSrc={van} leftOffset={25} topOffset={20}>
          <b>{this.state.foodWeight}</b>kg of food have been donated.
        </VisualBox>

        <VisualBox imageSrc={vanRev} leftOffset={170} topOffset={20}>
          <b>{this.state.numOfMeals}</b>meals have been donated.
        </VisualBox>
      </Box>
    );
  }
}

export default DailyUpdate;
