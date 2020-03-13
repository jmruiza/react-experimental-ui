import React from "react";
import { Affix, Button } from "antd";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.affixRef = this.props.AffixRef;
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.affixRef.current.updatePosition();
      },
      true
    );
  }

  render() {
    return (
        <div
          className="scrollable-container"
          ref={node => {
            this.container = node;
          }}
        >
          <div className="background">
            <Affix ref={this.affixRef} target={() => this.container}>
              <Button type="primary">Fixed at the top of container</Button>
            </Affix>
          </div>
        </div>      
    );
  }
}
