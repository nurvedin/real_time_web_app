# nd222dp-examination-3
Examination assignment 3 for Nurvedin Dizdarevic, UDM2017

1. What is the URL to your application?
https://cscloud678.lnu.se/

2. Describe what you have done to make your application secure, both in code and when configuring your application server:
Following the code standard with the MVC pattern by separating the code into different modules. 
When setting up a webhook i wrote a "secret", which is used as a key when matching with the hashfunction HMAC that github sends to identify that the sender is GitHub. I used Let´s Encrypt to generate an ssl certificate to activate HTTPS on my website, by following the tutorial on their website step by step. Configured nginx to use HTTPS instead of HTTP. 

3. Describe the following parts, how you are using them, and what their purpose is in your solution:

Reversed proxy: 
A reverse proxy does the communication with the client instead of the actual server. This means that the architecture cant be viewed from outside providing anonimity for the severs. Reverse proxy can transform requests from HTTPS to HTTP as we did when configuring the nginx. Another thing that reverse proxy does is load balacing, which means that it redirects calls so that no server is being overloaded.

Process manager:
I followed the tutorial that was provided to use through coursepress when setting up PM2. A process manager makes sure the applications registered under it are running and also logs all events that happen. If a crash occurs it can restart and keep the application running by solving common system admin tasks. PM2 comes with an built-in load balancer. 

TLS certificates:
SSL/TLS certificates grants permissions to use encrypted communication via Public Key Infrastructure, and also authenticates the identity of the certificate’s holder. This was when setting up my ssl certificate with Let's Encrypt to be able to use HTTPS.

Environment variables:
An environment variable is useful when you have a general variable you need to use in multiple places in your application. A good example would be a url for a server that you make multiple calls to.
I only use environment variables to hold the ports at which the two applications listen to and also hold the github "secret" key as I mentioned above.

4. What differs in your application when running it in development from running it in production?
The biggest difference that I feel is the security aspect of things when running it locally on your machine or having the application exposed on the internet. All the little steps that you need to take and set up to have a good and secure application, even more if you are handling sensitive information. 

5. Which extra modules did you use in the assignment? Motivate the use of them, and how you have to make sure that they are secure enough for production:

node-fetch:
A light-weight module that brings window.fetch to Node.js. It has a MIT license and 13 366 489 weekly downloads when I checked the website. I'm using node-fetch to fetch data from GitHub API.

socket.io:
Socket.IO enables real-time bidirectional event-based communication between the browser and the server. I'm using socket.io to establish an connection between my client and server. 

x-hub-signature:
X-Hub-Signature is a compact way to validate real-time updates, such as webhooks from Facebook and GitHub. It has a MIT license. As mentioned above I am using x-hub signature to check that the post request comes from Github. 


