import React from 'react';

import './NewPlace.css'
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_REQUIRE} from '../../shared/utils/validators'

const NewPlace = () => {

    const changeHandler = event => {
        
    }

    return <form className='place-form'>
        <Input element = 'input' 
        type = 'text' 
        label = 'Title' 
        validators = {[VALIDATOR_REQUIRE()]} 
        errorText = 'Please enter a valid text'/>
    </form>
}

export default NewPlace;