import React, { useState } from 'react';
import MainCard from '../../components/MainCard';
import { addPetRequest } from '../../utils/API';
import snack from '../../functions/snack';
import { useNavigate } from 'react-router';
import PetForm from './components/PetForm';

const AddPet = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const addPet = (values) => {
        addPetRequest(values)
            .then((res) => {
                console.log('Response', res);
                snack.success('Pet was successfully added');
                navigate('/pets', { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                snack.error('Failed to add Pet');
            });
    };

    return (
        <>
            <MainCard content={false} border={false} boxShadow>
                <PetForm loading={loading} onSubmitForm={(values) => addPet(values)} />
            </MainCard>
        </>
    );
};

export default AddPet;
