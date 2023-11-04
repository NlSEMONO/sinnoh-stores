# sinnoh-stores

This is an e-commerce App based on stores in Pokemon's [Sinnoh](https://bulbapedia.bulbagarden.net/wiki/Sinnoh) region. 

## NOTE: Though you may view the project in deployment [here](https://sinnoh-store.vercel.app), some features may be slow due to poor computational resources on the server (it's an AWS EC2 instance running an ubuntu on a small amount of RAM) the API is hosted on.
## The [API](https://github.com/NlSEMONO/fmadarang.com/tree/main/main/sinnoh_stores) is built on the same server I used to build my website on. I chose to do this just to get a feel of how important computational power is to a server, even if it's a small one. 
## Due to how slow the API is in deployment, the best way to experience this project is by hosting the API yourself locally on your machine.

Steps: 
1. Clone the [API's repo](https://github.com/NlSEMONO/fmadarang.com/tree/main/main/sinnoh_stores) by downloading it or using git clone.
2. Create a virtual environment for the directory of the repo that was just cloned, then download django in it.
3. cd to main then run python manage.py runserver on it
4. Clone this repo (downloading or git clone)
5. cd to store-app directory
6. run npm run dev
7. open http://localhost:3000 on your browser to view the app!
