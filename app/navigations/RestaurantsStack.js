import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../screens/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={TopRestaurants}
        options={{ title: "Restaurantes" }}
      />
    </Stack.Navigator>
  );
}
