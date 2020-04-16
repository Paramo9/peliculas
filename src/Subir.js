import React from 'react'

class Subir extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">Subir</h1><br /><br />
                        <h2 align="center">Subir Películas</h2>
                        <div className="wrapper">
                            <div id="formContent">
                                <input type="file" id="archivos" name="archivos" multiple /><br /><br />
                                <input type="button" value="Subir Películas" /><br /><br />
                            </div>
                        </div>
                    </div>
                )
            }
    }

export default Subir