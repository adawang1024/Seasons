import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom/client';
import { isCompositeComponent } from 'react-dom/test-utils';
import SeasonDisplay from './SeaconDisplay';
import Spinner from './Spinner';
import './style/App.css'


class App extends React.Component {

    state = {lat:null, errorMessage: ''};

 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => 
                this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered');
    }




    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
         }

         if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
         }

         return <Spinner message="Please accept location request"/>;

    }


    render() {
     
        return (
            <div className = 'border red'>
               {this.renderContent()} 
            </div>
        );
        }
}



const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);
root.render(<App />);
