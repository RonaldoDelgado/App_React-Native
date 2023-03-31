import React from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { styles } from "../estyles/estyleUser";

export default function CardUserShop(props) {
  console.log("Props", props);
  const date = new Date(props.createdAt);
  const optionDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatted = date.toLocaleString("es-Es", optionDate);
  const { description, estate, numberBill } = props;

  return (
    <View style={styles.containerCard}>
      <View style={styles.containerCard.row}>
        <Text>N° {numberBill}</Text>
        <Text>{dateFormatted}</Text>
      </View>
      <View>
        <Text>{description}</Text>
      </View>
      <View>
        <View style={styles.cardEstado}></View>
      </View>
    </View>
  );
}
