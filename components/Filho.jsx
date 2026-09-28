import { Button } from 'react-native';
import {Text} from 'react-native';

export default function Filho({onMostrarMensagem}){
    return( 
        <Button onPress={() => onMostrarMensagem("Átila")} title='Clique aqui'></Button>
    )

}