import React, { useState } from 'react'
import './factory.scss'
import DynamicTable from '../../Components/DynamicTable/DynamicTable'
import { Icon } from '@iconify-icon/react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const columns = [
    { field: 'name', label: 'Name', minWidth: 170 },
    { field: 'calories', label: 'Calories', align: 'right', minWidth: 170 },
    { field: 'fat', label: 'Fat (g)', align: 'right', minWidth: 170 },
    { field: 'carbs', label: 'Carbs (g)', align: 'right', minWidth: 170 },
    { field: 'protein', label: 'Protein (g)', align: 'right', minWidth: 170 },
];

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0,),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];
const Factory = () => {
    const openEditModal = (row) => {
        console.log('Edit clicked for:', row);
        // Implement your edit modal logic here
    };

    const openDeleteModal = (row) => {
        console.log('Delete clicked for:', row);
        // Implement your delete modal logic here
    };

    const handleRowClick = (row) => {
        console.log('Preview clicked for:', row);
        // Implement your preview logic here
    };
    return (
        <>
            <section className='page-main'>
                <div className='page-title'>
                    <h2>Factory</h2>
                </div>
                <div className='page-content'>
                    <DynamicTable columns={columns}
                        data={data}
                        renderRowActions={(row) => (
                            <>
                                <div className='d-flex gap-2 w-auto justify-content-center'>
                                    <a
                                        href="#"
                                        className="view-icon"
                                        title="Preview"
                                        onClick={() => handleRowClick(row)}
                                    >
                                        <Icon icon="lets-icons:view" width="22" height="22" />
                                    </a>
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
                </div>
            </section>
        </>
    )
}

export default Factory