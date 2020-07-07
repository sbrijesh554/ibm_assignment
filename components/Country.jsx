import React from 'react';
import CountryList from './CountryList.jsx';
import {getCountryList} from '../api/api';
import '../styles/styles.css';

class Country extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            countryList: [],
            cacheList: [],
            priviledge: true,
            errorText: null,
            selectedCountry: '',
            newCountryAdded: false,
            displayCountry: null
        }
        this.debounce = false;
    }

    componentDidMount(){
        getCountryList().then((resp) => {
            this.setState({
                countryList: resp.data,
                cacheList: resp.data,
                errorText: null
            });
        }).catch(()=>{
            this.setState({
                errorText: "Error in fetching country lists from server, Please reload the page again!!!"
            });
        })
    }

    setSelectedCountry = (selectedCountry) => {
        this.setState({
            selectedCountry,
            displayCountry: selectedCountry
        })
    }

    filterCountryList = (searchCountry) => {
        if(!this.debounce){
           this.debounce = setTimeout(()=>{
                this.debounce = false;
                const cacheList = JSON.parse(JSON.stringify(this.state.cacheList));
                const {countryList} = this.state;
                if(searchCountry){
                    const filteredList = cacheList.filter(
                        (country) => country.toLowerCase().indexOf(searchCountry.toLowerCase()) > -1
                    );
                    if(filteredList.length){
                        this.setState({
                            countryList : filteredList,
                            newCountryAdded: false,
                            selectedCountry: searchCountry
                        });
                    }
                    else{
                        countryList.splice(0,countryList.length,searchCountry);
                        this.setState({
                            countryList,
                            cacheList,
                            newCountryAdded: true,
                            selectedCountry: searchCountry
                        });
                    }
                }else{
                    this.setState({
                        countryList: cacheList,
                        newCountryAdded: false,
                        selectedCountry: '',
                        displayCountry: null
                    });
                }
                
            },10);
        }
    }

    addNewCountry = (country) =>{
        const {cacheList} = this.state;
        cacheList.splice(0,0,country);
        this.setState({
            countryList: cacheList,
            newCountryAdded: false,
            selectedCountry: country,
            displayCountry: country
        })
    }
    render(){
        const {countryList, priviledge, errorText, selectedCountry, newCountryAdded, displayCountry} = this.state;
        return (
            <React.Fragment>
                <div>
                     { displayCountry ?  <span>Selected Country is <b>{displayCountry}</b></span>:''}
                </div>
                <div>
                    {errorText !== null ? <span className ="error-text">{errorText}</span>: ''}
                </div>
                <div className="dropdown-container"> 
                    <CountryList
                        countryList={countryList}
                        priviledge = {priviledge}
                        newCountryAdded = {newCountryAdded}
                        selectedCountry = {selectedCountry}
                        setSelectedCountry = {(selectedCountry) => this.setSelectedCountry(selectedCountry)}
                        filterCountryList = {(searchCountry) => this.filterCountryList(searchCountry)}
                        addNewCountry = {(country)=>this.addNewCountry(country)}/>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Country;