
import { createContext, useContext, useState, useEffect } from "react"

// Ciração do Contexto
const LoginContext = createContext()

// Criação do Provedor para o Contexto
export function LoginProvider(props) {

    // State que irá controlar qual Tema a aplicação está usando
    const [login, setLogin] = useState('')

    useEffect(()=> {
        const response  = localStorage.get('email')
        setLogin(response)
    }, [])

    // Função responsável por Trocar o Tema
    function changeLogin(info) {
        setLogin(info)
        localStorage.setItem('email', info)
    }

    return (

        // Construção dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <LoginContext.Provider value={{ login, changeLogin }}>
            {props.children}
        </LoginContext.Provider>

    )

}

// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useLogin() {

    const context = useContext(LoginContext)

    return context

}