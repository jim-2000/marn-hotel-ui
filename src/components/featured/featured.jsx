import React from 'react'
import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem  ">
            <img src="https://images.unsplash.com/photo-1659204958264-7983132db085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" className="featuredImg"   />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 propertys</h2>
            </div>
        </div>
        <div className="featuredItem  ">
            <img src="https://images.unsplash.com/photo-1659204958264-7983132db085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" className="featuredImg"   />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 propertys</h2>
            </div>
        </div>
        <div className="featuredItem  ">
            <img src="https://images.unsplash.com/photo-1659204958264-7983132db085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" className="featuredImg"   />
            <div className="featuredTitles">
                <h1 className='text-3xl font-bold '>Dublin</h1>
                <h2 className='text-blue-600 font-bold'>123 propertys</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured