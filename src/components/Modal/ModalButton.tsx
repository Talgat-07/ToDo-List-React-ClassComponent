import React, { Component } from "react";
import { Button, Group } from "@mantine/core";

interface AppProps {
  closeModal: () => void;
  addInputs: () => void;
}

class ModalButton extends Component<AppProps> {
  render() {
    return (
      <Group mt="md" position="apart">
        <Button onClick={this.props.closeModal} variant="subtle">
          Cancel
        </Button>
        <Button
          onClick={() => {
            this.props.addInputs();
            this.props.closeModal();
          }}
        >
          Create task
        </Button>
      </Group>
    );
  }
}

export default ModalButton;
