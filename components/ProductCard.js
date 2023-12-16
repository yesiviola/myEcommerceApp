import * as React from "react";
import { View, Text, Pressable, Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "./useColorScheme";




export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
  addToCart,
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30, padding: 10, margin: 10}}>
      <View style={{ backgroundColor: 'white', borderRadius: 30}}>
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 200 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginTop: 8}}>
        <Text style={{ fontSize: 16, color: 'black'}}>
          {category}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 3}}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
              name="minuscircleo"
              size={20}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text style={{ fontSize: 20, color: 'black '}}>{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          style={{ fontSize: 14,color: 'black '}}
        >
          {description}
        </Text>
        <Pressable style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: 'black', padding: 15, width: '80%', alignSelf: 'center', marginTop: 20}}
          onPress={()  => addToCart({image, category, title, price, description,count})}
          >
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

