import { useQuery } from "@tanstack/react-query";
import APIClient from "../connections/apiconnection";

function useGetMatch(name,id){
    let apiClient;
    if (name){
        apiClient = new APIClient(`/matchfound/${name}`)
    }else{
        apiClient = new APIClient(`/matches/${id}`)

    }
    // const apiClient = new APIClient('users/top');
    return useQuery({
        queryKey : ['match'],
        queryFn : () => apiClient.get(),
        refetchInterval : 3000
    })
}
export default useGetMatch;