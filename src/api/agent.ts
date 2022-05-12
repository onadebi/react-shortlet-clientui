import axios, { AxiosResponse } from 'axios';
import appsettings from '../configs/appsettings';


axios.defaults.baseURL = appsettings.baseUrl;



const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string)=> axios.get<T>(url).then(responseBody)
}

const ChuckCall ={
    list: () => requests.get<{}>('Chuck/categories'),
    random: (category: string) => requests.get<{}>(`/Chuck/randomjoke/${category}`)
}

const SearchCall ={
    list: (search: string) => requests.get<{}>(`Search?query=${search}`),
}

const SwapiCall ={
    list: () => requests.get<{}>(`Swapi/people`),
}

const agent = {
    ChuckCall, SearchCall,SwapiCall
}

export default agent;