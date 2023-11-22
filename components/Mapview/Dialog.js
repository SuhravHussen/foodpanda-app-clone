import { StyleSheet, Text } from "react-native";
import React from "react";
import { Dialog, Button } from "@rneui/themed";

export default function AlertDialog({ dialogOpen, setDialogOpen }) {
  return (
    <Dialog
      isVisible={dialogOpen}
      overlayStyle={{
        borderRadius: 8,
        width: "90%",
        gap: 25,
      }}
    >
      <Text style={styles.header}>We don't deliver here yet</Text>

      <Text style={styles.text}>
        We are expanding quickly and hopefully will soon!
      </Text>

      <Button
        title="Change address"
        onPress={() => setDialogOpen(false)}
        size="lg"
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        radius={6}
      />
    </Dialog>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 17,
    // marginVertical: 13,
  },
  text: {
    // marginVertical: 13,
  },
});
