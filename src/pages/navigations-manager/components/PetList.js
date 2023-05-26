import { Avatar, Tooltip } from 'antd';
import { imageServe } from '../../../functions/common';
import React from 'react';

const PetList = ({ pets, setPet, current_pet = {} }) => (
    <Avatar.Group>
        {pets.map((pet, idx) => {
            return (
                <a
                    href={'#'}
                    key={idx}
                    onClick={() => {
                        console.log('Current', current_pet, pet, current_pet === pet);
                        if (current_pet !== null) {
                            if (current_pet.id !== pet.id) {
                                setPet(pet);
                            }
                        } else setPet(pet);
                    }}
                >
                    <Tooltip title={pet.name} placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} src={imageServe(pet.icon)}>
                            {pet.name.charAt(0).toUpperCase()}
                        </Avatar>
                    </Tooltip>
                </a>
            );
        })}
    </Avatar.Group>
);

export default PetList;
