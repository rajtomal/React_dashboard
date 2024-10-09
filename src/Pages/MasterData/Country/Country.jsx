import React, { useState } from 'react'
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
import Toast from '../../../Components/Toast/Toast';

const columns = [
    { id: 1, field: 'countryName', label: 'Name', minWidth: 170 },
    { id: 2, field: 'countryDescription', label: 'Description', minWidth: 100 },
]

const data = [
    {
        id: 1,
        countryName: 'Afghanistan',
        countryDescription: 'lorem ipsum',
    },
    {
        id: 2,
        countryName: 'Albania',
        countryDescription: 'lorem ipsum',
    },
    {
        id: 3,
        countryName: 'Algeria',
        countryDescription: 'lorem ipsum',
    },
]
const Country = () => {
    const [show, setShow] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [createUpdate, setCreateUpdate] = useState(Boolean);
    const [deleteObject, setDeleteObject] = useState({});
    const [createData, setCreateData] = useState({
        countryName: '',
        countryDescription: '',
    });

    const handleShow = () => {
        setShow(true);
        setCreateUpdate(true);
        setCreateData({})
    };
    const handleClose = () => setShow(false);
    const onSave = () => {
        const { countryName, countryDescription } = createData;
        console.log(createData);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreateData({
            ...createData,
            [name]: value,
        });
    };
    const openEditModal = (row) => {
        setCreateData({})
        setCreateUpdate(false);
        setShow(true);
        console.log('Edit clicked for:', row);
        setCreateData({
            ...row
        })
    };
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
                    <h2>Country</h2>
                    <button onClick={handleShow} className='add-btn'><Icon icon="ic:round-add" width="20" height="20" /> <span>Create Country</span></button>
                </div>
                <div className='page-content'>
                    <DynamicTable columns={columns}
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
                    />
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{createUpdate ? 'Create Country' : 'Update Country'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='mb-3'>
                                <TextField name='countryName' id="outlined-basic" value={createData.countryName} onChange={handleInputChange} label="Name" variant="outlined" />
                            </div>
                            <div className='mb-3'>
                                <textarea name="countryDescription" id="" value={createData.countryDescription} onChange={handleInputChange} placeholder='Description' rows="3"></textarea>
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
                    {/* <Toast show={true} errorName={'error'} errorMessage={'Country Deleted Successfully'} /> */}
                </div>
            </section>
        </>
    )
}

export default Country