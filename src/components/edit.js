// import { useRef, useEffect, useState } from "react";
// import { useForm } from 'react-hook-form';
// import { useParams } from "react-router-dom";


// export  function Edit (props)  {

//     let params = useParams();
    
//     let [index, setIndex] = useState();

//     let data = useForm();

//     useEffect(function () {

//         let userMilgya = props.myUsers.find(function (user,index) {
//             if (user.name == params.userKaName) {
//                 setIndex(index);
//                 return true;
//             }
//         });
//         if (userMilgya) {
//            props.myUsers[index] = meraData ;
//         }
//     }, []);
//     function saveUser(meraData) {
//         console.log(meraData);
//         props.setUsers([...props.myUsers]);
//         data.reset(meraData);
//     }
//     return <div>
//         <h1>{params.userKaName}</h1>
//         <form onSubmit={data.handleSubmit(saveUser)}>
//             <div>
//                 <input {...data.register('name', { required: true })} />
//             </div>
//             {data.formState.errors.name && <div className="error">name btyen</div>}

//             <div>
//                 <input  {...data.register('email', { required: true })} />
//             </div>
//             {data.formState.errors.email && <div className="error">email btyen</div>}


//             <div>
//                 <input  {...data.register('password', {
//                     required: true, minLength: 6, validate: (some) => {

//                         for (let item of some) {
//                             let code = item.charCodeAt();
//                             if (code >= 65 && code <= 90) {
//                                 return true;
//                             }
//                         }

//                         return false;

//                     }
//                 })} />
//             </div>
//             {data.formState.errors.password && data.formState.errors.password.type == "required" && <div className="error">password btyen</div>}
//             {data.formState.errors.password && data.formState.errors.password.type == "minLength" && <div className="error">password ki min length 6 h</div>}
//             {data.formState.errors.password && data.formState.errors.password.type == "validate" && <div className="error">Aik capital letter bhi type kren</div>}



//             <button>Submit</button>
//         </form>

//     </div>

// }