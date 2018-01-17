export const DOMAIN_PREFIX = '/test';

export const HOME = DOMAIN_PREFIX;
export const ABOUT = DOMAIN_PREFIX + '/about';
export const PROJECTS = DOMAIN_PREFIX + '/projects';
export const ROUTER_SINGLE_PROJECT = PROJECTS + '/:uniqueUrlKey'
export const SINGLE_PROJECT = (uniqueUrlKey) => PROJECTS + '/' + uniqueUrlKey;
export const EXPERIENCE = DOMAIN_PREFIX + '/experience';
export const CONTACT = DOMAIN_PREFIX + '/contact';

export const API_PREFIX = '/api';
export const PROJECT_API_PREFIX = API_PREFIX + '/project';
export const PROJECT_API_READ = (uniqueUrlKey) => PROJECT_API_PREFIX + '/' + uniqueUrlKey;
export const PROJECT_API_FILTER = (uniqueUrlKeys) => PROJECT_API_PREFIX + '/filter?uniqueUrlKeys=' + uniqueUrlKeys.join(',');
export const PROJECT_API_FILTER_ALL = PROJECT_API_PREFIX + '/filter?returnAll=true';

// export const MAIL_API_RECEIVE = (name, email, message) => '/receivemail?name=' + name + '&email=' + email + '&message=' + message;
export const MAIL_API_RECEIVE = '/receivemailll';