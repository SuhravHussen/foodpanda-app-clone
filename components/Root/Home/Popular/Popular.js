// @ts-nocheck
import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../../../styles/screen/home/popular-styles";
import getRestaurents from "../../../../lib/getRestaurents";

export default function Popular() {
  const [popularRestaurants, setPopularRestaurants] = useState([]);

  useEffect(() => {
    const res = getRestaurents();
    // @ts-ignore
    setPopularRestaurants(res);
  }, []);

  return (
    <View style={styles.popularContainer}>
      <Text style={styles.heading}>Popular Restaurants</Text>
      <ScrollView horizontal style={styles.allRestaurantsContainer}>
        {popularRestaurants.map((res, i) => {
          return (
            <View key={i} style={styles.singleRestaurantContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={res.cover}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  }}
                />
                <Text style={styles.discountText}>
                  {res.discount ? res.discount + " off" : ""}
                </Text>
                <Text style={styles.couponText}>
                  {res.coupon &&
                    `৳${res.coupon.off} at ${res.coupon.at}:${res.coupon.code}`}
                </Text>
                <Text style={styles.deliveryTime}>
                  {res.deliveryTimeInMinutes} min
                </Text>
              </View>
              <Text style={styles.title}>{res.name}</Text>
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tag}>
                ৳৳৳ -{" "}
                {res.tags.map((t, i) => (
                  <Text key={i}>{t}, </Text>
                ))}
              </Text>
              <Text style={styles.deliveryFee}>
                ৳{res.deliveryFee} delivery fee
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
