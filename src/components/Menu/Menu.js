import React, { useState } from 'react'
import "./Menu.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import HotTubIcon from '@mui/icons-material/HotTub';
import LandscapeIcon from '@mui/icons-material/Landscape';
import data from '../data'

const Menu = () => {

    const [lists, setList] = useState(data);

    return (
        <div className='Menu-card'>

            {lists.map((list) => {
                return (
                    <div className="card-div">

                        <div className="card-top">
                            <img src={require("./menuimg.jpg")} alt="" />
                        </div>
                        <div className="card-btm">
                            <div className='house-price'>
                                <p><span>
                                    ${list.price}
                                </span>
                                    /month</p>
                                <FavoriteBorderIcon className='icon-color' />

                            </div>
                            <div className='house-name'>
                                <p>{list.name}</p>
                            </div>
                            <div className='house-address'>
                                <p>{list.address}</p>

                            </div>
                            <div className="line-grey">

                            </div>


                            <div className='house-info'>
                                <div className="beds">
                                    <div className='icon'>
                                        <AirlineSeatIndividualSuiteIcon />
                                    </div>
                                    <div>{list.debs} Beds</div>
                                </div>
                                <div className="bathroom">
                                    <div className='icon'>
                                        <HotTubIcon />
                                    </div>
                                    <div>{list.bathroom} Bathroom</div>
                                </div>
                                <div className="area">
                                    <div className='icon'>
                                        <LandscapeIcon />
                                    </div>
                                    <div>{list.area} sq ft</div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>


    )
}

export default Menu