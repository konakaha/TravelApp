import Reservation from "./Reservations";
import React from 'react';
import ReactDOM from 'react-dom'
import AddProperty from "./AddProperty";
import ShowAndEditAProperty from "./ShowAndEditAProperty"
import ShowReservations from "./ShowReservations";

function SideBar()
{
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link)=> {
    link.addEventListener("click", function(){
        links.forEach((e)=> {e.classList.remove('active')})
        this.classList.add('active')
        console.log("linkssss")
    })
})
    function renderReservations()
    {
        ReactDOM.render(<ShowReservations />, document.getElementById('root'));
    }
    function renderAddAProperty()
    {
        ReactDOM.render(<AddProperty />, document.getElementById('root'));
    }
    function showAndEditAProperty()
    {
        ReactDOM.render(<ShowAndEditAProperty/>, document.getElementById('root'));
    }
    return(
        <div>
      <a class="nav-link active" href="/">Home</a>

      <a class = " nav-link" onClick={renderReservations} > My Reservations</a>
      <div id="toBeShownOnlyToHostSideBarID" onClick={showAndEditAProperty} >
      </div>
      <div id="toBeShownOnlyToHostSideBarID2" onClick={renderAddAProperty}></div>
      </div>
    );
}
export default SideBar;