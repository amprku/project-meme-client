export function getLoginStatus(status) {
    return { type: 'loginResponse', payload: status };
}

export function startFetching() {
    return { type: 'fetching' };
}

export function getUserInformation(userInformation) {
    return { type: 'getUserInformation', payload: userInformation };
}

export function getUserName(userInformation) {
    return { type: 'getUserInformation', payload: userInformation.name };
}

export function getUserImage(userInformation) {
    return { type: 'getUserInformation', payload: userInformation.picture.data.url};
}

export function toggleAuth(){
    return { type: 'toggleAuth'};
}

export function toggleLeftNav(){
    return { type: 'toggleLeftNav'};
}

export default {}