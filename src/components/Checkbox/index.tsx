import { TouchableHighlight, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";

type Props = {
	onPressButton: () => void;
	isChecked: boolean;
};

export function Checkbox({ onPressButton, isChecked }: Props) {
	const iconName = isChecked ? "check-circle" : "circle-o";
	const iconColor = isChecked ? "#5E60CE" : "#4EA8DE";

	return (
		<View style={styles.checkContainer}>
			<TouchableHighlight style={styles.checkTask} onPress={onPressButton}>
				<FontAwesome
					name={iconName}
					style={styles.checkTask}
					color={iconColor}
				/>
			</TouchableHighlight>
		</View>
	);
}
