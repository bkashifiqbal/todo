import React, {useState, useEffect, useRef} from 'react'
import { View, TextInput } from 'react-native'
import Checkbox from './Checkbox'

interface TodoItemProps{
    todo: {
        id: string,
        content: string,
        isCompleted: boolean
    },
    onSubmit: ()=> void
}

const TodoItem = ({todo, onSubmit}: TodoItemProps) => {
    const [chk, setChk]= useState(false)
    const [content, setContent]= useState('')
    const input=useRef(null)

    useEffect(()=>{
        if(!todo) return
        setChk(todo.isCompleted)
        setContent(todo.content)
    },[todo])

    useEffect(()=>{
        if(input.current){
            input?.current?.focus()
        }
    }, [])

    const onKeyPress=({nativeEvent}:any)=>{
        if(nativeEvent.key==='Backspace' && content===''){
            //console.log('Deleted')
        }
    }

    return (
        <View style={{margin:5, flexDirection: 'row', alignItems:'center'}}>
            <Checkbox isChecked={chk} onPress={ ()=> setChk(!chk) } />
            <TextInput
            ref={input}
            value={content}
            onChangeText={setContent}
            onSubmitEditing={onSubmit}
            blurOnSubmit
            onKeyPress= {onKeyPress}
            style={{
                color: '#fff', borderColor:'#fff', borderWidth: 0.5, borderRadius:10, paddingHorizontal:10, marginLeft:10, width: '60%' 
            }}
            />
            
        </View>
    )
}

export default TodoItem
