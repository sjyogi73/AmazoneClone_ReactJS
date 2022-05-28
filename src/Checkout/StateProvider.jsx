import React ,{ createContext, useContext, useReducer } from 'react';

//Preares The Data Layer {Like a Cloude} //InitialIZE the Data Layer
export const StateContext = createContext();

//Wrap our app and Provide the data Layer //Mounting the Data Layer

export const StateProvider =({reducer,initialState,children})=>
(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>    
);

//Pull infomation From The data Layer //Update a Data
export const useStateValue = ()=>useContext(StateContext);