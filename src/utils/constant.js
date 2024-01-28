export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/User_icon_1.svg/2048px-User_icon_1.svg.png";
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const TMDB_IMAGE = "https://image.tmdb.org/t/p/original"
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
export const SUPPORTED_LANGUAGES = [
    { identifire: 'en', name: 'English' },
    { identifire: 'hindi', name: 'Hindi' },
    { identifire: 'sp', name: 'Spanish' },
    { identifire: 'sanskrit', name: 'Sanskrit' }
];

export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

