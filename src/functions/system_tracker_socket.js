import { Config } from '../utils/Config';
import snack from './snack';

export const system_tracker_socket = (setOpen, setDialogOpen, setPetsAlert) => {
    let socket = new WebSocket(Config.socketURL + 'ws/ws-system-tracker');

    socket.onopen = function (e) {
        console.log('Opened system socket');
        setOpen(true);
    };
    socket.onmessage = function (event) {
        let data = JSON.parse(event.data);
        console.log('Data:', data);
        if (data !== null) {
            if (data.type == 'pet_outside_boundary') {
                const pet = data.pet;
                // snack.error(`Pet ${data.pet.name} is outside the geofence`);
                // setContent(
                //     <>
                //         Pet <b>{data.pet.name}</b> is outside the geofence
                //     </>
                // );
                // setDialogOpen(true);
                // Add pet alert
                setPetsAlert((prevState) => {
                    const exists = prevState.some((item) => item.id == pet.id);
                    if (exists) return prevState;
                    return [pet, ...prevState];
                });
            }
        }
    };

    socket.onclose = function (event) {
        // console.log('Closed ' + id);
        if (event.wasClean) {
            // Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            system_tracker_socket(setOpen, setDialogOpen, setPetsAlert);
        }
    };

    socket.onerror = function (error) {
        // console.log('Error ' + id);
        system_tracker_socket(setOpen, setDialogOpen, setPetsAlert);
    };
};
