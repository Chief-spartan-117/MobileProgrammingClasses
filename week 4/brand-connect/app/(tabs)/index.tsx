import { Menu } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingHorizontal: 20, gap: 24 }}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingTop: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.logoTitle}>Brand Connect</Text>
        <Menu color="white" />
      </View>

      <View
        style={{
          borderColor: "#2b2b2bff",
          borderRadius: 8,
          borderWidth: 1,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: "#1a1a1aff",
          }}
        >
          <Text style={{ color: "#afafafff", fontSize: 14 }}>
            Total Balance:
          </Text>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Rs. 10,000.00
          </Text>
        </View>
        <View style={{ borderColor: "#2b2b2bff", borderWidth: 1 }}></View>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#afafafff" }}>Income</Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Rs. 15,000.00
            </Text>
          </View>
          <View
            style={{
              height: 16,
              width: 2,
              borderColor: "#2b2b2bff",
              borderWidth: 1,
            }}
          ></View>
          <View>
            <Text style={{ color: "#afafafff" }}>Income</Text>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Rs. 15,000.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoTitle: {
    color: "white",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
