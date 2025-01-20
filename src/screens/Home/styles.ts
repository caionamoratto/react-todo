import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	logo: {
		marginVertical: 30,
		marginHorizontal: 90,
	},
	input: {
		flex: 1,
		backgroundColor: "#1F1E25",
		borderRadius: 10,
		color: "#FFF",
		padding: 12,
		fontFamily: "Inter_400Regular",
		fontSize: 16,
		marginRight: 10,
	},
	button: {
		height: 56,
		width: 56,
		borderRadius: 10,
		backgroundColor: "#4EA8DE",
		alignItems: "center",
		justifyContent: "center",
	},
	form: {
		width: "100%",
		flexDirection: "row",
		marginBottom: 25,
	},
	listEmptyText: {
		color: "#808080",
		fontFamily: "Inter_700Bold",
		fontSize: 14,
		textAlign: "center",
	},
	listEmptyTextCreate: {
		color: "#808080",
		fontFamily: "Inter_400Regular",
		fontSize: 14,
		textAlign: "center",
	},
	checkListIcon: {
		textAlign: "center",
		fontSize: 56,
		color: "#333333",
		padding: 16,
	},
	plusIcon: {
		fontSize: 16,
		color: "white",
	},
	taskCounters: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 40,
		fontSize: 14,
	},
	createdTasks: {
		color: "#4EA8DE",
		marginRight: 5,
	},
	doneTasks: {
		color: "#5E60CE",
		marginRight: 5,
	},
	counterValue: {
		borderRadius: 8,
		width: 25,
		color: "#FFFFFF",
		fontSize: 12,
		fontFamily: "Inter_700Bold",
		backgroundColor: "#333333",
		textAlign: "center",
	},
	firstCounter: {
		flexDirection: "row",
		color: "#FFFFFF",
		alignItems: "center",
	},
	secondCounter: {
		flexDirection: "row",
		color: "#FFFFFF",
		alignItems: "center",
	},
});
