import * as React from "react";
import "./VisualBox.css";

export interface VisualBoxProps {
  imageSrc: string;
  leftOffset: number;
  topOffset: number;
}

export interface VisualBoxState {}

class VisualBox extends React.Component<VisualBoxProps, VisualBoxState> {
  state = {};

  static defaultProps = {
    leftOffset: 0,
    topOffset: 0,
  };

  textStyle = () => {
    return {
      left: this.props.leftOffset,
      top: this.props.topOffset,
    };
  };

  render() {
    return (
      <div className="test">
        <img src={this.props.imageSrc} />
        <p style={this.textStyle()}>{this.props.children}</p>
      </div>
    );
  }
}

export default VisualBox;
