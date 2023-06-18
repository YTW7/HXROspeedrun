import { useWallet } from '@solana/wallet-adapter-react'
import { useQuery } from 'react-query';
import { addUser, getUsers } from '../../lib/helper';

import { useQueryClient, useMutation } from "react-query"

export default function CheckWallet(){
     const { isLoading, isError, data, error } = useQuery('users', getUsers)
     const { connected, publicKey } = useWallet()

     const pkey = connected ? publicKey.toString() : '';
    //  console.log(data);

     const publicKeyExists = data.some(obj => Object.keys(obj).some(key => obj[key] === pkey));
    //  console.log(publicKeyExists);

     return (publicKeyExists) ;

}