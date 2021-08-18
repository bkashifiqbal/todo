import React, {useState} from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import TodoItem from '../Components/TodoItem'

let id=0

function HomeScreen({ navigation }: any) {
    const[title, setTitle]=useState('')

    const [todos, setTodos]=useState([
        {
            id: 1,
            content: 'todo1',
            isCompleted: false
        },
        {
            id: 2,
            content: 'todo1',
            isCompleted: false
        },
        {
            id: 3,
            content: 'todo1',
            isCompleted: false
        }
    ])

    const createItem=(atIndex: number)=>{
        const newTodo= [...todos]
        newTodo.splice(atIndex, 0, {
            id: id,
            content: '',
            isCompleted: false
        })
        setTodos(newTodo)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==='ios'? 'padding': 'height'}
            keyboardVerticalOffset={Platform.OS==='ios'? 130:0}
            style={{flex: 1, backgroundColor:'#000'}}
        >
            <View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                style={{width:'80%', color:'#fff', fontSize:16}}
            />
            <FlatList
                data={todos}
                renderItem= {({item, index})=> (
                    <TodoItem todo={item} onSubmit={()=>createItem(index)}/>
                )}
            />
            </View>
                <TouchableOpacity
                    style={{alignItems:'center', backgroundColor: '#777', padding: 10, alignSelf:'center'}}
                    onPress={() => navigation.navigate('nextScreen')}
                >
                    <Text style={{color:'#fff'}}>Next Screen</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen
