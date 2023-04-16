import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import NavigationButtons from "./NavigationButtons";

const Navigation = ({setIsSubmitted}: any) => {

    return (
        <div id="navigation" className="mb-2 flex">
            <Logo/>
            <NavigationLinks/>

            <p className="text-xs my-auto ml-auto font-semibold">{typeof window !== 'undefined'
            ? JSON.parse(sessionStorage.getItem("company") as string).client_name : ''}
            </p>
            <NavigationButtons setIsSubmitted={setIsSubmitted}/>
        </div>
    )
}

export default Navigation