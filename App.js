import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import starry from "./assets/sn.jpg";
import gw from "./assets/gw.jpg";
import cafe from "./assets/ct.jpg";
import mona from "./assets/mn.jpg";
import pica from "./assets/pic.jpg";
import { PaperProvider } from "react-native-paper";
import {
  Text,
  TextInput,
  RadioButton,
  Button,
  Dialog,
  Portal,
} from "react-native-paper";
import { useState } from "react";

function HomeScreen() {
  return (
    <>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Image source={starry} />
      </View> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
            } else if (route.name === "Feed") {
              iconName = focused
                ? "arrow-forward-circle"
                : "arrow-forward-circle-outline";
            } else if (route.name === "Article") {
              iconName = focused ? "book" : "book-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarBadge: 4 }}
      /> */}
        {/* <Tab.Screen 
        name="Feed" 
        component={Feed} 
        options={{ tabBarBadge: 6 }} /> */}
        <Tab.Screen
          name="Article"
          component={Article}
          options={{ tabBarBadge: 7 }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarBadge: 7 }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarBadge: 5 }}
        />
      </Tab.Navigator>
    </>
  );
}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Article")}
        title="Go to article"
      />
      <Image source={gw} />
      <Text>Feed!</Text>
    </View>
  );
}

function Article({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [coffee, setCoffee] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button onPress={() => navigation.navigate("Feed")} title="Go to feed" /> */}
      {/* <Image source={cafe} /> */}
      <TextInput
        label="Your Name:"
        onChangeText={(name) => setName(name)}
        value={name}
        style={{
          width: "60%",
        }}
      />
      <TextInput
        label="Your Age:"
        onChangeText={(age) => setAge(age)}
        value={age}
        style={{
          width: "60%",
        }}
      />
      <View>
        <Text>Like coffee?</Text>
        <RadioButton
          value="like"
          status={coffee === "like" ? "checked" : "unchecked"}
          onPress={() => setCoffee("like")}
        />
      </View>

      <View>
        <Text>Dislike coffee?</Text>
        <RadioButton
          value="dislike"
          status={coffee === "dislike" ? "checked" : "unchecked"}
          onPress={() => setCoffee("dislike")}
        />
      </View>

      <Button icon="send-circle" mode="contained" onPress={showDialog}>
        Submit
      </Button>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title>Summary</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              My name is {name} , I am {age}, I {coffee} coffee{" "}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
      <Image source={mona} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Image source={pica} />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Feed" component={Feed} />
            {/* <Drawer.Screen name="Article" component={Article} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Profiles" component={ProfileScreen} /> */}
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
// https://reactnavigation.org/docs/nesting-navigators/
