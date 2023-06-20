import { getUsers } from '../../lib/helper';
import { useQuery } from 'react-query';


export default function getUserHook(){


    const { isLoading, isError, data, error } = useQuery('users', getUsers)


    return {data};
}