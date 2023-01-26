import React, {useState} from 'react'
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

const Box = ({ color, width, height }) => {

    const [isTouched, setIsTouched] = useState(true)

    const removeBox = () => {
        setIsTouched(false)
    }

    return (
        <div>
            {isTouched && 
                <div style={{ 'backgroundColor': {color}, 'width': {width}, 'height': {height}}}>
                <button onClick={removeBox}>X</button>
                </div>
            }
        </div>
    )
}

export default Box