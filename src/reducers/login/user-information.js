const defaultUser = {
    name:"",
    email:"",
    id:"",
    locale:"",
    picture: {
        data:{
            url:""
        }
    }
}

export default function (state = defaultUser, action) {
    switch (action.type) {
        case 'getUserInformation':
            return (action.payload);
        case 'getUserName':
            return (action.payload);
        case 'getUserImage':
            return (action.payload.picture.data.url);
        default:
            return state;
    }
}