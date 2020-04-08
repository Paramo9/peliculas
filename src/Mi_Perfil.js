import React from 'react'

class Mi_Perfil extends React.Component
    {
        render()
            {
                return(
                    <div>
                        <h1>{localStorage.getItem("nombre")}</h1>
                    </div>
                )
            }
    }

export default Mi_Perfil