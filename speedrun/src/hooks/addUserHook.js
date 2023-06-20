// import { addUser } from '../../lib/helper';
// import {data} from './getUserHook'
// import { useQueryClient, useMutation } from "react-query"


// export default function addUserHook(){

//     const queryClient = useQueryClient()

//     const addMutation = useMutation(addUser, {
//         onSuccess : () => {
//                    queryClient.prefetchQuery('users', getUsers)
//                }
//            })

//            const handleSubmit = (e) => {
//             // e.preventDefault();
//             // if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");
//             let { username, pubKey, avatar, points } = formData;
          
//             const model = {
//                 username : generateUsername(),
//                 pubKey: pkey,
//                 points: 0,
//                 avatar: getAvatarUrl(pkey),
//                 P1T1:true,
//                 P1T2:false,
//                 P1T3:false,
//                 P1T4:false,
//                 P1T5:false,
//                 P1T6:false,
//                 P1T7:false,
//                 P1NFT:false,
//                 P1Milestone:''   
//             }
      
//               addMutation.mutate(model)
//             }

//   return {handleSubmit}

// }