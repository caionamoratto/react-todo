import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#1F1E25",
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	task: {
		flex: 1,
		fontSize: 14,
		padding: 12,
	},
	button: {
		marginRight: 5,
		height: 32,
		width: 32,
		alignItems: "center",
		justifyContent: "center",
		color: "#808080",
	},
	checkTask: {
		alignItems: "stretch",
		fontSize: 17,
	},
	trashCan: {
		color: "#808080",
	},
});
