import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "space-between",
    shadowColor: SHADOWS.small,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
});

export default styles;
