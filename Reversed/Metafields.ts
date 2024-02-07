
interface bc_cookie {
    bc_cookie_banner_settings : any
    bc_cookie_banner_header : any
    bc_cookie_banner_footer : any 
    bc_cookie_banner_main : any 
    
    bc_cookie_list : {
        _bc_c_set : X
        [ name : string ] : CookieData
    }
}


interface CookieData {
    
    deletable : 'false' | 'true'
    editable : 'false' | 'true'
    
    recommendation : string
    description : string
    provider : string
    expires : string
    domain : string
    name : string
    path : string
    type : string
    uuid : string
    set : string
}


type X = CookieData & {
    
    ShopifyMinConsent : boolean
    autoUpdate : boolean
    optIn : boolean

    storefrontLanguage : string
    backendLanguage : string
}
