import Expense from "@/components/pages/home/expense";
import Fab from "@/components/pages/home/fab";
import Transactions from "@/components/pages/home/transactions";
import { database } from "@/utils/firebase";
import { LinearGradient } from "expo-linear-gradient";
import { onValue, ref } from "firebase/database";
import { Bell, Building } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const inset = useSafeAreaInsets();
  const [transactions, setTransactions] = useState<
    { amount: string; description: string; createdAt: string }[]
  >([{ amount: "", description: "", createdAt: "" }]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const transactionsRef = ref(database, "transactions/");
    const unsubscribe = onValue(transactionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const transactions = Object.values(data) as {
          amount: string;
          description: string;
          createdAt: string;
        }[];
        setTransactions(transactions);

        const totalAmount = transactions.reduce(
          (acc, item) => acc + Number(item.amount),
          0
        );
        setTotal(totalAmount);
      } else {
        setTransactions([]);
        setTotal(0);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ScrollView>
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
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#8cabffff",
                  padding: 6,
                  borderRadius: 8,
                }}
              >
                <Building color="white" size={26} />
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "EuclidCircularB_medium",
                      color: "white",
                      // lineHeight: 18,
                    }}
                  >
                    Brand Connect
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#8cabffff",
                    fontSize: 12,
                    fontFamily: "EuclidCircularB",
                  }}
                >
                  Tap to switch
                </Text>
              </View>
            </View>
            <Bell color={"white"} strokeWidth={1.5} />
          </View>
        </LinearGradient>
        <View style={{ position: "relative" }}>
          <View
            style={{
              paddingHorizontal: 20,
              gap: 24,
              zIndex: 99,
              position: "absolute",
              width: "100%",
              top: -10,
            }}
          >
            <View
              style={{
                borderColor: "#ffffff",
                borderRadius: 8,
                borderWidth: 1,
                width: "100%",
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor: "#ffffff",
                }}
              >
                <Text
                  style={{
                    color: "#6a6a6aff",
                    fontSize: 14,
                    fontFamily: "EuclidCircularB",
                  }}
                >
                  Total Balance:
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 22,
                    fontWeight: "bold",
                    fontFamily: "EuclidCircularB",
                  }}
                >
                  Rs. {total}
                </Text>
              </View>
              <View
                style={{ borderColor: "#edededff", borderWidth: 0.5 }}
              ></View>
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#ffffff",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#6a6a6aff",
                      fontFamily: "EuclidCircularB",
                    }}
                  >
                    Income
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      fontWeight: "bold",
                      fontFamily: "EuclidCircularB",
                    }}
                  >
                    Rs. 0
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 1,
                    borderColor: "#f1f1f1ff",
                    borderWidth: 0.5,
                  }}
                ></View>
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={{ color: "#6a6a6aff" }}>Expense</Text>
                  <Text
                    style={{ color: "black", fontSize: 16, fontWeight: "bold" }}
                  >
                    Rs. 0
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Transactions transactions={transactions}></Transactions>
          <Expense />
        </View>
      </ScrollView>
      <Fab />
    </>
  );
}

const styles = StyleSheet.create({
  logoTitle: {
    color: "black",
    fontSize: 20,
    fontFamily: "EuclidCircularB",
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
