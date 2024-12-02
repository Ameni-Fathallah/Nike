import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, FlatList, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation(); // No need to destructure `navigation` from props
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable style={styles.itemContainer} onPress={() => navigation.navigate('Product Detail', { productId: item.id })}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    width: "50%", // Takes half of the width per item
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1, // Keeps the image square
    borderRadius: 10,
  },
});

export default ProductScreen;
