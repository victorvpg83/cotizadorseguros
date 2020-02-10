import React, {useState} from 'react';
import styled from '@emotion/styled'
import {difYear, calcBrand, insType} from '../helper'
import PropTypes from 'prop-types'

const Camp = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center:
`
const Label =styled.label`
    flex: 0 0 100px; 
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;

    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({saveResume, saveLoading}) => {

    const [data, saveData] = useState({
        brand:'',
        year:'',
        plan:''
    })

    const [error, saveError] = useState(false)

    //Extract state values

    const {brand, year, plan} = data

    // read form values and state

    const getInfo = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value 
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(brand.trim()==='' || year.trim() === '' || plan.trim() === '') {
            saveError(true)
            return
        }

        saveError(false)

        //price base
        let basePrice = 700

        //years difference

        const diference = difYear(year)

        //3% for year
        basePrice -= ((diference*3)*basePrice)/100

        //calcBrand 

        basePrice = calcBrand(brand)* basePrice

        const incrementPlan = insType(plan)

        basePrice= parseFloat(incrementPlan*basePrice).toFixed(2)

        saveLoading(true)

        setTimeout(() => {
            // Clear Spinner
            saveLoading(false)

            // show info
            saveResume({
                cotization: Number(basePrice),
                data
            })
        }, 1000);



    }

    return (
    <form onSubmit={handleSubmit} >
         {error? <Error>Todos los campos son obligatorios</Error>:null}
        <Camp>
            <Label>Marca</Label>
            <Select name='brand' value={brand} onChange={getInfo} >
                <option value=''> --Seleccione--</option>
                <option value='american'>Americano</option>
                <option value='european'>Europeo</option>
                <option value='asian'>Asiático</option>
            </Select>
        </Camp>
        <Camp>
            <Label>Año</Label>
            <Select name='year' value={year} onChange={getInfo} >
                <option value="">-- Seleccione --</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>
        </Camp>
        <Camp>
            <Label>Plan</Label>
            <InputRadio type='radio' name='plan' value='basic' checked={plan === 'basic'} onChange={getInfo} />Básico
            <InputRadio type='radio' name='plan' value='complet' checked={plan === 'complet'} onChange={getInfo} />Completo
        </Camp>
        <Button type='submit'>Cotizar</Button>
    </form>
    );
};

Form.propTypes = {
    saveResume: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}

export default Form;