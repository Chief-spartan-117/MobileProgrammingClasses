import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Fab() {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 110,
          right: 24,
          backgroundColor: "#2E4EA4",
          width: 56,
          height: 56,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.8,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 8,
        }}
        onPress={() => router.push("/modal")}
      >
        <Text style={{ color: "white", fontSize: 28, lineHeight: 28 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
