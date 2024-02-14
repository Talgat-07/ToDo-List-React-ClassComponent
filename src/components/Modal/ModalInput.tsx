import React, { ChangeEvent, Component } from "react";
import { TextInput } from "@mantine/core";

interface AppProps {
  setInputOne: (value: string) => void;
  setInputTwo: (value: string) => void;
}

class ModalInput extends Component<AppProps> {
  render() {
    return (
      <div>
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.props.setInputOne(e.target.value)
          }
          mt="md"
          placeholder="Task Title"
          label="Title"
        />
        <TextInput
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.props.setInputTwo(e.target.value)
          }
          mt="md"
          placeholder="Task Summary"
          label="Summary"
        />
      </div>
    );
  }
}

export default ModalInput;
