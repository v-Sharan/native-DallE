import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  ScreenHeaderBtn,
  CreatePost,
  Welcome,
  FormInput,
  RenderCards,
} from "../components";
import { Stack, useRouter } from "expo-router";
import useFetch from "../hook/useFetch";

import { COLORS, icons, SIZES } from "../constants";

export default function Page() {
  const { data, isLoading, error, refetch } = useFetch();
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const router = useRouter();

  const handlePress = () => {
    router.push("/create");
  };

  const handleSearchChange = (text) => {
    clearTimeout(searchTimeout);
    setSearchText(text);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = data.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.logo} dimension="100%" />
          ),
          headerRight: () => <CreatePost handlePress={handlePress} />,
          headerTitle: "",
        }}
      />
      <Welcome />
      <View style={{ margin: 3 }}>
        <FormInput
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
          handleRefetch={refetch}
          Reload
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.large,
          }}
        >
          <View style={{ marginBottom: 10 }}>
            {isLoading ? (
              <ActivityIndicator size="large" color={COLORS.tertiary} />
            ) : (
              <View>
                {searchText && (
                  <View className="flex flex-row">
                    <Text className="font-medium text-[#666e75] text-xl mb-3">
                      Showing Resuls for:
                      <Text className="text-[#222328]">{searchText}</Text>
                    </Text>
                  </View>
                )}
                {searchText ? (
                  <RenderCards
                    data={searchedResults}
                    title="No Search Results Found"
                  />
                ) : (
                  <RenderCards data={data} title="No Posts Yet" />
                )}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
