const NavigationButtons = ({setIsSubmitted}: any) => {
    return(
        <div id="navigation-buttons" className="flex ml-auto space-x-2 mr-10">
            <button className="flex" onClick={()=>{setIsSubmitted(false)}}>
                <img className="m-auto mr-1.5 " src="/power-on-svgrepo-com 1.svg" width="15"/>
                <span className="text-xs m-auto mr-10">Ausloggen</span></button>
        </div>
    )
}

export default NavigationButtons