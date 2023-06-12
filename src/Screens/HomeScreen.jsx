import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import userImg from "../../assets/UserrImg.png";
import { useUserStateActions } from "../Slices/userSlice";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const images = [
  { id: "1", source: require("../../assets/Image1.jpg") },
  //   { id: "2", source: require("../../assets/Image2.jpg") },
  { id: "3", source: require("../../assets/Image3.jpg") },
  { id: "4", source: require("../../assets/Image4.jpg") },
  { id: "5", source: require("../../assets/Image7.jpg") },
  { id: "6", source: require("../../assets/Image6.jpg") },
  // Add more images here...
];

const HomeScreen = ({ navigation }) => {
  const userActions = useUserStateActions()
  const ImageCard = ({ item }) => (
    <View style={{ marginRight: 20 }}>
      <Image source={item.source} style={styles.storyImg} />
    </View>
  );

  const BigImageCard = ({ item }) => (
    <View style={{ marginVertical: 20 }}>
      <Image source={item.source} style={styles.bigImg} />
    </View>
  );

  return (
    <View style={styles.contianer}>
      {/* Header start  */}
      <View style={styles.headerContainer}>
        <View style={styles.ImgContainer}>
          <Image source={userImg} style={styles.userImg} />
          <Text
            style={styles.logouttext}
            onPress={() => {
              userActions.resetState()

              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }]
              })

            }
            }
          >
            Logout
          </Text>
        </View>

        <Text
          style={{
            ...styles.logouttext,
            marginRight: "75%",
            marginTop: "2%",
          }}
        >
          Events{" "}
        </Text>

        <View style={{ width: "100%", marginTop: "5%" }}>
          <FlatList
            data={images}
            horizontal
            renderItem={({ item }) => <ImageCard item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      </View>
      <View style={{ flex: 0.5 }}>
        <View>
          <Text style={styles.recommend}>Recommended</Text>
        </View>
        <View>
          <FlatList
            data={images}
            renderItem={({ item }) => <BigImageCard item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",

    alignItems: "center",
    backgroundColor: "#76A9FA",
    // marginTop: "10%",
    // height: "60%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 0.4,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  ImgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "15%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  logouttext: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.019,
    color: "#fff",
  },
  storyImg: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  recommend: {
    paddingHorizontal: "6%",
    // marginTop: "4%",
    paddingVertical: "4%",
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.02,
  },
  bigImg: {
    width: Width * 0.9,
    height: Width * 0.5,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
