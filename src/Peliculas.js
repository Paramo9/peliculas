import React from 'react'
import firebase from 'firebase'
import {dbconfig} from './Config'

class Peliculas extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.showImage = this.showImage.bind(this)
                this.state = {link: ""}
            }
        
        showImage(event)
            {
                event.preventDefault();
                var app = firebase.app("firestore")
                app.storage().ref().child("Portadas").child("Toy_Story_4_2019.jpg").getDownloadURL().then((url) => {
                    this.setState({link: url})
                })
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Películas</h1>
                        <input type="button" value ="Ver" id="viewbtn" onclick={this.showImage} />
                        <img src={this.state.link} height="125px" width="200px"/> 
                    </div>
                )
            }
    }

export default Peliculas