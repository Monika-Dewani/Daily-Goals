import {View,  TextInput,Button,StyleSheet, Modal, Image} from 'react-native';
import {useState} from 'react';

function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]= useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }

      

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>

          <Image style={styles.image} source={require('../assets/images/Goal.png')}/>

        <TextInput 
        style={styles.textInput} 
        placeholder="Your goal" 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        
        <View style={styles.buttonContainer}>
               
        
        <View style={styles. button}>
        <Button title ="Cancel"  onPress={props.onCancel}  color='#f31282'/>
        </View>

        <View style={styles. button}>
        <Button title ="Add Goal" onPress={addGoalHandler} color='#5e0acc'/>

        </View>

        </View>
        

     </View>
     </Modal>
    )
};

export default GoalInput;

const styles= StyleSheet.create({
    inputContainer:{
      padding:16,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#311b6b"
      },
    
      textInput:{
        borderWidth:1,
        backgroundColor:'#bca4d7',
        borderColor:'#ffffff',
        color:'#120438',
        borderRadius:6,
        width:'95%',
        
        padding:16
      }, 

      buttonContainer:{
        marginTop:16,
        flexDirection:'row',

      },

      button:{
        width:100,
        marginHorizontal:8
      },

      image:{
        width:100,
        height:100,
        margin:20
      }
})