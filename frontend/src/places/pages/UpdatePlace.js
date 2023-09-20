import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css'

const DUMMY = [{
    id:'p1',
    title:'Empire State Building',
    imageURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address : '20 W 34th St., New York, NY 10001, United States',
    description : 'One of the largest Skyscrapers in the World',
    location : {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator : 'u1'
},
{
    id:'p2',
    title:'Statue Of Liberty',
    imageURL : 'https://images.search.yahoo.com/images/view;_ylt=Awr90ULHcQllRBEss7eJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc0NWU1NjRhOTQ1MGJiYzZjZDFhZDNjOTU5YzBlYzI5BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dempire%2Bstate%2Bbuilding%26type%3DE210US1316G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=2448&h=3264&imgurl=www.urbansplatter.com%2Fwp-content%2Fuploads%2F2014%2F07%2FEmpire-State-Building-2013.jpg&rurl=https%3A%2F%2Fwww.urbansplatter.com%2F2014%2F07%2Fhistory-architecture-empire-state-building%2F&size=1272.9KB&p=empire+state+building&oid=745e564a9450bbc6cd1ad3c959c0ec29&fr2=piv-web&fr=mcafee&tt=The+History+and+Architecture+of+the+Empire+State+Building+-+Urban+Splatter&b=0&ni=21&no=2&ts=&tab=organic&sigr=PB.52gBWn9B9&sigb=mfFvvYz6Xy4k&sigi=QlheKFV.bwWv&sigt=5FfeC4rXG7vC&.crumb=Rm4jIPnQEXc&fr=mcafee&fr2=piv-web&type=E210US1316G0',
    address : '20 W 34th St., New York, NY 10001, United States',
    description : 'One of the largest Skyscrapers in the World',
    location : {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator : 'u2'
}]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title:{
            value: '',
            isValid: false
        },
        description:{
            value: '',
            isValid: false
        }
    },false)

    const identifiedPlace = DUMMY.find(p => p.id === placeId)

    useEffect(() => {
        if (identifiedPlace){
    setFormData({
        title:{
            value: identifiedPlace.title,
            isValid: true
        },
        description:{
            value: identifiedPlace.description,
            isValid: true
        }
    },true)}
    setIsLoading(false)
    }, [setFormData, identifiedPlace])

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    if(!identifiedPlace){
        return <div className='center'>
            <Card><h2>Could not find place!</h2></Card>
        </div>
    }

    // formState.inputs.title.value && (
    if (isLoading){
        return <div className='center'>
            <h2>Loading</h2>
        </div>
    }

    return <form className='place-form'>
        <Input id='title' 
        element = 'input' 
        type='text' 
        label='Title' 
        validators ={[VALIDATOR_REQUIRE()]}
        errorText = 'Please enter a valid title'
        onInput = {inputHandler}
        initialValue = {formState.inputs.title.value}
        initialValid = {formState.inputs.title.isValid}/>

        <Input id='description' 
        element = 'textarea' 
        type='text' 
        label='Description' 
        validators ={[VALIDATOR_MINLENGTH(5)]}
        errorText = 'Please enter a valid description (min 5 characters)'
        onInput = {inputHandler}
        initialValue = {formState.inputs.description.value}
        initialValid = {formState.inputs.description.isValid}/>

        <Button type='submit' disabled ={!formState.isValid} onClick = {placeUpdateSubmitHandler}>Update Place</Button>
    </form>
}
 
export default UpdatePlace;