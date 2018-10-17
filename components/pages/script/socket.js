import socketIOClient from 'socket.io-client';
import config from '../../../config/configClient';
const socket = socketIOClient(`${config.domain}`);
export default socket;