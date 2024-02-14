import React, { Component } from "react";
import { ActionIcon, Group, Title } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

interface AppProps {
  isTheme: string;
  changeTheme: () => void;
}

class Header extends Component<AppProps> {
  render() {
    return (
      <Group position="apart">
        <Title
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          My tasks
        </Title>
        <ActionIcon onClick={this.props.changeTheme} color="blue" size="lg">
          {this.props.isTheme === "light" ? (
            <MoonStars size={16} />
          ) : (
            <Sun size={16} />
          )}
        </ActionIcon>
      </Group>
    );
  }
}

export default Header;
