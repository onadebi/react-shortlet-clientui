import React from 'react'
import './propertyList.scss';

const PropertyList = () => {
  return (
    <div className='propertyList'>
        <div className="propertyListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/216130589.jpg?k=8becf4d4986e254f315e4ad5da8b4491ae3e0ca433f6ca772d2f7dabe02b2b58&o=&hp=1" alt="" className='pListImg' />
            <div className="pListTitles">
                <h2>Hotels</h2>
                <h3>Mbadiwe apartments</h3>
            </div>
        </div>

        <div className="propertyListItem">
            <img src="https://bizwatchnigeria.ng/wp-content/uploads/2022/01/service-apartment.jpg" alt="" className='pListImg' />
            <div className="pListTitles">
                <h2>Ocean view</h2>
                <h3>Mbadiwe apartments</h3>
            </div>
        </div>

        <div className="propertyListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/331614205.jpg?k=32311477fdeb3a890c8c86ed0cb0a554a35d2d8bb0b691134f6e0d8d4bf78527&o=&hp=1" alt="" className='pListImg' />
            <div className="pListTitles">
                <h2>Condo</h2>
                <h3>Mbadiwe apartments</h3>
            </div>
        </div>

        <div className="propertyListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/238919728.jpg?k=f00c380402c823459675e7fa95b775e538423a030b8e81f1cd342580e1864d1f&o=" alt="" className='pListImg' />
            <div className="pListTitles">
                <h2>In-house</h2>
                <h3>Mbadiwe apartments</h3>
            </div>
        </div>

        <div className="propertyListItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/352338393.jpg?k=4ef3d83a8c80921dd116174b0a3d499d7793e133c0e9e1d5c97c43f549d21112&o=&hp=1" alt="" className='pListImg' />
            <div className="pListTitles">
                <h2>Shared space</h2>
                <h3>Mbadiwe apartments</h3>
            </div>
        </div>
    </div>
  )
}

export default PropertyList