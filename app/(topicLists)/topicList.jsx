import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { Link, useNavigation } from "expo-router";

const categories = [
  {
    id: "1",
    title: "Introduction to Criminology",
    icon: "book-outline",
  },
  {
    id: "2",
    title: "Theories of Crime Causation",
    icon: "book-outline",
  },
  {
    id: "4",
    title: "Professional Conduct and Ethical",
    icon: "book-outline",
  },
  {
    id: "5",
    title: "Juvenile Deliquency and Juvenile",
    icon: "book-outline",
  },
  {
    id: "6",
    title: "Dispute Resolution and Crisis/Incident Management",
    icon: "book-outline",
  },
  {
    id: "7",
    title: "Human Behavior and Victimonology",
    icon: "book-outline",
  },
];

const TopicLists = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Topic List",
      headerStyle: {
        backgroundColor: Colors.secondary,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "outfit-bold",
      },
    });
  }, []);

  const renderItem = ({ item, index }) => (
    <Link href={"/topic"} asChild>
      <TouchableOpacity style={styles.pickerButton}>
        <View style={styles.categoryContent}>
          <View
            style={{
              backgroundColor: Colors.primary,
              width: 30,
              height: 30,
              borderRadius: 99,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "outfit",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              {index + 1}
            </Text>
          </View>
          <Text style={styles.categoryText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Topic List</Text>
      <Text style={styles.subtitle}>
        Discover Essential Topics and Enhance Your Learning Journey
      </Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopicLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8",
  },
  header: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    // marginBottom: 20,
    textAlign: "center",
    color: Colors.primary,
    letterSpacing: 1,
  },
  categoryContainer: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 2, // Android shadow
    transform: [{ scale: 1 }],
    transition: "transform 0.2s",
  },
  pickerButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  categoryContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    marginRight: 15,
    color: Colors.primary,
  },
  categoryText: {
    fontSize: 18,
    color: "#4a4a4a",
    fontFamily: "outfit",
  },
  subtitle: {
    fontFamily: "outfit",
    color: "gray",
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
