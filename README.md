# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## How to run the code
In order to run the code, I would paste the test scenarios at the bottom of the index.js file of the application and then run the whole program with live server. Once the page has loaded in the browser, I would press F12 in order to open the browser console and see the logged outputs of the test scenarios. 

## A brief overview of my approach

Firstly, I created the counterReducer function that takes the initial state and an action. It handles three actions, 'ADD', 'SUBTRACT', and 'RESET' that updates the value in the state according to the relevant dispatched actions. 

The createStore function then takes in the reducer function as a parameter which manages the state internally. 
I then implemented the {dispatch, getState & subscribe} methods in order to dispatch actions to change the state, return the current state and allow other subscriber functions to subscribe to state changes. 

In order to initialize the state, I dispatched the dummy '__INIT__' action to ensure that the state is not undefined when the store is created. Once the store is created, I then subscribe a function to log the current state whenever the state changes.

## Challenges I faced and how I overcame them

During the early stages of my code, I had a challenge with initially understanding why the 'RESET' action in my test scenario was working even though I did not explicitly create a 'RESET' handler in the counterReducer function. I later realized that because I had already placed a default state value as an argument in the counterReducer function (state = { value: 0 }), any unknown action types—including 'RESET'—would simply return the current state without modification. This made it look like the state was resetting, but in reality, it was just persisting. Once I understood this behavior, I added an explicit handler for the 'RESET' action (if (action.type === 'RESET') return { value: 0 };) to ensure the reducer resets the state properly when that action is dispatched. 

## Summary

This project helped me deeply understand how Redux-like state management works under the hood. I practiced concepts like pure functions, immutability, and subscriptions to manage and log the state of a counting Tally App. 
