import React, { useState, useEffect } from 'react';
import { addDog } from '../../Actions/Index'
import { useSelector, useDispatch } from 'react-redux';
import Style from './Index.module.css'
import { getTemperaments } from '../../Actions/Index';
import { NavBar } from "../../Componentes/index";

export default function FormDog() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    const [input, setInput] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        image:'',
        temperaments: []
    })

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleTempChange = (e) => {
        if (input.temperaments.includes(e.target.value)) {
            return alert('You have already selected that temperament, plase select another one.');
        }
        setInput((prev)=>({
            ...prev,
            temperaments: [...prev.temperaments, e.target.value],
        }));
    };

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addDog(input))
        alert('The dog was successfully created')
        setInput({
            name: '',
            height: '',
            weight: '',
            life_span: '',
            image:'',
            temperaments: []
        })
    }

    return (
        <div>
            <NavBar/>
            <form className={Style.form} onSubmit={e => handleSubmit(e)}>
                    <label>Name* </label>
                    <input type='text' name='name' value={input.name} required onChange={e => handleChange(e)} />

                    <label>Height* </label>
                    <input type='text' name='height' value={input.height} required placeholder='min - max' onChange={e => handleChange(e)} />

                    <label>Weight* </label>
                    <input type='text' name='weight' value={input.weight} required placeholder='min - max' onChange={e => handleChange(e)} />

                    <label>Life span* </label>
                    <input type='text' name='life_span' value={input.life_span} required onChange={e => handleChange(e)} />

                    <label>Image </label>
                    <input type='text' name='image' value={input.image} onChange={e => handleChange(e)} />

                    <label>Temperament* </label>
                    <select onChange={e => handleTempChange(e)} >
                        <option>Select temperament</option>
                        {
                            temperaments?.map((temp, index) => {
                                return (
                                    <option name='temperaments' value={temp} key={index}>
                                        {temp}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <ul>
                        <label>{input.temperaments.map(i => i + ", " )}</label>
                    </ul>
                <div>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )
}

