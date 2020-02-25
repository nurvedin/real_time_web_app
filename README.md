# nd222dp-examination-3
Examination assignment 3 for Nurvedin Dizdarevic, UDM2017

1. What is the URL to your application?
http://cscloud678.lnu.se/

2. Describe what you have done to make your application secure, both in code and when configuring your application server.
When setting up a webhook i wrote a "secret", which is used as a key when matching with the hashfunction HMAC that github sends to identify that the sender is GitHub.  


3. Describe the following parts, how you are using them, and what their purpose is in your solution:
Reversed proxy:
Process manager:
TLS certificates:
Environment variables:
4. What differs in your application when running it in development from running it in production?
5. Which extra modules did you use in the assignment? Motivate the use of them, and how you have to make sure that they are secure enough for production
