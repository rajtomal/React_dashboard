import React, { useState } from 'react'
import './factoryDetails.scss'
import { factoryData, factoryCart } from '../../dummyData.js'
import { Icon } from '@iconify-icon/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FactoryDetails = () => {
    console.log(factoryData.date);
    const date = new Date(); // Convert to Date object
    const [selectedDate, setSelectedDate] = useState(null);
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <section className="factory-details">
                <div className='factory-details-cart page-main'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className='col-lg-5'>
                                    <div className='factory-title'>
                                        <p>Site</p>
                                        <h2>{factoryData.site}</h2>
                                    </div>
                                    <div className='factory-title'>
                                        <p>Exceedance</p>
                                        <h2>{factoryData.exceedance}</h2>
                                    </div>

                                </div>
                                <div className='col-lg-7'>
                                    <div className='factory-title'>
                                        <p>Catogory</p>
                                        <h2>{factoryData.catogory}</h2>
                                    </div>
                                    <div className='factory-title mt-0'>
                                        <p>Parameters</p>
                                        <div className='d-flex gap-1'>{factoryData.parameters.map(item => <span className={`parameters-tag 
                                        ${item.name == 'COD' ? 'factory-parameter-cod' : ''}
                                        ${item.name == 'COND.' ? 'factory-parameter-cond' : ''}
                                        ${item.name == 'PH' ? 'factory-parameter-ph' : ''}
                                        ${item.name == 'FLOW' ? 'factory-parameter-flow' : ''}
                                        ${item.name == 'TDS' ? 'factory-parameter-tds' : ''}
                                        ${item.name == 'TEMP' ? 'factory-parameter-temp' : ''}
                                        ${item.name == 'TSS' ? 'factory-parameter-tss' : ''}
                                        `} key={item.id}>{item.name}</span>)} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='factory-date-time d-flex justify-content-between'>
                                <div className='d-flex gap-1 align-items-center' ><Icon icon="uiw:date" width={16} height={16} /> <p>{factoryData.date.toLocaleDateString()}</p></div>
                                <div className='d-flex gap-1 align-items-center'><Icon icon="gravity-ui:clock" width={16} height={16} /><p>{factoryData.date.toTimeString().slice(0, 5)}</p></div>
                            </div>
                            <div className="d-flex gap-2 justify-content-end align-items-center">
                                {factoryData.parametersValue.map((item) => (
                                    <div key={item.id} className={`parameters-cart 
                                        ${item.name == 'COD' ? 'factory-parameter-cod' : ''}
                                        ${item.name == 'COND.' ? 'factory-parameter-cond' : ''}
                                        ${item.name == 'PH' ? 'factory-parameter-ph' : ''}
                                        ${item.name == 'FLOW' ? 'factory-parameter-flow' : ''}
                                        ${item.name == 'TDS' ? 'factory-parameter-tds' : ''}
                                        ${item.name == 'TEMP' ? 'factory-parameter-temp' : ''}
                                        ${item.name == 'TSS' ? 'factory-parameter-tss' : ''}
                                        `}>
                                        <h2>{item.name}</h2>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="factory-dashbord page-main">
                    <div className="row">
                        <div className="col-lg-3">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select a date"
                                    value={selectedDate}
                                    onChange={(newValue) => setSelectedDate(newValue)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='col-lg-3'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-lg-2'>
                            <button className='search-btn'><Icon icon="charm:search" />Search</button>
                        </div>
                    </div>
                    <div className="row pt-4">
                        {factoryCart.map((item) => (
                            <div className="col-lg-3 my-2">
                                <div className={`factory-parameter-cart 
                                ${item.name == 'COD' ? 'factory-parameter-cod' : ''}
                                ${item.name == 'COND.' ? 'factory-parameter-cond' : ''} 
                                ${item.name == 'PH' ? 'factory-parameter-ph' : ''}
                                ${item.name == 'FLOW' ? 'factory-parameter-flow' : ''}
                                ${item.name == 'TDS' ? 'factory-parameter-tds' : ''}
                                ${item.name == 'TEMP' ? 'factory-parameter-temp' : ''}
                                ${item.name == 'TSS' ? 'factory-parameter-tss' : ''}
                                `}>
                                    <div className='d-flex justify-content-between p-3'>
                                        <div>
                                            <h2>{item.name}</h2>
                                            <p>Limit: {item.limit}</p>
                                        </div>
                                        <div className='text-end'>
                                            <h2>{item.value}</h2>
                                            <p>{item.date.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex avg-factory">
                                        <div className='avg-cart'>
                                            <h4>Min</h4>
                                            <p>{item.min}</p>
                                        </div>
                                        <div className='avg-cart'>
                                            <h4>Max</h4>
                                            <p>{item.max}</p>
                                        </div>
                                        <div className='avg-cart'>
                                            <h4>Avg</h4>
                                            <p>{item.avg}</p>
                                        </div>
                                        <div className='avg-cart'>
                                            <h4>Data %</h4>
                                            <p>{item.data}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FactoryDetails