import {useEffect, useState} from 'react';
  
function Activities(){
    function loadActivity(){
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => setActivity(data.activity));
    }

    const[activity,setActivity]=useState([]);
    useEffect(()=>{loadActivity()},[]);

    return(

        <div className="content-start my-[20%]">
            <h1 className="text-yellow-400 text-5xl my-[15px]">{activity}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={loadActivity}>Load activities</button>
        </div>

        
    );
}

export default Activities;

