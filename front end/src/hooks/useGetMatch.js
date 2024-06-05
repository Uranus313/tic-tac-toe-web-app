import { useQuery } from "@tanstack/react-query";
import APIClient from "../connections/apiconnection";

function useGetMatch(name,id){
    let apiClient;
    let intervalRate;
    if (name){
        apiClient = new APIClient(`/matchfound/${name}`);
        intervalRate = 3000;
    }else{
        apiClient = new APIClient(`/matches/${id}`);
        intervalRate = 1000;
    }
    // const apiClient = new APIClient('users/top');
    return useQuery({
        queryKey : ['match'],
        queryFn : () => apiClient.get(),
        refetchInterval : intervalRate
    })
}
export default useGetMatch;