import React, { useState }from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import ProductsList from "./components/ProductsList";


const someObject = {
  someProperty: 'someValue',
  anotherProperty: 'anotherValue',
};

export default function App() {
  const [ colorScheme, setColorScheme ] = React.useState('light');
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const toggleColorScheme = () => {
  setColorScheme(prevScheme => prevScheme === 'dark' ? 'light' : 'dark');
  };
  const isDark = colorScheme === 'dark';

  const addToCart = (product)=>{
    setCart((currentCart) => {
      const index = currentCart.findIndex((item) => item.title === product.title);
      if (index !== -1) {
        const newCart = [...currentCart];
        newCart[index].count += product.count;
        return newCart;
      }


      return [...currentCart, product];
    });
  };



  return (
    <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
      <View style={[styles.row, { flexDirection: 'center', justifyContent: 'space-between', alignItems: 'center', padding: 10}]}>
        <Text style={[styles.text, isDark && styles.darkText]}>Welcome to the store</Text>
        <Switch value={isDark} onValueChange={toggleColorScheme} />
      </View>
      <ProductsList addToCart={addToCart} />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
       <View>
        <Text>
          Shopping Cart:</Text>
          {cart.map((product, index) =>(
         <Text key={index}>{product.title} - Quantity: {product.count}</Text>
          ))}
       </View>
       <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text>{someObject.someProperty}</Text>


        <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
        onPress={() => setCount(count - 1)}
        >
        <AntDesign
         name="minuscircleo"
         size={20}
         color={colorScheme === "light" ? "white": "black"}
         />
        </TouchableOpacity>
        <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
        onPress={() => setCount(count + 1)}
        >
                  <AntDesign
                    name="pluscircleo"
                    size={20}
                    color={colorScheme === "light" ? "white" : "black"}
                  />
                </TouchableOpacity>
              </View>
              </SafeAreaView>
          );
        }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e5e5e5",
  },
  darkContainer: {
    backgroundColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
  }
);
