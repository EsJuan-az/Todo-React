import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import './EmptyTodos.css';

function EmptyTodos(){
    return (
        <Alert status='info' width='50%' m='auto'>
        <AlertIcon />
        <AlertTitle>No tienes aún ningún TODO en tu stack.</AlertTitle>
        </Alert>
    );
}
export { EmptyTodos };