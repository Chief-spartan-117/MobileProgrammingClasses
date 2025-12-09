import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import React from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      {/* <LinearGradient
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
      </LinearGradient> */}
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={"black"} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>
      {/* </GestureHandlerRootView> */}
    </>
  );
}
