import { faBed,faPlane,faCar,faTaxi,faCalendarDays,faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { COLORS } from '../../utils'
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range'
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'

//
const Header = ({type}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [destination, setdestination] = useState('')
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  });
  const navigate = useNavigate();

  const handleOption =(name,oparation)=>{
    setOptions((prev)=>{
      return {
        ...prev,
        [name]:oparation === "i" ? option[name]+1: option[name] - 1,
      };
    });
  }

const optionUi = ()=>{
  return (
    <div className="options  ">
    <div className="optionItem">
      <span className="optionText text-black font-bold">Adult</span>
      <button className="optionCounterButton" onClick={()=>handleOption("adult","i")} >+</button>
      <span className="optionCounter">{option.adult}</span>
      <button className="optionCounterButton" 
      disabled={option.adult <=1}
      onClick={()=>handleOption("adult","d")} >-</button>
    </div>
    <div className="optionItem">
      <span className="optionText text-black font-bold">Childs</span>
      <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
      <span className="optionCounter">{option.children}</span>
      <button className="optionCounterButton" 
      onClick={()=>handleOption("children","d")}
      disabled={option.children <=0}
      >-</button>
    </div>
    <div className="optionItem">
      <span className="optionText text-black font-bold">Room</span>
      <button className="optionCounterButton"onClick={()=>handleOption("room","i")}>+</button>
      <span className="optionCounter">{option.room}</span>
      <button className="optionCounterButton"
       disabled={option.room <=1}
      onClick={()=>handleOption("room","d")}>-</button>
    </div>
  </div>
  );
}

const handleSearch = ()=>{
  navigate("/hotels",{state:{destination,date,option}});
}

  return (
    <div className='header ' style={{backgroundColor:COLORS.primary}}>
     <div className={type === "list" ? "header_container listmode" : "header_container"} >
        <div className='header_list flex gap-10 flex-wrap'>
          <div className='flex gap-3 items-center hActive'>
            <FontAwesomeIcon icon={faBed}  />
            <span>Hotel</span>
          </div>
          <div className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faPlane}  />
            <span>Flights</span>
          </div>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faCar}  />
            <span>Car rentals</span>
          </div>
          <div className='flex gap-2 items-center '>
            <FontAwesomeIcon icon={faBed}  />
            <span>Attaction</span>
          </div>
          <div className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faTaxi}  />
            <span>Airport Taxis</span>
          </div>
        </div>
         
        {
          type !== "list" &&
      <>
          <h1 className='text-5xl font-bold mt-16 md:text-4xl xl:text-5xl'>Find your next stay</h1>
          <p className='text-2xl font-bold my-2 sm:text-xl md:text-lg xl:text-lg'>Search low prices on hotels, homes and much more...</p>
    
          <div className='header_search flex justify-between items-center'>
            <div className='flex gap-2 items-center border-r-4 border-yellow-600 '>
              <FontAwesomeIcon icon={faBed} className="text-gray-300"  />
              <input 
              // value={destination}
              onChange={(e)=>setdestination(e.target.value)}
              type={"text"}
              placeholder={"Where are you going?"}
              className='header_search_input border-none outline-none text-black font-semibold'
              />
            </div>
            <div className='flex gap-2 items-center'
            >
              <FontAwesomeIcon icon={faCalendarDays} 
                className="text-gray-500 cursor-pointer"              
              />
              <span 
              className='text-gray-600 
              font-semibold cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}            
              >
                {`${format(date[0].startDate, 'MMM dd')} to ${format(date[0].endDate, 'MMM dd')}`}
              </span>
         
          {
            isOpen &&
            <DateRange
                editableDateInputs={true}
                onChange={(ranges) => {
                  console.log(ranges);
                  setDate([ranges.selection]) ;
                  
                }}
                
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date-range"
                minDate={new Date()}
                rangeColors={[COLORS.primary]}
            />
          }
            </div>
            <div className='flex gap-2 items-center'>
              <FontAwesomeIcon icon={faPerson}  className="text-gray-500"  />
              <span className='text-gray-500 font-semibold cursor-pointer'
              onClick={() => setIsOptionOpen(!isOptionOpen)}
              >{`${option.adult} adults. ${option.children} childrean. ${option.room} room.`}</span>
            {
             isOptionOpen && optionUi()
            }
             
            </div>
            <div className='flex gap-2 items-center'>
              <button className='bg-blue-500' style={{padding:"10px 18px"}} onClick={handleSearch}>Search</button>
            </div>
          </div>
       </>
        }
     </div>   
    </div>
  )
}

export default Header