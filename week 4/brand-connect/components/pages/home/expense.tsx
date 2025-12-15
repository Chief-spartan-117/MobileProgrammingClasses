import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function Expense() {
  const barData = [
    { value: 250, label: "M" },

    { value: 500, label: "T", frontColor: "#177AD5" },

    { value: 745, label: "W", frontColor: "#177AD5" },

    { value: 320, label: "T" },

    { value: 600, label: "F", frontColor: "#177AD5" },

    { value: 256, label: "S" },

    { value: 300, label: "S" },
  ];
  return (
    <View
      style={{
        marginTop: 16,
        marginBottom: 120,
        marginHorizontal: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 16,
        borderRadius: 8,
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "EuclidCircularB",
            fontSize: 18,
            fontWeight: "semibold",
          }}
        >
          Expense Trend
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#aaaaaa",
            paddingHorizontal: 6,
            borderRadius: 999,
            paddingVertical: 4,
          }}
        >
          <Text style={{ fontSize: 12 }}>View All</Text>
        </TouchableOpacity>
      </View>
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
}
