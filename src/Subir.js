import React from 'react'

class Subir extends React.Component
    {

        constructor(props)
            {
                super(props)
                this.state = {archivos: null}
                this.handleChange = this.handleChange.bind(this)
            }

        handleChange(event)
            {
                this.setState({archivos: event.target.files})
                alert(this.state.archivos.length)
            }

        render()
            {
                return(
                    <div>
                        <h1 align="center">Subir</h1><br /><br />
                        <div className="wrapper">
                            <div id="formContent">
                                <h2 align="center">Subir Películas</h2>
                                <input type="file" id="archivos" name="archivos" multiple onChange={this.handleChange} /><br /><br />
                                <input type="button" value="Subir Películas" /><br /><br />
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Subir