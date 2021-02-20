import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import {
  Div,
  ThemeProvider,
  Text,
  Button,
  Input,
  Icon,
  Image,
  Dropdown,
  Fab,
} from 'react-native-magnus';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const dropdownRef = React.createRef();
function HomeScreen({ navigation }) {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            margin: '5%',
            alignSelf: 'flex-end',
          }}>
          <Button
            bg="blue500"
            h={50}
            w={50}
            rounded="circle"
            onPress={() => dropdownRef.current.open()}>
            <Icon name="plus" color="white" />
          </Button>
        </View>
        <Dropdown
  ref={dropdownRef}
  title={
    <Div row mx="xl"  p="md" pb="lg">
    <Text
                color="#a6a6a6"
                flex={1}
                fontSize="xl"
                fontWeight="bold">
                Add Item
        </Text>
              <Button
                bg="transparent"
                color="black"
                position="absolute"
                left="70%"
                top={3}
                fontSize="xl"
                zIndex={1}
                onPress={() => dropdownRef.current.close()}>
                  <Icon name="close" mr="lg" color="red" fontSize="3xl" />
              </Button>
          
            </Div>
          }
          mt="md"
          pb="xl"
          showSwipeIndicator={false}
          roundedTop="xl">
          <Dropdown.Option
            py="lg"
            mx="xl"
            px="md"
            block
            prefix={
              <Icon name="user" mr="lg" color="red500" fontSize="3xl" />
            }>
            Profile
          </Dropdown.Option>
          <Dropdown.Option
            py="lg"
            mx="xl"
            px="md"
            block
            prefix={
              <Icon name="calendar" mr="lg" color="red" fontSize="3xl" />
            }>
            calendar
          </Dropdown.Option>
          <Dropdown.Option
            py="lg"
            mx="xl"
            px="md"
            block
            prefix={
              <Icon name="filetext1" mr="lg" color="green700" fontSize="3xl" />
            }>
            Notes
          </Dropdown.Option>
          <Dropdown.Option
            py="lg"
            mx="xl"
            px="md"
            block
            prefix={
              <Icon name="file1" mr="lg" color="red500" fontSize="3xl" />
            }>
            Documents
          </Dropdown.Option>
          </Dropdown>
      </SafeAreaView>
    </ThemeProvider>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Student" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}