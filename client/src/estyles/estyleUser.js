import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    paddingBottom: "5%",
    paddingTop: "5%",
    paddingLeft: "5%",
    backgroundColor: "#BE543A",
    image: {
      marginRight: 10,
      width: 80,
      height: 80,
    },
    text: {
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: 25,
      lineHeight: 26,
      color: "#FFFFFF",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  containerCard: {
    width: "95%",
    margin: 10,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 3,
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      iconContainerStyle: { marginRight: 10 },
      titleStyle: { fontWeight: "700" },
      buttonStyle: {
        backgroundColor: "rgba(90, 154, 230, 1)",
        borderWidth: 0,
        borderRadius: 5,
      },
      containerStyle: {
        width: "50%",
      },
    },
    text: {
      color1: {
        color: "#BE543A",
      },
      color2: {
        color: "#5AA19B",
      },
    },
  },
  card: {
    flex: 1,
    alignItems: "center",
  },
  cardEstado: {
    position: "relative",
    right: -25,
    width: 200,
    height: 50,
    backgroundColor: "#BE543A",
    shadowColor: "#BE543A",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
    shadowOpacity: 100,
    shadowRadius: 4,
    borderRadius: 3,
  },
});
