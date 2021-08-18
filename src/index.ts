export * from './Client';
export { UserPermission, ChannelPermission, ServerPermission } from './api/permissions';

export const LIBRARY_VERSION = '5.0.1-alpha.6-patch.1';

export const defaultConfig = {
    apiURL: 'https://api.revolt.chat',
    autoReconnect: true,
    heartbeat: 30,
    debug: false,
    cache: false
};
