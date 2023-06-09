import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { deletePetRequest } from '../../utils/API';
import MainCard from '../../components/MainCard';
import {
    Button,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import { getPetsList, renderDateTime, renderDeviceStatus } from '../../functions/common';
import PendingIcon from '@mui/icons-material/Pending';
import StyledMenu from '../../components/StyledMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PolylineIcon from '@mui/icons-material/Polyline';
import DeleteConfirmModal from '../../components/DeleteConfirmModal';
import snack from '../../functions/snack';

const ListPets = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [pets, setPets] = useState([]);
    const [rowPet, setRowPet] = useState(null);
    const [delete_modal_open, setDeleteModalOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const navigateToAddPet = () => {
        navigate('add-pet');
    };

    const navigateToPetDetail = (id) => {
        navigate('edit-pet/' + id);
    };

    const navigateToDrawGeofence = (id) => {
        navigate('/pet-geofence/' + id);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (event, pet) => {
        setRowPet(pet);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openDeleteModal = () => {
        setAnchorEl(null);
        setDeleteModalOpen(true);
    };

    const deletePet = () => {
        deletePetRequest(rowPet.id)
            .then((res) => {
                snack.success('Pet deleted successfully');
                setDeleteModalOpen(false);
                getPetsList(setPets);
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to delete user');
            });
    };

    useEffect(() => {
        getPetsList(setPets);
    }, []);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>All Users</Grid>

                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <Button variant="contained" endIcon={<AddOutlinedIcon />} onClick={navigateToAddPet}>
                                    Add Pet
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                }
            >
                <Paper>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Pet Name</TableCell>
                                    <TableCell>Device No</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pet, idx) => {
                                    // if (filter_worthy(company.verification_status)) {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{renderDateTime(pet.created_at)}</TableCell>
                                            <TableCell>{pet.name}</TableCell>
                                            <TableCell>{pet.device_no}</TableCell>
                                            <TableCell>{renderDeviceStatus(pet.active)}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        disableElevation
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClick(e, pet)}
                                                    >
                                                        <PendingIcon />
                                                    </IconButton>

                                                    <StyledMenu
                                                        id="demo-customized-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'demo-customized-menu'
                                                        }}
                                                    >
                                                        <MenuItem
                                                            onClick={() => {
                                                                navigateToPetDetail(rowPet.id);
                                                            }}
                                                        >
                                                            <VisibilityIcon style={{ fontSize: 25, color: 'green' }} />
                                                            Edit
                                                        </MenuItem>

                                                        <MenuItem
                                                            onClick={() => {
                                                                navigateToDrawGeofence(rowPet.id);
                                                            }}
                                                        >
                                                            <PolylineIcon style={{ fontSize: 25, color: 'green' }} />
                                                            Draw Geofence
                                                        </MenuItem>

                                                        <MenuItem onClick={openDeleteModal} disableRipple>
                                                            <DeleteForeverIcon style={{ fontSize: 25, color: 'red' }} />
                                                            Delete
                                                        </MenuItem>
                                                    </StyledMenu>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                    // }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 20]}
                        component="div"
                        count={pets.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </MainCard>
            <DeleteConfirmModal
                isModalOpen={delete_modal_open}
                setIsModalOpen={setDeleteModalOpen}
                onDelete={deletePet}
                message={rowPet != null && `Are you sure you want to delete ${rowPet.name}`}
            />
        </>
    );
};

export default ListPets;
