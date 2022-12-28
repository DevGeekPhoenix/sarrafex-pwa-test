# SarrafEx PWA Sample

This project is a sample of PWA that we are using in SarraEx Project.

## Features
> 1.Cleanup outdated caches

> 2.Proxied server side push notification api

> 3.Show Dashboard page as main page when user use pwa and show home page when user use browser tab

> 4.Offline fallback page

> 5.Startup splash screen for all devices

>6.Custom PWA Worker

>7.Shortcut pages for quick access 

###Production Deployment

 [https://sarrafex-pwa-sample.vercel.app](https://sarrafex-pwa-sample.vercel.app/)

###How To Use

####1- Clone the repo and run yarn install 
`$ yarn`
####2- Create a `.env` file and copy paste these variables
```javascript
    WEB_PUSH_EMAIL=< Email Address >
    WEB_PUSH_PRIVATE_KEY=< Your web push private key >
    NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=< Your web push public key >
    NEXT_PUBLIC_PROXY_IP=< Your Proxy IP Address >
    NEXT_PUBLIC_PROXY_PORT=< Your Proxy Port >
```
    
####3- run yarn vapid and copy paste the generated public and private keys to your `.env` 
`$ yarn vapid`

####4- Build and start the project
`$ yarn build`
`$ yarn start`

>:tw-26a0: if you want to get notification when using your local server do these steps below

#####1.Paste this address below in a blank chrome tab and go to chrome flag setting
`chrome://flags/#unsafely-treat-insecure-origin-as-secure`
#####2.Paste your local server address and port in* Insecure origins treated as secure* field
`http://<Your Local Host>:3999`
#####3.Enable * Insecure origins treated as secure*  and relunch your browser 

