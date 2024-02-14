import React, { Component } from "react";
import { Modal } from "@mantine/core";
import ModalInput from "./ModalInput";
import ModalButton from "./ModalButton";

interface AppProps {
  isModalOpen: boolean;
  closeModal: () => void;
  addInputs: (one: string, two: string) => void;
}

interface AppState {
  isInputOne: string;
  isInputTwo: string;
}

class ModalWindow extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isInputOne: "",
      isInputTwo: "",
    };
  }

  setInputOne = (e: string) => {
    this.setState(() => ({
      isInputOne: e,
    }));
  };
  setInputTwo = (e: string) => {
    this.setState(() => ({
      isInputTwo: e,
    }));
  };

  addInputsButton = () => {
    if (this.state.isInputOne !== "" && this.state.isInputTwo !== "") {
      this.props.addInputs(this.state.isInputOne, this.state.isInputTwo);
    }
    this.setState(() => ({
      isInputOne: "",
      isInputTwo: "",
    }));
  };

  render() {
    return (
      <Modal
        opened={this.props.isModalOpen}
        size="md"
        title="New Task"
        withCloseButton={false}
        onClose={this.props.closeModal}
        centered
      >
        <ModalInput
          setInputOne={this.setInputOne}
          setInputTwo={this.setInputTwo}
        />
        <ModalButton
          addInputs={this.addInputsButton}
          closeModal={this.props.closeModal}
        />
      </Modal>
    );
  }
}

export default ModalWindow;
