# WORK IN PROGRESS - Please Visit Soon for the Completed Code

[![Build Status](https://travis-ci.org/IBM/predict-wildfires.svg?branch=master)](https://travis-ci.org/IBM/predict-wildfires)
# Predict Wildfires with Watson Studio Machine Learning

For this Code Pattern, we will use [data on Wildfires](https://firms.modaps.eosdis.nasa.gov/active_fire/#firms-txt) from [NASA](https://earthdata.nasa.gov/) to predict the intensity of Wildfires, using [Watson Studio](https://console.bluemix.net/catalog/services/watson-studio) [Machine Learning](https://console.bluemix.net/catalog/services/machine-learning).
NASA provides data for various things, from weather and climate to solar flares and wildfire. This data is paid for by U.S. taxpayers and is free to use. The missing component is machine learning, which can take data and train a model to predict one of the features of the data set. For this example, we'll grab wildfire data and build a model that can predict intensity of the fire base on latitude and longitude.

When the reader has completed this Code Pattern, they will understand how to:

* Use [Watson Studio](https://console.bluemix.net/catalog/services/watson-studio) [Machine Learning](https://console.bluemix.net/catalog/services/machine-learning) to train a model.
* Gather data from NASA for Wildfires.
* Create a predictor for intensity of wildfires based on latitude and longitude.

![](doc/source/images/architecture.png)

## Flow

1. Use Watson Studio to add data assets and services.
2. Create the Machine Learning Model in Watson Machine Learning.
3. User interacts with Web UI to choose location of a fire.
4. Web UI interacts with ML model to predict brightness of fire.

## Included components

* [Watson Studio](https://console.bluemix.net/catalog/services/watson-studio)
* [Machine Learning](https://console.bluemix.net/catalog/services/machine-learning)

## Featured technologies

* [Artificial Intelligence](https://medium.com/ibm-data-science-experience): Artificial intelligence can be applied to disparate solution spaces to deliver disruptive technologies.

<!--
# Watch the Video
-->

# Steps
Use the ``Deploy to IBM Cloud`` button **OR** create the services and run locally.

## Deploy to IBM Cloud
<!--Update the repo and tracking id-->
[![Deploy to IBM Cloud](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/IBM/predict-wildfires.git)

1. Press the above ``Deploy to IBM Cloud`` button and then click on ``Deploy``.

<!--optional step-->
2. In Toolchains, click on ``Delivery Pipeline`` to watch while the app is deployed. Once deployed, the app can be viewed by clicking ``View app``.
![](doc/source/images/toolchain-pipeline.png)

## Run locally
> NOTE: These steps are only needed when running locally instead of using the ``Deploy to IBM Cloud`` button.

1. [Clone the repo](#1-clone-the-repo)
2. [Create Watson Studio services with IBM Cloud](#2-create-watson-studio-services-with-ibm-cloud)
3. [Import the Conversation workspace](#3-import-the-conversation-workspace)
4. [Load the Discovery documents](#4-load-the-discovery-documents)
5. [Configure credentials](#5-configure-credentials)
5. [Run the application](#6-run-the-application)

### 1. Clone the repo

Clone the `predict-wildfires` repository locally. In a terminal, run:

```
$ git clone https://github.com/IBM/predict-wildfires
```

### Create Watson Studio services with IBM Cloud
# Links

# Learn more

* **Artificial Intelligence Code Patterns**: Enjoyed this Code Pattern? Check out our other [AI Code Patterns](https://developer.ibm.com/code/technologies/artificial-intelligence/).
* **Data Analytics Code Patterns**: Enjoyed this Code Pattern? Check out our other [Data Analytics Code Patterns](https://developer.ibm.com/code/technologies/data-science/)
* **AI and Data Code Pattern Playlist**: Bookmark our [playlist](https://www.youtube.com/playlist?list=PLzUbsvIyrNfknNewObx5N7uGZ5FKH0Fde) with all of our Code Pattern videos
* **With Watson**: Want to take your Watson app to the next level? Looking to utilize Watson Brand assets? [Join the With Watson program](https://www.ibm.com/watson/with-watson/) to leverage exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.
* **Data Science Experience**: Master the art of data science with IBM's [Data Science Experience](https://datascience.ibm.com/)
* **Spark on IBM Cloud**: Need a Spark cluster? Create up to 30 Spark executors on IBM Cloud with our [Spark service](https://console.bluemix.net/catalog/services/apache-spark)

# License
[Apache 2.0](LICENSE)
