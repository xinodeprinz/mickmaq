import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Task = ({ task, handleDone, deleteTask }) => {
    return (
        <View style={styles.task}>
            <Text style={styles.title}>{task.name}</Text>
            <View style={styles.icons}>
                {!task.isDone && <TouchableOpacity
                    style={styles.check}
                    onPress={() => handleDone(task.id)}>
                    <AntDesign name='check' style={styles.icon} />
                </TouchableOpacity>}
                <TouchableOpacity
                    style={styles.trash}
                    onPress={() => deleteTask(task.id)}
                >
                    <EvilIcons name='trash' style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Task

const styles = StyleSheet.create({
    task: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 20,
    },
    icons: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 25,
        color: 'white',
    },
    title: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 600,
    },
    check: {
        backgroundColor: 'green',
        padding: 3,
        borderRadius: 5,
        marginRight: 10,
    },
    trash: {
        backgroundColor: 'red',
        padding: 3,
        paddingTop: 5,
        borderRadius: 5,
    },
})