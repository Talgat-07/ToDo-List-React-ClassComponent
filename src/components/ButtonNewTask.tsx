import React, { Component } from "react";
import { Button } from "@mantine/core";

interface AppProps {
  closeModal: () => void;
}

class ButtonNewTask extends Component<AppProps> {
  render() {
    return (
      <Button
        onClick={this.props.closeModal}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        New Task
      </Button>
    );
  }
}

export default ButtonNewTask;
