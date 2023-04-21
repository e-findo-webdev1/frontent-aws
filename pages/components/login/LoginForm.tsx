import {useEffect, useState} from "react";
import API from "axios";
const bcrypt = require('bcryptjs');

const LoginForm = ({setIsSubmitted}: any) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [clients, setClients] = useState();

    useEffect(() => {
        let apiName = 'https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/users';

        API.get(apiName)
            .then((response) => {
                setUsers(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

        API.get('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/clients')
            .then((response) => {
                setClients(response.data.Items)
            })
            .catch((error) => {
                console.log(error.response);
            });

    }, []);


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // @ts-ignore
        const hash = await users.filter((user: any)=> user.email == email)[0].password

        // @ts-ignore
        if (await bcrypt.compare(password, hash) == true) {
            setIsSubmitted(true)
            sessionStorage.setItem("user", JSON.stringify(users.filter((user: any)=> user.email == email)[0]))
            // @ts-ignore
            sessionStorage.setItem("company", JSON.stringify(clients.filter((client: any)=>
                // @ts-ignore
                client.client_id == users.filter((user: any)=> user.email == email)[0].client_id)[0]))
        }

        else {
            setError(1)
        }
    };

    return(
        <div id="content-page" className="mx-10 p-10">
            <img className="mb-7 m-auto h-40" src="/logo-1.svg"/>
            <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
                <div
                    className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-3 sm:p-8">
                        <h1 className="font-bold text-lg">Sign in to your account</h1>
                        <p className="text-red-500 text-md">
                            {error === 1
                            ? "Invalid username or password."
                            : ""}
                        </p>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium
                            text-gray-900 dark:text-white">
                                    Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border
                             border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                                       placeholder="name@company.com" required
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                   w-full p-2.5 mb-2" required
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="w-full text-white border font-medium rounded-lg
                                text-sm px-5 py-2.5 text-center bg-accent-color-2 hover:bg-accent-color-3">
                                Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm