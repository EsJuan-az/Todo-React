import React from 'react';
import  ReactDOM  from 'react-dom';
import './MonikaScreen.css'
import neutral from './Mon1.png'
import talking from './talkingmon.png'
import talkingsmiling from './talkingsmilingmon.png'
import theme from './theme.mp3'
import staring from './3aa.png'

import {BsFillPlayFill} from 'react-icons/bs'
import { TodoContext } from '../TodoContext';
const monikaStates = [
    {
        text: "",
        image: neutral
    },
    {
        text: "¿Me llamaste?",
        image: talking,
    },
    {
        text: "",
        image: neutral
    },
    {
        text: "Eso pensé",
        image: talkingsmiling,
    },
    {
        text: "Sigue con tus tareas",
        image: talking
    },
    {
        text: "",
        image: neutral,
        isstaring: true,
    },
    {
        text: "",
        image: staring,

    }
]

function* getDialog(dialogs){
    for(let dialog of dialogs){
        console.log(dialog);
        yield dialog;
    }
}
const dialogs = getDialog(monikaStates)
const InitialState = dialogs.next()
function MonikaScreen(){
    const {setMonikaEnabled} = React.useContext(TodoContext);
    const [dialog, setDialog] = React.useState(InitialState);
    const {image, isstaring, text} = dialog.value;
    return ReactDOM.createPortal(

        <div className='MonikaScreen'
        onClick={
            () => {
                const newDialog = dialogs.next()
                if (newDialog.done) return setMonikaEnabled(false)

                setDialog(newDialog)
            }}>
            <audio className="theme" src={theme} autoPlay controls="none" style={{opacity: '0'}}></audio>
            <img className={`mon ${isstaring ? 'mon-staring' : undefined}`} src={image} alt='Monika'/>
            {
            text.length > 0 ? 
            <nav className="ctn-dialog">
                    <div className="dialog-space">
                        <span className='mon-tag'>Monika</span>
                        <div className='dialog'>
                            <p className='dialog-content'>{text}</p>
                            <nav className='dialog-options'>
                                <li>History</li>
                                <li>Skip</li>
                                <li>Auto</li>
                                <li>Save</li>
                                <li>Load</li>
                                <li>Settings</li>
                                <li className="icon-continue"> <BsFillPlayFill/> </li>
                            </nav>
                        </div>
                    </div>
            </nav>: undefined
            }
            
        </div>,
        document.querySelector('#monika')
    );
}

export { MonikaScreen };