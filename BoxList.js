import React, {useState} from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIALSTATE = [{
        color: '', 
        width: '', 
        height: ''
    }]
    
    const [values, setValues] = useState(INITIALSTATE)
    const addBox = (newBox) => {
        setValues(values => {
            return [...values, {
                ...newBox
            }]
        })
    }
    return (
        <div>
            <h3>Create a new Box</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {values.map(({ color, width, height }) => {
                    <Box color={color} width={width} height={height} />
                })}
            </div>
        </div>
    )


}

export default BoxList