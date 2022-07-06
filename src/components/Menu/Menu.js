import React from 'react'
import "./Menu.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import HotTubIcon from '@mui/icons-material/HotTub';
import LandscapeIcon from '@mui/icons-material/Landscape';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Menu = ({listItem,isLiked}) => {

    // const [heart, isHeart] = useState(true)

    return (
        <div className='Menu-card'>

            {listItem.map((list,key) => {
                return (
                    <div key={key} className="card-div">

                        <div className="btn-abs">

                            <button type="button" className="btn btn-primary position-relative">
                                Recommended
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    99+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </div>

                        <div className="card-top">
                            <img src={require("./menuimg.jpg")} alt="" />
                        </div>
                        <div className="card-btm">
                            <div className='house-price'>
                                <p><span>
                                    ${list.price}
                                </span>
                                    /month</p>

                                <div className='menu-icon' onClick={() => { isLiked(list.id) }}>
                                         {list.like===false?<FavoriteBorderIcon className='icon-color' />:<FavoriteIcon className='icon-color'/>}
                                    
                                </div>

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