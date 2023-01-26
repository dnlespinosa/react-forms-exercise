import React, {useState} from 'react'
import Box from './Box';
import BoxList from './BoxList';

const NewBoxForm = ({ addBox }) => {
    const INITIALSTATE = {
        color: '', 
        width: '', 
        height: ''
    }
    const [formData, setFormData] = useState(INITIALSTATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData.color, formData.width, formData.height)
        setFormData(INITIALSTATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Select Color</label>
            <input type='text'
            id='color'
            name='color'
            placeholder='enter any color'
            value={formData.color}
            onChange={handleChange} />

            <label htmlFor='width'>Select Width</label>
            <input type='text'
            id='width'
            name='width'
            placeholder='enter any width'
            value={formData.width}
            onChange={handleChange} />

            <label htmlFor='height'>Select height</label>
            <input type='text'
            id='height'
            name='height'
            placeholder='enter any height'
            value={formData.height}
            onChange={handleChange} />
            <button>Submit Values</button>
        </form>
    )

}

export default NewBoxForm