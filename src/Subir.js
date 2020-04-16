import React from 'react'

class Subir extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1 align="center">Subir</h1><br /><br />
                        <h2 align="center">Subir Películas</h2>
                        <label for="archivos">Elegir Archivos</label>
                        <div align="center"><input type="file" id="archivos" name="archivos" multiple /></div>
                    </div>
                )
            }
    }

export default Subir