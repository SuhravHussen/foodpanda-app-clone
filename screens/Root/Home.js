import React, { useRef, useState } from "react";
import { View, Text, ScrollView, LayoutAnimation } from "react-native";
import AnimatedSearchBar from "../../components/Root/Home/AnimatedSearchBar";
import { theme } from "../../theme";
import Hero from "../../components/Root/Home/Hero/Hero";
const MyComponent = () => {
  const prevScrollY = useRef(0);
  const [topValue, setTopValue] = useState(0);

  const onScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const scrollDelta = currentScrollY - prevScrollY.current;

    if (scrollDelta > 3) {
      LayoutAnimation.configureNext({
        duration: 300,
        create: { type: "linear", property: "opacity" },
        update: { type: "linear", property: "opacity" },
        delete: { type: "linear", property: "opacity" },
      });

      setTopValue(-200);
    } else if (scrollDelta < -3) {
      LayoutAnimation.configureNext({
        duration: 300,
        create: { type: "linear", property: "opacity" },
        update: { type: "linear", property: "opacity" },
        delete: { type: "linear", property: "opacity" },
      });

      setTopValue(0);
    }

    prevScrollY.current = currentScrollY;
  };

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <AnimatedSearchBar topValue={topValue} />

      <ScrollView
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        style={{
          zIndex: -1,
        }}
      >
        <Hero />
        <Text
          style={{
            height: 300,
            backgroundColor: "red",
          }}
        >
          Scroll content
        </Text>
        <Text
          style={{
            height: 300,
            backgroundColor: "blue",
          }}
        >
          Scroll content
        </Text>
      </ScrollView>
    </View>
  );
};

export default MyComponent;
