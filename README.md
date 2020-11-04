# Illinois HEALS (ILHEALS)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3050c67c-cd46-49ec-b805-cbbbb8449d41/deploy-status)](https://app.netlify.com/sites/heals/deploys) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Helping Everyone Access Linked Systems (Illinois HEALS) is multi-year initiative to address child and youth victimization.

## Temporary Dev Site

https://heals.netlify.app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

<!--
## Trailing slash

If using Nginx, Nuxt router's `base` property, and Netlify, please configure Nginx to add a trailing slash to all non-file URLs:

```
...
location /irb/ {
        # force trailing slash for Nuxt
        rewrite ^([^.\?]*[^/])$ $1/ permanent;
        proxy_pass https://icjia-irb.netlify.app/;
    }
...
``` -->

## CHANGLOG

[See CHANGELOG.md](https://github.com/ICJIA/icjia-heals-2021/blob/master/CHANGELOG.md)

## License

[MIT @ Illinois Criminal Justice Information Authority](https://github.com/ICJIA/icjia-heals-2021/blob/master/LICENSE)
