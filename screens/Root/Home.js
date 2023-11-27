import React, { useRef, useState } from "react";
import { View, Text, ScrollView, LayoutAnimation } from "react-native";
import AnimatedSearchBar from "../../components/Root/Home/AnimatedSearchBar";
import { theme } from "../../theme";
import Hero from "../../components/Root/Home/Hero/Hero";
const MyComponent = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
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
      setScrollDirection("down");
      setTopValue(-200);
    } else if (scrollDelta < -3) {
      LayoutAnimation.configureNext({
        duration: 300,
        create: { type: "linear", property: "opacity" },
        update: { type: "linear", property: "opacity" },
        delete: { type: "linear", property: "opacity" },
      });
      setScrollDirection("up");
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

// import React from "react";
// import {
//   View,
//   Animated,
//   Text,
//   StyleSheet,
//   ScrollView,
//   RefreshControl,
// } from "react-native";
// import { theme } from "../../theme";

// const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// const App = () => {
//   const scrollY = React.useRef(new Animated.Value(0)).current;
//   const diffClamp = Animated.diffClamp(scrollY, 0, 100);

//   const translateY = diffClamp.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, -60],
//     extrapolate: "clamp",
//   });

//   const marginTop = diffClamp.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, -60],
//     extrapolate: "clamp",
//   });

//   const paddingTop = diffClamp.interpolate({
//     inputRange: [0, 100],
//     outputRange: [10, 110],
//     extrapolate: "clamp",
//   });

//   const opacity = diffClamp.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0],
//     extrapolate: "clamp",
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View
//         style={{
//           zIndex: 0,
//           paddingBottom: 10,
//           transform: [{ translateY }],
//           backgroundColor: "red",
//         }}
//       >
//         <Animated.View style={[styles.searchBar, { opacity }]}>
//           <Text>Search Bar</Text>
//         </Animated.View>
//       </Animated.View>
//       <Animated.ScrollView
//         style={{ marginTop, paddingTop }}
//         scrollEventThrottle={16}
//         onScroll={(e) => {
//           if (e.nativeEvent.contentOffset.y > 0)
//             scrollY.setValue(e.nativeEvent.contentOffset.y);
//         }}
//       >
//         <Text
//           style={{
//             backgroundColor: "pink",
//             height: 400,
//           }}
//         >
//           Djisdjosidjsi
//         </Text>
//         <Text
//           style={{
//             backgroundColor: "pink",
//             height: 400,
//           }}
//         >
//           Djisdjosidjsi
//         </Text>
//         <Text
//           style={{
//             backgroundColor: "pink",
//             height: 400,
//           }}
//         >
//           Djisdjosidjsi
//         </Text>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   searchBar: {
//     marginHorizontal: "5%",
//     width: "90%",

//     borderRadius: 10,
//     borderColor: "lightgray",
//     borderWidth: 1,
//     backgroundColor: "#f4f4f4",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: "90%",
//     marginLeft: "5%",
//     height: 100,
//     borderRadius: 10,
//     backgroundColor: "yellow",
//     marginBottom: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;
