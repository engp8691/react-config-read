let okta_config = {"hello": "world"};

export const setConfig = data=>{
    okta_config = {...data};
}

export const getConfig = ()=>{
    return okta_config;
}
