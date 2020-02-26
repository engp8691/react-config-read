let okta_config = {"hello": "world"};

export const setConfig = c=>{
    okta_config = {...c};
}

export const getConfig = ()=>{
    return okta_config;
}
