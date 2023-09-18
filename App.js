// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    padding: 10,

  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 150,
    height: 150,
    marginBottom: -120,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    marginBottom: -150,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
    title: 'Browse  Food',
    image: require('./iconone.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's2',
    title: 'Order Food',
    text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
    image: require('./icon2.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's3',
    title: 'Make Reservations',
    text: 'Book a table in advance to avoid waiting in line',
    image: require('./icon3.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's4',
    title: 'Quick Search',
    text: ' Quickly find food items you like the most',
    image: require('./icon4.png'),
    backgroundColor: '#5EA33A',
  },
  {
    key: 's5',
    title: 'Apple Pay',
    text: 'We know you’re busy, so you can pay with your phone in just one click',
    image: require('./icon5.png'),
    backgroundColor: '#5EA33A',
  },
];
