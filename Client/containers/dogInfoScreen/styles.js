import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const ICON_FONT = "tinderclone";

export default StyleSheet.create({
	containerProfileItem: {
		backgroundColor: WHITE,
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		fontFamily: ICON_FONT,
		color: WHITE
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: DARK_GRAY,
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: GRAY,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		fontFamily: ICON_FONT,
		fontSize: 12,
		color: DARK_GRAY,
		paddingHorizontal: 10
	},
	infoContent: {
		color: GRAY,
		fontSize: 13
	},
})