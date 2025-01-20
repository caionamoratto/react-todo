import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Checkbox } from "../Checkbox";

type Props = {
	task: string;
	checkBox: boolean;
	onRemove: () => void;
	onCheck: () => void;
};

export function Task({ task, checkBox, onRemove, onCheck }: Props) {
	return (
		<View style={styles.container}>
			<Checkbox isChecked={checkBox} onPressButton={onCheck} />
			<Text
				style={[
					//Há essa possibilidade de adicionar manual algum estilo, é preciso transformar em array
					// array o retorno do style.
					styles.task,
					{
						textDecorationLine: checkBox ? "line-through" : "none",
						color: checkBox ? "#808080" : "#F2F2F2",
					},
				]}
			>
				{task}
			</Text>
			<TouchableOpacity style={styles.button} onPress={onRemove}>
				<FontAwesome name="trash-o" style={styles.trashCan} />
			</TouchableOpacity>
		</View>
	);
}
