import React from 'react';
import ReactDOM from 'react-dom';
import Country from './components/Country.jsx';



ReactDOM.render(
         <Country/>,
         document.getElementById("container")
);

// updatePageIndex=(event)=>{
//     const currentPage = event.target.value;
//     if(!this.debounce){
//         this.debounce = setTimeout(()=>{
//             this.debounce = null;
//             this.setState({
//                 currentPage
//             });
//         },5)
//     }
// }