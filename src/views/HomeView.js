import React from "react";

const styles = {
  container: {
    minHeight: "calc(100vh - 300px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 50,
    textAlign: "center",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome! </h1>
    <h2 style={styles.title}> You can add new contacts!</h2>
  </div>
);

export default HomeView;
