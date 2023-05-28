import './TodoCounter.css';
function TodoCounter({completed, total}){
    return (
      <h3 className='ctn-counter'>
        Completaste <b>{completed}</b> de los <b>{total}</b> TODOs
      </h3>

    );
}
export {TodoCounter};