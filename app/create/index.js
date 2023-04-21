import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { icons, FONT, COLORS } from "../../constants";
import { getRandomPrompt } from "../../utils";
import { FormInput } from "../../components";

const index = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const router = useRouter();

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://dall-e-2nb9.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        Alert.alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      Alert.alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async () => {
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://dall-e-2nb9.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        Alert.alert("Success");
        router.push("/");
      } catch (err) {
        Alert.alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Please generate an image with proper details");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="" style={{ margin: 4, flex: 1 }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
        <View>
          <Text
            className="font-extrabold text-[#222328] text-[32px]"
            style={{ fontFamily: FONT.medium }}
          >
            Create
          </Text>
          <Text className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
            Generate an imaginative image through DALL-E AI and share it with
            the community
          </Text>
        </View>
        <View className="mt-10 flex justify-center">
          <FormInput
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={(text) => {
              setForm({ ...form, name: text });
            }}
          />
          <FormInput
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={(text) => {
              setForm({ ...form, prompt: text });
            }}
            isSurpriseMe
            handleSurprise={handleSurpriseMe}
          />
          <View className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 h-80 p-3 flex justify-center items-center">
            {form.photo ? (
              <Image
                source={{ uri: form.photo }}
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                source={icons.preview}
                style={{ width: 350, height: 350 }}
                resizeMode="cover"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <View className="absolute inset-0 z-0 flex justify-center items-cente bg-[rgba(0,0,0,0.5)] w-80 h-80 rounded-lg">
                <ActivityIndicator size="large" color={COLORS.tertiary} />
              </View>
            )}
          </View>
        </View>
        <View className="mt-5 flex">
          <TouchableOpacity
            className="bg-green-700 rounded-md w-full px-5 py-2.5 text-center"
            onPress={generateImage}
          >
            <Text className="text-white text-center text-xl">
              {generatingImg ? "Generating..." : "Generate"}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-10">
          <Text className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </Text>
          <TouchableOpacity onPress={handleSubmit}>
            <Text className="mt-3 mb-5 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              {loading ? "Sharing..." : "Share with the Community"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
