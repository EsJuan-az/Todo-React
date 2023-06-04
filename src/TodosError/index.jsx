import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import './TodosError.css';

function TodosError(){
    return (
        <>
        <Alert status='error' width='50%' m='auto'>
        <AlertIcon/>
        <AlertTitle>Algo ha ocurrido cargando los TODOs</AlertTitle>
        </Alert>
        </>

    );
}
export { TodosError };