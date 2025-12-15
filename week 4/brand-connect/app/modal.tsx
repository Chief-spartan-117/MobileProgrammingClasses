import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ref, set } from "firebase/database";
import { ArrowLeft, Bell } from "lucide-react-native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { database } from "../utils/firebase";

export default function ModalScreen() {
  const inset = useSafeAreaInsets();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addTransaction = () => {
    console.log("Add Transaction");
    const id = Date.now();
    set(ref(database, "transactions/" + id), {
      description,
      amount,
      createdAt: new Date().toISOString(),
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <LinearGradient
        colors={["rgba(36,53,98,1)", "rgba(46,78,164,1)"]}
        style={{
          paddingTop: inset.top,
          borderCurve: "circular",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          position: "relative",
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 24,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              display: "flex",
              gap: 8,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <TouchableOpacity
                  onPress={router.back}
                  style={{
                    borderColor: "#8cabffff",
                    borderWidth: 1,
                    aspectRatio: "1/1",
                    borderRadius: 4,
                    padding: 4,
                  }}
                >
                  <ArrowLeft color={"white"} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "EuclidCircularB_medium",
                    color: "white",
                    // lineHeight: 18,
                  }}
                >
                  Add Revenue
                </Text>
              </View>
            </View>
          </View>
          <Bell color={"white"} strokeWidth={1.5} />
        </View>
      </LinearGradient>
      <View
        style={{
          height: "100%",
          backgroundColor: "#ffffff",
          paddingHorizontal: 16,
          paddingTop: inset.top,
          gap: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            // justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#8094CB",
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 8,
              width: "33%",
            }}
          >
            <Text style={{ textAlign: "center" }}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#8094CB",
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 8,
              width: "33%",
            }}
          >
            <Text style={{ textAlign: "center" }}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#8094CB",
              paddingHorizontal: 4,
              paddingVertical: 8,
              borderRadius: 8,
              width: "33%",
            }}
          >
            <Text style={{ textAlign: "center" }}>Transfer</Text>
          </TouchableOpacity>
        </View>
        {/* <SegmentedControl
          values={["One", "Two"]}
          style={{
            height: 50,
            backgroundColor: "white",
          }}
        /> */}
        <View style={{ gap: 12 }}>
          <TextInput
            placeholder="Items Name"
            value={name}
            onChangeText={setName}
            style={{
              borderColor: "#d6d6d6ff",
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
          ></TextInput>
          <TextInput
            placeholder="Amount"
            keyboardType="number-pad"
            value={amount}
            onChangeText={setAmount}
            style={{
              borderColor: "#d6d6d6ff",
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
          ></TextInput>{" "}
          <TextInput
            placeholder="Quantity"
            keyboardType="number-pad"
            value={quantity}
            onChangeText={setQuantity}
            style={{
              borderColor: "#d6d6d6ff",
              borderWidth: 1,
              borderRadius: 4,
              paddingHorizontal: 16,
            }}
          ></TextInput>
          <View style={{ gap: 6 }}>
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
        <TouchableOpacity
          onPress={addTransaction}
          style={{
            width: "100%",
            backgroundColor: "#243562",
            paddingVertical: 12,
            borderRadius: 8,
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Add Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </>
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
