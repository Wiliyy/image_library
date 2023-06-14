import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [active_index, setActive_index] = useState(0);
  const [images_width, setimages_width] = useState("100%");
  const [images_hight, setimages_hight] = useState(350);
  const [sorted, setSorted] = useState(false);

  const images = [];
  for (let index = 0; index < 10; index++) {
    images.push({ src: `https://picsum.photos/seed/${index}/200/300`, index });
  }
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.menuButtons}>
          <Pressable
            style={active_index == 0 ? styles.activeButton : styles.menuButton}
            onPress={() => {
              setActive_index(0);
              setimages_width("100%");
              setimages_hight(350);
            }}
          >
            <Text style={styles.text}>حجم كبير</Text>
          </Pressable>
          <Pressable
            style={active_index == 1 ? styles.activeButton : styles.menuButton}
            onPress={() => {
              setActive_index(1);
              setimages_width("50%");
              setimages_hight(350);
            }}
          >
            <Text style={styles.text}>حجم وسط</Text>
          </Pressable>
          <Pressable
            style={active_index == 2 ? styles.activeButton : styles.menuButton}
            onPress={() => {
              setActive_index(2);
              setimages_width("33%");
              setimages_hight(250);
            }}
          >
            <Text style={styles.text}>حجم صغير</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            setSorted((prev) => !prev);
          }}
          style={{ position: "absolute", right: 0, marginRight: 15 }}
        >
          <FontAwesome name="random" size={20} color="#111" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.imagesContainer}>
          {sorted
            ? images.map((image, index) => {
                return (
                  <ImageBackground
                    style={{
                      width: images_width,
                      height: images_hight,
                      padding: 5,
                    }}
                    imageStyle={styles.image_box}
                    source={{ uri: image.src }}
                    resizeMode="cover"
                  ></ImageBackground>
                );
              })
            : images
                .sort((a, b) => a.index < b.index)
                .map((image, index) => {
                  return (
                    <ImageBackground
                      style={{
                        width: images_width,
                        height: images_hight,
                        padding: 5,
                      }}
                      imageStyle={styles.image_box}
                      source={{ uri: image.src }}
                      resizeMode="cover"
                    ></ImageBackground>
                  );
                })}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  menuContainer: {
    position: "relative",
    marginTop: 50,
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  image_box: { borderRadius: "30rem", width: "100%", height: "100%" },
  menuButtons: {
    backgroundColor: "#ccc",
    flexDirection: "row-reverse",
    borderRadius: "5rem",
  },
  menuButton: {
    color: "#000",
    padding: 10,
  },
  activeButton: {
    backgroundColor: "#eee",
    color: "#000",
    padding: 10,
    borderRadius: "5rem",
  },
  text: {
    color: "#000",
  },
});
