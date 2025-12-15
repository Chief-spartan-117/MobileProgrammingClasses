import { LinearGradient } from "expo-linear-gradient";
import { Landmark } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Transactions({
  transactions,
}: {
  transactions: { amount: string; description: string; createdAt: string }[];
}) {
  return (
    <>
      <View
        style={{
          marginTop: 150,
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
        <LinearGradient
          colors={["rgba(36,53,98,0)", "rgba(255, 255, 255, 1)"]}
          style={{
            height: 200,
            position: "absolute",
            zIndex: 999,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        ></LinearGradient>
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
            Recent Transacations
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
        <View>
          {transactions.slice(0, 4).map((e, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#ffffff",
                justifyContent: "space-between",
                flexDirection: "row",
                // paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <View>
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <View
                    style={{
                      paddingVertical: 6,
                      paddingHorizontal: 6,
                      aspectRatio: "1/1",
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ECEFF7",
                    }}
                  >
                    <Landmark color={"#2F447E"} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
                      {e.description}
                    </Text>
                    <Text style={{ color: "#8d8d8dff", fontSize: 12 }}>
                      {e.description}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Rs. {e.amount}
                </Text>
                <Text style={{ fontSize: 12, color: "#848484" }}>
                  {new Date(e.createdAt).toLocaleTimeString()}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}
