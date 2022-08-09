import {API} from '../../../config';
export const authenticate = (data:any,next:any) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('prsnToken', JSON.stringify(data))
        next()

        
    }

}

export const isAuthenticated = () => {
    if(typeof window == 'undefined')  {
        return false
    }

    if (localStorage.getItem('prsnToken')){
        
        return JSON.parse( localStorage.getItem('prsnToken') || '' )
        
    }else{
        return false;
    }
}


export const signout = (data:any,next:any) => {
    if(typeof window !== 'undefined') {
        localStorage.removeItem('prsnToken');
        next();

    }
        

}

export const login = (email:string,password:string) => {
    //console.log(name,email,password)
    const body = {email,password}
    return fetch(`${API}/signin`, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': "application/json"
        },
        body:JSON.stringify(body)
    })
    .then(response => {
        
        return response.json()
        
    })
    .catch(err => {
        console.log(err)
    })
  }
  