import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
