import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.small,
    marginBottom: SIZES.medium,
  },
  label: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge,
    opacity: 1,
    color: COLORS.secondary,
  },
  surpriseMe: {
    fontFamily: FONT.bold,
    backgroundColor: COLORS.white,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 3,
    paddingLeft: 3,
    borderRadius: 4,
  },
  font: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
  },
  input: {
    fontFamily: FONT.medium,
  },
});

export default styles;
