import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref, set } from "firebase/database";
import { database } from "../utils/firebase";
import { useState } from "react";
import { router } from "expo-router";

export default function ModalScreen() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    console.log("Add Transaction");
    const id = Date.now();
    set(ref(database, "transactions/" + id), {
      description,
      amount,
      createdAt: new Date().toISOString(),
    })
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
      }}
    >
      <View style={{ gap: 12 }}>
        <View style={{ gap: 6 }}>
          <Text style={{ fontWeight: "bold", fontFamily: "EuclidCircularB" }}>
            Amount
          </Text>
          <TextInput
            placeholder="Enter your amount"
            keyboardType="number-pad"
            value={amount}
            onChangeText={setAmount}
            style={{
              borderColor: "#d6d6d6ff",
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
          ></TextInput>
        </View>
        <View style={{ gap: 6 }}>
          <Text style={{ fontWeight: "bold", fontFamily: "EuclidCircularB" }}>
            Description
          </Text>
          <TextInput
            placeholder="Describe"
            value={description}
            onChangeText={setDescription}
            style={{
              borderColor: "#d6d6d6ff",
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
          ></TextInput>
        </View>
      </View>
      <Button title="Add Transaction" onPress={addTransaction} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
