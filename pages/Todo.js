import { View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import Task from './Task';
import Entypo from 'react-native-vector-icons/Entypo'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Todo = () => {

    const navigation = useNavigation();
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    navigation.setOptions({
        title: 'TODO APP',
        headerRight: () => <Entypo
            name='trash'
            onPress={() => setTasks([])}
            style={{
                color: 'red',
                fontSize: 20,
            }}
        />
    });

    const addTask = () => {
        if (!text) return Alert.alert('Error', "Please add a task!");
        setTasks([...tasks, {
            id: tasks.length + 1,
            name: text,
            isDone: false,
        }]);
        setText('');
    }
    const handleDone = (id) => {
        const updatedTaks = tasks.map(t => {
            if (t.id === id) t.isDone = true;
            return t;
        });
        setTasks(updatedTaks);
    }
    const deleteTask = (id) => {
        const updatedTaks = tasks.filter(t => t.id !== id);
        setTasks(updatedTaks);
    }
    return (
        <SafeAreaView style={styles.container}>
            {tasks.map(task => <Task
                key={task.id}
                task={task}
                handleDone={handleDone}
                deleteTask={deleteTask}
            />)}
            <View style={styles.end}>
                <TextInput
                    placeholder='Add Task'
                    style={styles.input}
                    onChangeText={(value) => setText(value)}
                    value={text}
                />
                <TouchableOpacity style={styles.btn} onPress={addTask}>
                    <Entypo name='plus' style={styles.plus} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        position: 'relative',
        height: '100%',
    },
    plus: {
        color: 'white',
        fontSize: 30,
    },
    btn: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 7,
        borderRadius: 50,
    },
    end: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
    },
    input: {
        width: '85%',
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
});

export default Todo