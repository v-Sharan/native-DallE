import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  welcomeView: {
    width: "100%",
    padding: SIZES.large,
  },
  h1: {
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: SIZES.xxLarge,
  },
  p: {
    marginTop: SIZES.large,
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
});

export default styles;
