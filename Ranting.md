
# Ranting

## `theme.liquid`

THANKS FOR NOT MARKING YOUR FUCKING SNIPPET REFERENCES!

Unlike basically any other app you decided to just throw your shit in there.

How about, mhmh idk:

```liquid
<!-- BeeClever | Stupid Cookie App | User Definitions | Start -->
{%- render 'load-metafields.liquid' -%}
<!-- BeeClever | Stupid Cookie App | User Definitions | End -->
```

```liquid
<!-- BeeClever | Stupid Cookie App | Banner | Start -->
{%- render 'bc_banner.liquid' -%}
<!-- BeeClever | Stupid Cookie App | Banner | End -->
```

*Wordy, yes, however better than doing NOTHING!*

<br>

## `bc_banner.liquid`

How about naming the file properly?
Something like `BeeClever-Banner.liquid` ?

Yes in 2024 - even in shopify - we can use capitalization for snippet names.

Have none of them learned how to use `{%- liquid -%}` tag  
yet, about 40~ lines of liquid tags in `bc_banner.liquid`

Why would you put all your fucking code in  
a `{% unless request.design_mode %}`  
block, how about early returning?!

```liquid
{%- liquid

    if request.design_mode
        break
    endif

-%}
```

Also in those 40~ lines of liquid they assign variables with defaults  
**that are never used because they override them with right away**

Not that they know how to use `default` ;3 anyways, instead they opted  
for `if else endif if else endif if else endif if ..`

```liquid
{%- assign a = b | default : c -%}
```

Btw, what awful naming, both in the metafields & the snippet code:

- `bc_cookie_list`
- `bc_cookie_banner_header`
- `bc_cookie_banner_main`
- `bc_cookie_banner_settings`
- `bc_cookie_banner_footer`

All of these are NAMESPACED ( `bc_cookie` ) shop metafields as well  
as ISOLATED snippet variables, so why in the fuck are you prefixing  
everything with `bc_cookie` ?!

And they wrapped all the code in another condition  
instead of adding early breaks, fuck sake!

Btw, your triple condition is in the wrong  
order, liquid reads them from [right to left](https://shopify.dev/docs/api/liquid/basics#order-of-operations).

Why the fuck are you using such generic names as `banner-wrapper`,  
of course no other theme feature would ever come to use that ..

So much inline styling .. why?

<br>

## `load-metafields.liquid`

Same shit naming. 

Call it `BeeClever-User-Definitions.liquid` or whatever, anything is better, really.

Same shit with the liquid tags not using a `liquid` tag

Same shit with useless defaults

Same shit with not using `default`

Declared `metafields` just to not use it