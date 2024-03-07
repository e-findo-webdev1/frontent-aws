import useSWR from "swr";

const fetcher = (url:  string) => fetch(url).then(r => r.json())
const useMachines = () => {
    const {data, error, isLoading} = useSWR
    ('https://8v9jqts989.execute-api.eu-central-1.amazonaws.com/machines', fetcher)

    return { machines: data, isLoading, error };
};

export default useMachines;