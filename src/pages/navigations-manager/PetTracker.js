// import MainCard from "../../components/MainCard";
// import {Grid, Paper} from "@mui/material";
// import {Segmented} from "antd";
// import GoogleMapReact from "google-map-react";
// import React, {useState} from "react";
// import PetList from "./components/PetList";
//
// const PetTracker = () => {
//     const [selected, setSelected] = useState('Population');
//     const [pets, setPets] = useState([]);
//
//     return return (
//         <>
//             <MainCard
//                 title={
//                     <>
//                         <Grid container spacing={3} alignItems="center">
//                             <Grid item>Pet History</Grid>
//                             <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
//                                 <PetList />
//                             </Grid>
//                             <Grid>
//                                 <Segmented options={['Population', 'Route']} value={selected} onChange={setSelected} />
//                             </Grid>
//                         </Grid>
//                     </>
//                 }
//             >
//                 <Paper>
//                     <div style={{ height: '70vh', width: '100%' }}>
//                         <GoogleMapReact
//                             bootstrapURLKeys={{ key: 'AIzaSyDQz72mL0bI2Li-VJ2AAyFl78sB4UbQIMk' }}
//                             defaultCenter={{ lat: -6.810583, lng: 39.257459 }}
//                             defaultZoom={20}
//                             yesIWantToUseGoogleMapApiInternals
//                             onGoogleApiLoaded={({ map, maps }) => {
//                                 mapRef.current = map;
//                                 mapsRef.current = maps;
//                                 setMapLoaded(true);
//                             }}
//                         />
//                     </div>
//                 </Paper>
//             </MainCard>
//             {/*<FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<CustomerServiceOutlined />}>*/}
//             {/*    <FloatButton />*/}
//             {/*    <FloatButton icon={<CommentOutlined />} />*/}
//             {/*</FloatButton.Group>*/}
//         </>
//     );
// }
//
// export default PetTracker;
