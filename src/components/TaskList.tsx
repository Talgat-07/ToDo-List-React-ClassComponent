import React, { Component } from "react";
import { ActionIcon, Card, Group, Text } from "@mantine/core";
import { Trash } from "tabler-icons-react";

interface AppProps {
  isInputsValue: { id: number; title: string; summary: string };
  deleteToDo: (value: number) => void;
}

class TaskList extends Component<AppProps> {
  render() {
    return (
      <Card withBorder mt="sm">
        <Group position="apart">
          <Text weight="bold">{this.props.isInputsValue.title}</Text>
          <ActionIcon
            onClick={() => this.props.deleteToDo(this.props.isInputsValue.id)}
            color="red"
            variant="transparent"
          >
            <Trash />
          </ActionIcon>
        </Group>
        <Text>{this.props.isInputsValue.summary}</Text>
      </Card>
    );
  }
}

export default TaskList;
