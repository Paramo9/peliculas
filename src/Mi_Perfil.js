import React from 'react'

class Mi_Perfil extends React.Component
    {
        render()
            {
                return(
                    <div>
                        Mi Perfil, {localStorage.getItem("nombre")}, {localStorage.getItem("nivel")}
                    </div>
                )
            }
    }

export default Mi_Perfil