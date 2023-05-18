import PetForm from './components/PetForm';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { editPetRequest, getPetByIdRequest } from '../../utils/API';
import snack from '../../functions/snack';
import MainCard from '../../components/MainCard';
import { Box } from '@mui/material';

const EditPet = () => {
    const [initialValues, setInitialValues] = useState(null);
    const [pet_icon, setPetIcon] = useState(null);
    const [page_loading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const editPet = (values) => {
        editPetRequest(params.pet_id, values)
            .then((res) => {
                console.log('Response', res);
                snack.success('Pet was successfully edit');
                navigate('/pets', { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                snack.error('Failed to add Pet');
            });
    };

    const loadPet = () => {
        getPetByIdRequest(params.pet_id)
            .then((res) => {
                setInitialValues({
                    name: res.name,
                    device_no: res.device_no
                });
                setPetIcon(res.icon);
                setPageLoading(false);
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to load pet details');
                navigate('/pets', { replace: true });
            });
    };

    useEffect(() => {
        loadPet();
    }, []);

    return (
        <>
            <MainCard title={'Editing a pet'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    {!page_loading && (
                        <PetForm
                            loading={loading}
                            initialValues={initialValues}
                            initialPetIcon={pet_icon}
                            onSubmitForm={(values) => editPet(values)}
                        />
                    )}
                </Box>
            </MainCard>
        </>
    );
};

export default EditPet;
