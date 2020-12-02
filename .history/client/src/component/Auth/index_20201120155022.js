

 export const authenicate = (data,next)=>
 {
     if(typeof window !=='undefined'){
         localStorage.setItem('jwt',JSON.stringify(data))
         next()
     }
 }

 export const signOut = async (next)=>{
     if(typeof window !== 'undefined'){
         localStorage.removeItem('jwt')
         next()
         let response = await fetch('/api/signout')
         let json = await response.json()
         console.log(json)

     }
 }

 export const isAuthenicated = ()=>{
     if (typeof window =='undefined'){
         return false
     }
     if (localStorage.getItem('jwt')){
         return JSON.parse(localStorage.getItem('jwt'))
     }
     else{
         return false
     }
 }