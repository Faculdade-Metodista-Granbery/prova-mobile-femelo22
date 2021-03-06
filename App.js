import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import { colorDefault, colors } from './utils/colors';
import { ThemeProvider } from 'styled-components'


const notList = [
  { id: 1, task: 'Suco de gratidão + clorofila', background: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg'},
  { id: 2, task: 'Aplaudir o por do sol', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU'},
  { id: 3, task: '5 séries de namastê', background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU'},
]

export default function App() {
  return (
    <ThemeProvider theme={{ background: '#000', color: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={colorDefault.apple}
        />
        <FlatList
          data={notList}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <CardQuote
              task={item.task}
              background={item.background}
            />
          }
        >
          </FlatList>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorDefault.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});