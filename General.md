
## Installation

-   Adds 2 snippet references `theme.liquid`

    -   Right after the start of `<head>`

        ```liquid
        {% render "load-metafields" %}
        ```

    -   Right before the end of the `<body>` tag

        ```liquid
        {% render "bc_banner" %}
        ```

-   Adds a script tag to a - with PHP - generated js file

    ```
    https://gdpr-legal-cookie.beeclever.app/get-script.php?shop=abc.myshopify.com
    ```

-   Adds 3 snippets 
    
    - `zload-metafields.liquid`
    - `load-metafields.liquid`
    - `bc_banner.liquid`


## Behaviors

Claims to auto-update, however despite indicating so, doesn't  
actually seem to actively check, probably only overrides theme  
snippets with new releases without checking code integrity.
