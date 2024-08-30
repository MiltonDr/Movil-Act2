import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [blueMargaritaData, setBlueMargaritaData] = useState([]);
  const [moscowMuleData, setMoscowMuleData] = useState([]);
  const [londonTownData, setLondonTownData] = useState([]);
  const [barracudaData, setBarracudaData] = useState([]);
  const [b53Data, setB53Data] = useState([]);
  const [avalancheData, setAvalancheData] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const urlBase = 'https://thecocktaildb.com/api/json/v1/1/';

  const fetchData = (cocktail, setData) => {
    fetch(`${urlBase}search.php?s=${cocktail}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.drinks || []);
      })
      .catch((error) => console.log(error));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.Text}>Bienvenido a CoctelesBar</Text>
        <Button onPress={toggleVisibility} style={styles.button} title='Menu'></Button>
        <StatusBar style='auto' />
      </View>

      {isVisible && (
        <View style={styles.boxPopular}>
          <View style={styles.popularSection}>
            <Text style={styles.Text}>Most Populars</Text>
            <View style={styles.drinksContainer}>
              <Button
                onPress={() => fetchData('Blue Margarita', setBlueMargaritaData)}
                style={styles.button}
                title='Blue Margarita'
              />
              {blueMargaritaData.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>

            <View style={styles.drinksContainer}>
              <Button
                onPress={() => fetchData('Moscow Mule', setMoscowMuleData)}
                style={styles.button}
                title='Moscow Mule'
              />
              {moscowMuleData.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>

            <View style={styles.drinksContainer}>
              <Button
                onPress={() => fetchData('London Town', setLondonTownData)}
                style={styles.button}
                title='London Town'
              />
              {londonTownData.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {isVisible && (
        <View style={styles.boxSpecial}>
          <View style={styles.popularSection}>
            <Text style={styles.Text}>Special Edition</Text>
            <View style={styles.drinksContainer}>
              <Button
                onPress={() => fetchData('Barracuda', setBarracudaData)}
                style={styles.button}
                title='Barracuda'
              />
              {barracudaData.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>
            <View style={styles.drinksContainer}>
              <Button onPress={() => fetchData('B-53', setB53Data)} style={styles.button} title='B-53' />
              {b53Data.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>
            <View style={styles.drinksContainer}>
              <Button
                onPress={() => fetchData('Avalanche', setAvalancheData)}
                style={styles.button}
                title='Avalanche'
              />
              {avalancheData.map((drink) => (
                <View key={drink.idDrink}>
                  <Text>Nombre: {drink.strDrink}</Text>
                  <Text>Ingrediente1: {drink.strIngredient1}</Text>
                  <Text>Ingrediente2: {drink.strIngredient2}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    height: '15%',
    width: '100%',
    backgroundColor: 'lightblue',
    marginBottom: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxSpecial: {
    height: '41%',
    width: '100%',
    backgroundColor: 'lightgreen',
    marginBottom: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
  boxPopular: {
    height: '41%',
    width: '100%',
    backgroundColor: 'lightgreen',
    marginBottom: '1%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    padding: '2%',
  },
  popularSection: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  drinksContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
});
