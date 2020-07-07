import React, { useState } from 'react';
import '../styles/styles.css';
const searchIcon = require('../image/search-icon.png');

function CountryList(props) {
    const [showList, showCountryList] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const {countryList, priviledge, newCountryAdded, selectedCountry, setSelectedCountry, filterCountryList, addNewCountry} = props;
    const populateCountryList = () =>{
        let list = [];
        const countryListLength = countryList.length;
        if(countryListLength){
            for(let count=0; count < countryListLength; count++){
                if(!showAll && count>4){
                    break;
                }
                let country = countryList[count];
                list.push((<li className={`list ${selectedCountry===country ? 'highlight-item':''}`} key = {count}
                onClick = {(e) => {showCountryList(!showList);setSelectedCountry(e.target.textContent)}}>
                <b>{country}</b>
                {!showAll && count === 4 ?
                    <span className="show-all" onClick={(event) => {event.stopPropagation();setShowAll(!showAll)}}>{countryListLength - 5} more...</span>
                    : ''
                }
                {priviledge && newCountryAdded ?
                            (<button className="add-btn" data-country={country} onClick = {(e)=>{
                                e.stopPropagation();
                                addNewCountry(e.target.dataset.country)
                                }}>Add and Select
                            </button>) :
                            ''
                } 
            </li>))
            }
        }
        return (<ul className="list-parent">{list}</ul>);
    }

    return (
        <React.Fragment>
            <div className="btn-section">
                <span className="btn-label">Select a location</span>
                <div className = "arrow" onClick = {()=>{showCountryList(!showList);setShowAll(false)}}></div>
            </div>
            <div className = {`list-height ${showAll ? 'expand-height' : ''} ${!showList ? 'hide' : ''}`}>
                <img className="search-icon" src={searchIcon}></img>
                <input className="text-box" type = "text" placeholder = "Search..." value={selectedCountry}
                    onChange = {(e)=>filterCountryList(e.target.value)}/>
                {populateCountryList()}
            </div>
        </React.Fragment>
    );
}

export default CountryList;