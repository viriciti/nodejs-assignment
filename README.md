# ViriCiti Nodejs Assignment
![
](https://imgs.xkcd.com/comics/code_quality_3.png)

This repository holds the ViriCiti Nodejs assignment. In this project you will find the description regarding the assignment for you to do. This assignment represent what we do on a day to day basis. We receive raw data from vehicles store it on database then send it to browser app via websocket.

## Getting Started
First of all, fork the repository at:

`https://github.com/viriciti/nodejs-assignment`

Then open up your terminal and clone the forked repository

<sup>Replace [YOUR_USERNAME] with your name</sup>

`git clone https://github.com/[YOUR_USERNAME]/nodejs-assignment.git`

Enter the directory

`cd nodejs-assignment`

Install all the dependencies

`npm i`

Run [NATS](https://nats.io/) on a docker container (make sure that you've [installed docker](https://docs.docker.com/install/))

`npm run start-nats`

Run the project

`npm run start-broadcast`


## The Assignment
We have provided you with a starter kit that broadcast vehicle data to NATS. This is all setup for you. The architecture that you need to build is below:

![](https://github.com/viriciti/nodejs-assignment/raw/master/uml.png)

### Broadcast Server
The first rectangle on the left is the vehicle data broadcast server, it's already built and you can find the code on `./src/vehicle-data-generator/index.js`. You can run it with `npm run start-broadcast` then it will start to push data into NATS. In that file you can find some interesting question for you to answer if you want, and also some smaller side task (Not required) to make this assignment a little bit more interesting.

### Data Storage (To be build)
After data is pushed to NATS it will be available for other services to listen. Now comes the part where you  will have to start develop. Data that is broadcast-ed to NATS is not persisted, it means that we can not access historical data (such as data from past weeks) your task is to build a data storage server that will store all data in [MongoDB](https://www.mongodb.com/) and then serve it via an HTTP REST API and a WebSocket server for live data. So to summarize it here by the checklist of task you need to do:

 - [ ] Create MongoDB database
 - [ ] Push data from NATS to MongoDB
 - [ ] Create REST API
 - [ ] Create WebSocket API
 - [ ] Test all APIs
 - [ ] Create Docker container for app (Optional)

### Incident Reporting (Optional)
If you have some extra time or you want to do more stuff with the data, you can build an incident reporting service that should notify user and/or record the incident with location information to the database.

### Get Creative!
Besides all this services that are listed you are free to create more services or re-arrange it. Turn all this individual services to docker containers and link them together with service discovery such as [consul](https://www.consul.io/). Or maybe create a simple front end to show where the vehicle is using those server you've just built. We're always welcome for fresh ideas!

### The data
The assignment is based on a vehicle data generator. A stream of objects that looks like this:

```JS
{
  time: 1511512585495,
  energy: 85.14600000000002,
  gps: ["52.08940124511719","5.105764865875244"],
  odo: 5.381999999997788,
  speed: 12,
  soc: 88.00000000000007
}
```

* time - Unix timestamp of the moment the datapoint was recorder
* energy - Energy used in kWh
* gps - Latitude and longitude where the datapoint was recorded
* odo - The distance driven in km
* speed - The speed the vehicle was going in km/h
* soc - The state of charge (battery) of the vehicle in %

## Read up material
Looking to level up your knowledge and skills? These are some good articles/courses that you can check out.
* [Node.js Streams API](https://nodejs.org/api/stream.html)
* [Readable Streams & Back-pressure](https://www.transitions-now.com/2015/12/06/merging-time-series-data-streams-a-node-js-streams-case-part-2/)
* [Node.js TCP server](https://nodejs.org/api/net.html)
* [Service Registry with consul](https://www.consul.io/) or [etcd](https://coreos.com/etcd/)
* [Docker](https://www.docker.com/)
* [Testing REST API](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai)

### General
* Learn [Node.js and it's modules](http://nodeschool.io/#workshoppers)

## Questions
If you have any questions about the assignment or project setup feel free to contact us at <a href='mailto:s.surur@viriciti.com'>s.surur@viriciti.com</a>. You can also come by the office. We're always ready to help.

Good luck with the assignment!
