import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Tabs } from "expo-router";
import { Home, Store } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
        tabBar={(props) => (
          <View
            style={{
              // marginBottom: 8,
              flexDirection: "row",
              marginHorizontal: "auto",
              backgroundColor: "white",
              paddingHorizontal: 8,
              paddingVertical: 8,
              borderRadius: 999,
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: [
                {
                  translateX: "-50%",
                },
              ],
              // gap: 8,
            }}
          >
            {props.state.routes.map((route, index) => {
              const focused = props.state.index === index;
              const { options } = props.descriptors[route.key];

              const icon = options.tabBarIcon
                ? options.tabBarIcon({
                    focused,
                    color: focused ? "#4260B2" : "black",
                    size: 0,
                  })
                : null;
              return (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 42,
                    paddingVertical: 8,
                    borderRadius: 999,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: focused ? "#ECEFF7" : "transparent",
                  }}
                  key={route.key}
                  onPress={() => props.navigation.navigate(route.name)}
                >
                  {icon}
                  <Text
                    style={{
                      color: focused ? "#4260B2" : "black",
                      fontFamily: "EuclidCircularB",
                    }}
                  >
                    {options.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Home size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="inventory"
          options={{
            title: "Inventory",
            tabBarIcon: ({ color }) => <Store size={28} color={color} />,
          }}
        />
      </Tabs>
      {/* </GestureHandlerRootView> */}
    </>
  );
}
