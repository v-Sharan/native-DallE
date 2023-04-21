import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FONT, icons } from "../../../constants";

const Card = ({ name, prompt, photo }) => {
  return (
    <View
      style={{
        marginVertical: 16,
      }}
    >
      <Image
        className="flex-1 justify-center items-center"
        source={{
          uri: photo,
        }}
        resizeMode="cover"
        style={{
          width: 400,
          height: 350,
          borderTopLeftRadius: 7,
          borderTopLeftRadius: 7,
        }}
      />
      <View className="bg-[#10131f] p-4 rounded-b-md">
        <View className="w-full flex flex-row justify-between">
          <View className="flex flex-row">
            <View className="mt-2 w-8 h-8 rounded-full bg-green-700">
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: 25,
                }}
                className="text-white"
              >
                {name[0]}
              </Text>
            </View>
            <Text
              className="text-white text-[15px] mt-2 p-2"
              style={{ fontFamily: FONT.bold }}
            >
              {name}
            </Text>
          </View>
          <TouchableOpacity className="outline-none bg-transparent border-none">
            <Image
              style={{ width: 50, height: 50, tintColor: "white" }}
              source={icons.download}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-white" style={{ fontFamily: FONT.regular }}>
          {prompt}
        </Text>
      </View>
    </View>
  );
};

export default Card;
