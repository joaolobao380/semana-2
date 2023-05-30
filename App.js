import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button, FlatList} from 'react-native';




export default App = () => {
  const [arrayToDo, setArrayToDo] = useState(["Comprar caderno", "Comprar lapis", "Ir ao mercado"])
  
  const handleAdd = () => {
    setArrayToDo([...arrayToDo, "Comer maçã"])
  }

  const handleRemove = (index) => {            
    const removeItem = arrayToDo.filter(item => item !== arrayToDo[index])
    setArrayToDo(removeItem)
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList 
          data={arrayToDo}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 40}}>{item}</Text>
              <Button 
                onPress={() => handleRemove(index)}
                title="Deletar"
                color="red"
              />
            </View>
            
          )}
     
        />
          <Button 
            onPress={handleAdd}
            title="Adicionar"
            color="red"
          />
       
 
    </SafeAreaView>
  )
}