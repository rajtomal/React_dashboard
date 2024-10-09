import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify-icon/react';
import DynamicTable from '../../../Components/DynamicTable/DynamicTable'
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableSkeleton from '../../../Components/TableSkeleton/TableSkeleton';
import { getDivision, postDivision } from '../../../Services/MasterDataServices';
import Toast from '../../../Components/Toast/Toast';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const columns = [
    { id: 1, field: 'name', label: 'Name', minWidth: 170 },
    { id: 2, field: 'description', label: 'Description', minWidth: 100 },
]

const data = [
    {
        id: 1,
        name: 'divisionName',
        description: 'lorem ipsum',
    },
    {
        id: 2,
        name: 'divisionName1',
        description: 'lorem ipsum1',
    },
    {
        id: 3,
        name: 'divisionName2',
        description: 'lorem ipsum2',
    },
]
const Division = () => {
    const [show, setShow] = useState(false);
    const [tableSkeleton, setTableSkeleton] = useState(true);
    const [getData, setGetData] = useState([]);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [createUpdate, setCreateUpdate] = useState(false);
    const [deleteObject, setDeleteObject] = useState({});
    // create-update interface
    const [createData, setCreateData] = useState({
        countryId: 0,
        name: '',
        description: '',
    });
    // Toast model
    const [isToast, setIsToast] = useState({
        show: false,
        message: '',
        type: '',
    });
    // GET Division DATA
    useEffect(() => {
        setTableSkeleton(true);
        const fetchData = async () => {
            try {
                const result = await getDivision();
                setGetData([...getData, result]);
                setTableSkeleton(false);
                setIsToast({
                    show: true,
                    message: 'Successfully fetched data',
                    type: 'success',
                })
            } catch (error) {
                console.error('Error fetching data:', error);
                setTableSkeleton(false);
                setIsToast({
                    show: true,
                    message: error.message,
                    type: 'error',
                })
            }
        };
        fetchData();
    }, []);

    // POST Division DATA
    const handleSave = async () => {
        try {
            const result = await postDivision(createData);
            setGetData([...getData, result]);
            setIsToast({
                show: true,
                message: 'Successfully created data',
                type: 'success',
            })
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsToast({
                show: true,
                message: error.message,
                type: 'error',
            })
        }
    };

    const handleShow = () => {
        setCreateData({});
        setShow(true);
        setCreateUpdate(true);
    };
    const handleClose = () => setShow(false);
    const onSave = () => {
        console.log(createData);
        handleSave();
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreateData({
            ...createData,
            [name]: value,
        });
        console.log(e.target.value);
    };

    // EDIT Section
    const openEditModal = (row) => {
        setCreateUpdate(false);
        setShow(true);
        console.log('Edit clicked for:', row);
        setCreateData({
            ...row
        })
    };


    // DELETE Section
    const openDeleteModal = (row) => {
        console.log('Delete clicked for:', row);
        setDeleteObject(row);
        setDeleteOpen(true);
    };

    const onDelete = () => {
        console.log(deleteObject);
    };
    const handleDeleteClickClose = () => {
        setDeleteOpen(false);
    };

    return (
        <>
            <section className='page-main'>
                <div className='page-title'>
                    <h2>Division</h2>
                    <button onClick={handleShow} className='add-btn'><Icon icon="ic:round-add" width="20" height="20" /> <span>Create Division</span></button>
                </div>
                <div className='page-content'>
                    {tableSkeleton && <TableSkeleton />}
                    {!tableSkeleton && <DynamicTable columns={columns}
                        data={data}
                        renderRowActions={(row) => (
                            <>
                                <div className='d-flex gap-2 w-auto justify-content-center'>
                                    <a
                                        href="#"
                                        className="edit-icon"
                                        title="Edit"
                                        onClick={() => openEditModal(row)}
                                    >
                                        <Icon icon="mdi:edit-outline" width="22" height="22" />
                                    </a>
                                    <a
                                        href="#"
                                        className="delete-icon"
                                        title="Delete"
                                        onClick={() => openDeleteModal(row)}
                                    >
                                        <Icon icon="mingcute:delete-2-line" width="22" height="22" />
                                    </a>
                                </div>
                            </>
                        )}
                    />}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{createUpdate ? 'Create Division' : 'Update Division'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-3'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        name='countryId'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={createData.countryId}
                                        label="Country"
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value={0} disabled>
                                            Select Country
                                        </MenuItem>
                                        <MenuItem value={1}>Ten</MenuItem>
                                        <MenuItem value={2}>Twenty</MenuItem>
                                        <MenuItem value={3}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='mb-3'>
                                <TextField name='name' id="outlined-basic" value={createData.name} onChange={handleInputChange} label="Name" variant="outlined" />
                            </div>
                            <div className='mb-3'>
                                <textarea name="description" id="" value={createData.description} onChange={handleInputChange} placeholder='Description' rows="3"></textarea>
                            </div>
                            <div className='d-flex justify-content-end gap-3'>
                                <button className='btn-cancel' type='button' onClick={handleClose}>Cancel</button>
                                <button className='btn-save' type="button" onClick={onSave}>{createUpdate ? 'Save' : 'Update'}</button>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {/* Delete Modal */}
                    <Dialog
                        open={deleteOpen}
                        onClose={handleDeleteClickClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            Delete Confirmation
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to delete it? This action cannot be undone.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <button className='btn-cancel' type='button' onClick={handleDeleteClickClose}>Cancel</button>
                            <button className='btn-save' type="button" onClick={onDelete}>Delete</button>
                        </DialogActions>
                    </Dialog>
                    <Toast show={true} errorName={isToast.type} errorMessage={isToast.message} />
                </div>
            </section>
        </>
    )
}

export default Division