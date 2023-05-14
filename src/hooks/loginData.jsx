
import { createContext, useContext, useState, useEffect } from "react"

// Ciração do Contexto
const LogoutContext = createContext()

// Criação do Provedor para o Contexto
export function LogoutProvider(props) {

  
    const [data, setData] = useState({
        email: '',
        senha: ''
    })

    // useEffect(()=> {
    //     const response  = localStorage.remove('email')
    //     setData(prev => {
    //        return {
    //         ...prev, response
    //        }
    //     })
    // }, [])

   
    // function changeLogin(e) {
    //     setData(prev => {
    //         const {value , name} = e.target
    //         return {
    //           ...prev,
    //           [name]: value
    //         }
    //       })
    //     localStorage.setItem('email', e)
    // }

    return (

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <LogoutContext.Provider value={{ data, setData }}>
            {props.children}
        </LogoutContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useLogout() {

    const context = useContext(LogoutContext)

    return context

}