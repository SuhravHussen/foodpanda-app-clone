// @ts-nocheck
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";

import getCuisinesList from "../../../../lib/getCuisinesList";
import styles from "../../../../styles/screen/home/cuisines-styles";

function Cuisines() {
  const cuisinesList = getCuisinesList();

  return (
    <View style={styles.cuisineContainer}>
      <Text style={styles.heading}>Cuisines</Text>

      <ScrollView horizontal style={styles.allCuisineContainer}>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          numColumns={Math.ceil(cuisinesList.length / 2)}
          data={cuisinesList}
          keyExtractor={(i) => i.id}
          renderItem={({ item, i }) => (
            <View style={styles.singleCuisineContainer}>
              <View style={styles.imageView}>
                <Image source={item.Image} style={styles.image} l />
              </View>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {item.title}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default React.memo(Cuisines);
