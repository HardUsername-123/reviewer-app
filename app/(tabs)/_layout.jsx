import React from "react";
import { Tabs, useRouter } from "expo-router";
import { FontAwesome, Feather, Fontisto } from "@expo/vector-icons";
import { BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          barStyle={{ backgroundColor: Colors.secondary }} // Change the tab bar color to Colors.secondary
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            const iconColor = focused ? Colors.primary : color; // Use Colors.primary when focused

            if (options.tabBarIcon) {
              return options.tabBarIcon({
                focused,
                color: iconColor,
                size: 24,
              });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
          // Set label color to Colors.primary
          labelStyle={{
            color: Colors.primary,
          }}
        />
      )}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={Colors.secondary} /> // Icon color set to Colors.primary
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={Colors.secondary} /> // Icon color set to Colors.secondary
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Fontisto
              name="player-settings"
              size={24}
              color={Colors.secondary}
            /> // Icon color set to Colors.primary
          ),
        }}
      />
    </Tabs>
  );
}
