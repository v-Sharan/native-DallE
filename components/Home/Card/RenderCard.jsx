import { View, Text, FlatList, StatusBar } from "react-native";
import Card from "./Card";
import { FONT } from "../../../constants";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(item) => item._id}
      />
    );
  }

  return (
    <Text
      style={{ fontFamily: FONT.medium }}
      className="mt-5 text-[#6469ff] text-2xl uppercase"
    >
      {title}
    </Text>
  );
};

export default RenderCards;
