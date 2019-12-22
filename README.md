# DatasetHub

Web application providing datasets

---
## Requirements
* Node 10
* Yarn
* cross-env
* concurrently

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install curl
      $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      $ sudo apt-get install -y nodejs

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.18.0

    $ npm --version
    6.13.4

###
### Yarn & nodemon installation
  After installing node, this project will need yarn too, so just run the following command.

      $ sudo npm install -g yarn
      $ sudo npm install -g nodemon

---

## Installation

    $ git clone https://github.com/Gabriel4256/DatasetHub
    $ cd DatasetHub
    
    $ sudo yarn setup
    
    if error occurs, then try this!
    
    $ sudo yarn install
    $ cd server 
    $ yarn install
    $ cd ../frontend
    $ yarn install
    
## Runnung the project
    $ yarn build
    $ sudo yarn prod

## Running the development server

    $ yarn dev

## Simple build for production

    $ yarn build
    
