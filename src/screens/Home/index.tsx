import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	FlatList,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Task } from "../../components/Tasks";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import ToDoSVG from "../../components/icons/to-do-icon";
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from "@expo-google-fonts/inter";

export function Home() {
	//Criação das variaveis de estado.
	const [tasks, setTasks] = useState<string[]>([]); // Estado da lista de tarefas.
	const [taskName, setTaskName] = useState(""); // Estado que controla a adição de tarefas na lista.
	const [totalCounter, setTotalCounter] = useState(0); // Estados do contador de tarefas totais.
	const [doneCounter, setDoneCounter] = useState(0); // Estados do contador de tarefas concluidas.
	const [checks, setChecks] = useState<boolean[]>([]); // Estados das checkbox, quais estão marcadas.

	const [fontsLoaded] = useFonts({
		Inter_400Regular, //Aprendendo a usar o googlefonts ainda. Não sei se foi correto esse uso.
		Inter_700Bold,
	});

	function handleTaskAdd() {
		//Função que lida com a adição de uma tarefa, criando os contadores necessarios e a tarefa em si.
		if (tasks.includes(taskName)) {
			return Alert.alert("Tarefa", "Já existe essa tarefa.");
		}
		if (taskName === "") {
			return Alert.alert("Tarefa", "Tarefa vazia não pode ser adicionada.");
		}
		setTasks((prevState) => [...prevState, taskName]);
		setTaskName("");
		setTotalCounter((prevState) => prevState + 1);
		setChecks((prevState) => [...prevState, false]);
		console.log(checks);
	}
	function handleTaskRemove(task: string) {
		//Função utilizada para deletar uma task ao clicar na lixeira.
		//Caso clique sim no alerta, a task é deletada e ambos os contadores são atualizados se necessario.
		Alert.alert("Remover", `Deseja remover a tarefa ${task}?`, [
			{
				text: "Sim",
				onPress: () => {
					setTasks((prevState) =>
						prevState.filter((previousTask) => previousTask !== task),
					);
					setTotalCounter((prevState) => prevState - 1);
					// Lida com a possibilidade de deletar uma tarefa marcada como concluida
					if (checks[tasks.indexOf(task)] === true) {
						setDoneCounter((prevState) => prevState - 1);
					}
					//Remove o estado elemento da checkbox referente a task removida.
					setChecks((prevChecks) =>
						prevChecks.filter(
							(prevChecks, index) => index !== tasks.indexOf(task),
						),
					);
				},
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	}
	function handleTaskCheck(task: string) {
		//Função que lida com a checkbox das tarefas,
		//atualizando o estado da checkbox de determinada tarefa caso haja um clique
		const currentChecks = checks.map((check, i) => {
			if (i === tasks.indexOf(task)) {
				if (check === false) {
					setDoneCounter((prevState) => prevState + 1);
					return true;
				}
				setDoneCounter((prevState) => prevState - 1);
				return false;
			}
			return check;
		});
		setChecks(currentChecks);
	}

	return (
		<View style={styles.container}>
			<ToDoSVG style={styles.logo} />
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor={"#6B6B6B"}
					onChangeText={setTaskName}
					value={taskName}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleTaskAdd}
					activeOpacity={0.8}
				>
					<AntDesign style={styles.plusIcon} name="pluscircleo" />
				</TouchableOpacity>
			</View>
			<View style={styles.taskCounters}>
				<View style={styles.firstCounter}>
					<Text style={styles.createdTasks}>Criadas</Text>
					<Text style={styles.counterValue}>{totalCounter}</Text>
				</View>
				<View style={styles.secondCounter}>
					<Text style={styles.doneTasks}>Concluídas</Text>
					<Text style={styles.counterValue}>{doneCounter}</Text>
				</View>
			</View>

			<FlatList
				data={tasks}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					// Aqui se cria a lista de tarefas, cada task vira um item da lista
					//onRemove lida com a remoção de uma tarefa da lista.
					//onCheck lida com a checkbox de determinado item da lista.
					//checkBox é uma variavel de controle para alterar estilização.
					<Task
						key={item}
						task={item}
						onRemove={() => handleTaskRemove(item)}
						onCheck={() => handleTaskCheck(item)}
						checkBox={checks[tasks.indexOf(item)]}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					//Cria o front-end quando a lista está vazia.
					<View>
						<Octicons style={styles.checkListIcon} name="checklist" />
						<Text style={styles.listEmptyText}>
							Você ainda não tem tarefas cadastradas
						</Text>
						<Text style={styles.listEmptyTextCreate}>
							Crie tarefas e organize seus itens a fazer
						</Text>
					</View>
				)}
			/>
		</View>
	);
}
