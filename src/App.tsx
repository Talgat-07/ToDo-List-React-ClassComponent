import React, { Component } from "react";
import { ColorScheme, Container, MantineProvider, Text } from "@mantine/core";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import ButtonNewTask from "./components/ButtonNewTask";
import ModalWindow from "./components/Modal/ModalWindow";

interface AppProps {}

interface AppState {
  isTheme: string;
  isInputsValue: Array<{ id: number; title: string; summary: string }>;
  isModalOpen: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isTheme: localStorage.getItem("localTheme") || "light",
      isInputsValue: JSON.parse(localStorage.getItem("isInputsValue") || "[]"),
      isModalOpen: false,
    };
  }

  changeTheme = () => {
    this.setState(
      (prevState) => ({
        isTheme: prevState.isTheme === "light" ? "dark" : "light",
      }),
      () => {
        localStorage.setItem("localTheme", this.state.isTheme);
      },
    );
  };

  closeModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  addInputs = (one: string, two: string): void => {
    const item: { id: number; title: string; summary: string } = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: one,
      summary: two,
    };
    localStorage.setItem(
      "isInputsValue",
      JSON.stringify([...this.state.isInputsValue, item]),
    );
    this.setState(() => ({
      isInputsValue: JSON.parse(localStorage.getItem("isInputsValue") || "[]"),
    }));
  };

  deleteToDo = (e: number): void => {
    const item = this.state.isInputsValue.filter((el) => el.id !== e);
    localStorage.setItem("isInputsValue", JSON.stringify(item));
    this.setState(() => ({
      isInputsValue: JSON.parse(localStorage.getItem("isInputsValue") || "[]"),
    }));
  };

  render() {
    return (
      <MantineProvider
        theme={{
          colorScheme: this.state.isTheme as Partial<ColorScheme>,
          defaultRadius: "md",
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <ModalWindow
          closeModal={this.closeModal}
          isModalOpen={this.state.isModalOpen}
          addInputs={this.addInputs}
        />
        <Container sx={{ background: "inherit" }} size={550} my={40}>
          <Header isTheme={this.state.isTheme} changeTheme={this.changeTheme} />
          {this.state.isInputsValue.length > 0 ? (
            this.state.isInputsValue.map((e) => (
              <TaskList
                deleteToDo={this.deleteToDo}
                key={e.id}
                isInputsValue={e}
              />
            ))
          ) : (
            <Text sx={{ marginTop: "20px" }}>You have no tasks</Text>
          )}
          <ButtonNewTask closeModal={this.closeModal} />
        </Container>
      </MantineProvider>
    );
  }
}

export default App;
