import { useQuery } from "@tanstack/react-query";
import APIClient from "../connections/apiconnection";

function useTopTenUsers(){
    const apiClient = new APIClient('users/top');
    return useQuery({
        queryKey : ['players'],
        queryFn : () => apiClient.getTopTen()
    })
}
export default useTopTenUsers;