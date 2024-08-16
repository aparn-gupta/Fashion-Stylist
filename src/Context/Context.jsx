import { createContext, useState } from "react";
import run from "../config";


export const Context = createContext()


const ContextProvider = (props)  => {

    const [input, setInput] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [recentprompt, setrecentPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setrecentPrompt(input)
        setPrevPrompt(prev => [...prev, input])
        const response =  await run( `You are Fashion Stylist that suggests outfit and fashion tips and you will only answer questions related to Fashion, Beauty, Hair and Makeup. If the question is not about Fashion, you'll simply say that you are a Fashion Assistant and can't answer questions that are unrelated to it. My question is- ${input}`)
        
        
        let responseArray = response.split("**");

        let newArray = "";
        for (let i = 0; i < responseArray.length; i++)  {

            if  (i === 0 || i%2 !== 1) {
                newArray += responseArray[i];

            } else {
                newArray += "<b>"+responseArray[i]+"</b>";

                            }
        }

        let newResponse = newArray.split("*").join("</br> </br>")


   



        setResultData(newResponse)
        setLoading(false)
        setInput("")

    }

    //.

    const contextValue = {
        input,
        setInput,
        onSent,
        prevPrompt,
        setPrevPrompt,
        recentprompt,
        setrecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData

    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider