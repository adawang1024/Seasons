import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    spring: {
        text: "It's Spring! Time for school!",
        iconName: 'tree'
    },
    summer: {
        text: "Summer is here! Go for the Quidditch World Cup!",
        iconName: 'orange sun outline'
    },
    autumn: {
        text: "It's the most exciting time of the year! Trick or treat!",
        iconName: 'brown leaf'
    },
    winter: {
        text: "So cold at Hogwarts in winter! Stay warm!",
        iconName: 'snowflake'
    },
    

}


const getSeason = (lat,month) => {
    if (month > 1 && month < 5){
        return lat > 0 ? 'spring':'autumn';
    }
    if (month == 5 || month == 6 || month == 7){
        return lat > 0? 'summer':'winter';
    }
    if (month == 8 || month == 9 || month == 10){
        return lat > 0? 'autumn':'spring';
    }
    if (month == 11 || month == 0 || month == 1){
        return lat > 0? 'winter':'summer';
    }

};


// functional compoenent

const SeasonDisplay = (props) => {
   
    const season = getSeason(props.lat, new Date().getMonth());
    const {text,iconName} = seasonConfig[season];

    
    return ( 
        <div className={`season-display  ${season}`}>
        <i className = {`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    )
   ;
       
};

export default SeasonDisplay;