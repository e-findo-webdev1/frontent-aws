import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import NavigationButtons from "./NavigationButtons";

const Navigation = ({setIsSubmitted}: any) => {

    return (
        <div id="navigation" className="mb-2 flex">
            <Logo/>
            <NavigationLinks/>
            <NavigationButtons setIsSubmitted={setIsSubmitted}/>
        </div>
    )
}

export default Navigation