import { buildResponse } from './utils/util';
import { register } from './services/register';

const HEALTH_PATH = '/health';
const REGISTER_PATH = '/register';
const LOGIN_PATH = '/login';
const VERIFY_PATH = '/verify';

export const handler = async (event) => {
    console.log('Request Event: ', event);
    let response;
    switch (true) {
        case event.httpMethod === 'GET' && event.path === HEALTH_PATH:
            response = buildResponse(200, 'success');
            break;
        case event.httpMethod === 'POST' && event.path === REGISTER_PATH:
            const registerBody = JSON.parse(event.body);
            response = await register(registerBody);
            break;
        case event.httpMethod === 'POST' && event.path === LOGIN_PATH:
            const loginBody = JSON.parse(event.body);
            response = login(loginBody);
            break;
        case event.httpMethod === 'POST' && event.path === VERIFY_PATH:
            response = buildResponse(200, 'success');
            break;
        default:
            response = buildResponse(404, '404 Not Found');
    }
    return response;
};