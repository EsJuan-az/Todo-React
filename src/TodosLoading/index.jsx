import { Skeleton } from '@chakra-ui/react'
import './TodosLoading.css';

function TodosLoading(){
    return (
        <>
            <Skeleton width='90%' height='40px' m='auto' mt='2'startColor='#C4DFDF'/>
            <Skeleton width='90%' height='40px' m='auto' mt='2'startColor='#C4DFDF'/>
            <Skeleton width='90%' height='40px' m='auto' mt='2'startColor='#C4DFDF'/> 
        </>
    );
}
export { TodosLoading };