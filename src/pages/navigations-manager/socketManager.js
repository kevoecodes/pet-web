// import { Config } from '../../utils/Config';
//
// export const openPetSocket = (setOpenSocket, socketManager) => {
//     let socket = new WebSocket(Config.socketURL + 'ws/ws-pet-tracker');
//
//     socket.onopen = function (e) {
//         setOpenSocket(socket);
//         // console.log('Opened ' + id);
//     };
//     socket.onmessage = function (event) {
//         let data = JSON.parse(event.data);
//         console.log('Data:', data);
//         if (data !== null) {
//             let pet_location = data.pet_location;
//             socketManager(pet_location);
//         }
//     };
//
//     socket.onclose = function (event) {
//         // console.log('Closed ' + id);
//         if (event.wasClean) {
//             // Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//         } else {
//             openPetSocket(setOpenSocket, socketManager);
//         }
//     };
//
//     socket.onerror = function (error) {
//         // console.log('Error ' + id);
//         openPetSocket(setOpenSocket, socketManager);
//     };
// };
