import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";


import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
// function Link(props) {
//   return (
//     <Text
//       {...props}
//       accessibilityRole="link"
//       style={StyleSheet.compose(styles.link, props.style)}
//     />
//   );
// }

const Tab = styled.button`
  padding: 15px 50px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            <a href="#Home" tabindex="-1">{type}</a>
          </Tab>
        ))}
      </div>
      <p />

    </>
  );
}

const types = ["Home", "Profile"];

function App() {
  return (
    <View style={styles.app}>
      {/*<View style={styles.header}>
        <Image
          accessibilityLabel="React logo"
          source={{ uri: logo }}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>React Native for Web</Text>
      </View>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Text style={styles.text}>
        To get started, edit{" "}
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          src/App.js
        </Link>
        .
      </Text>
      <TabGroup />
      */}
      <Navbar />

    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    // marginHorizontal: "auto",
    // maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
