import React from 'react'
import './TechinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from 'axios'
function TechinderCards() {
    const [people, setPeople] = React.useState([]);
 React.useEffect(() => {
   axios.get('https://techinder-app-backend.herokuapp.com/techinder/cards').then((response) => {
      //console.log(response.data)
      setPeople(response.data);
    });
  }, []);
    const swiped = (direction) => {
        console.log("You swiped: " + direction);
        
    };

    const outOfFrame = (name) => {
      console.log(name + " left the screen");
    };
    return (
      <div className="tinderCards">
        <div className="tinderCards_cardContainer">
                {
                    people.map((person) => {
                        return (
                            <TinderCard
                                className='swipe'
                                key={person.name}
                                onSwipe={(dir) => swiped(dir, person.name)}
                                onCardLeftScreen={() => outOfFrame(person.name)}
                                preventSwipe={["up", "down"]}
                            >
                                <div className='card' style={{backgroundImage: `url(${person.imgUrl})`}}>
                                    <h3>{person.name}</h3>
                                </div>
                          </TinderCard>
                        );
                    })
          }
        </div>
      </div>
    );
}

export default TechinderCards


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA-F4Ea8QGl3EfrSMONvX25GZP_XgOjOas",
//   authDomain: "techinder-app.firebaseapp.com",
//   projectId: "techinder-app",
//   storageBucket: "techinder-app.appspot.com",
//   messagingSenderId: "1082005877960",
//   appId: "1:1082005877960:web:44db2eafda2344ecbf21fd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);