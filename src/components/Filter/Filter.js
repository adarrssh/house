import React from 'react'
import './Filter.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Filter = ({ filterItem, filterText,
    filterDateItem,filterDate,
    filterPriceItem,filterPrice,
    filterPropTypeItem,filterProp }) => {
    return (
        <div className='filter'>
            <div className="filter-body">

                <div className='filter1'>
                    <div className='drop-downdiv' data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="filter-left">

                            <p className="margin-btm-p">Location</p>
                            <p className='p-bold-text'>{filterText}</p>
                        </div>

                        <div className="filter-right">
                            <ArrowDropDownIcon className="icon-color" />
                        </div>

                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={() => filterItem("New York,USA")}>New York, USA</button></li>
                        <li><button className="dropdown-item" onClick={() => filterItem("Los Angeles,USA")} >Los Angeles, USA</button></li>
                        <li><button className="dropdown-item" onClick={() => filterItem("Chicago,USA")}>Chicago, USA</button></li>
                    </ul>
                </div>

                <div className='filter-line'></div>

                <div className='filter2'>
                    <div className='drop-downdiv' data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="filter-left">

                            <p className="margin-btm-p">When</p>
                            <p className='p-bold-text'>{filterDate}</p>
                        </div>

                        <div className="filter-right">
                            <ArrowDropDownIcon className='icon-color' />
                        </div>

                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={() => filterDateItem("July,2022")}>July,2022</button></li>
                        <li><button className="dropdown-item" onClick={() => filterDateItem("August,2022")}>August,2022</button></li>
                        <li><button className="dropdown-item" onClick={() => filterDateItem("September,2022")}>September,2022</button></li>
                    </ul>
                </div>

                <div className='filter-line'></div>

                <div className='filter3'>
                    <div className='drop-downdiv' data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="filter-left">

                            <p className="margin-btm-p">Price</p>
                            <p className='p-bold-text'>{filterProp}</p>
                        </div>

                        <div className="filter-right">
                            <ArrowDropDownIcon className="icon-color" />
                        </div>

                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={() => filterPriceItem(1000)}>$500-$1000</button></li>
                        <li><button className="dropdown-item" onClick={() => filterPriceItem(2000)} >$1000-$2000</button></li>
                        <li><button className="dropdown-item" onClick={() => filterPriceItem(3000)}>$2000-$3000</button></li>
                    </ul>
                </div>

                <div className='filter-line'></div>

                <div className='filter4'>
                    <div className='drop-downdiv' data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="filter-left">

                            <p className="margin-btm-p">Property Type</p>
                            <p className='p-bold-text'>{filterProp}</p>
                        </div>

                        <div className="filter-right">
                            <ArrowDropDownIcon className='icon-color' />
                        </div>

                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={() => filterPropTypeItem("House")}>House</button></li>
                        <li><button className="dropdown-item" onClick={() => filterPropTypeItem("Flat")}>Flat</button></li>
                        <li><button className="dropdown-item" onClick={() => filterPropTypeItem("Villa")}>Villa</button></li>
                    </ul>
                </div>

                <div className='filter-line'></div>
                <div className='filter5'>
                    <button type="button" className="btn button-col">Signup</button>
                </div>

            </div>
        </div>

    )
}

export default Filter