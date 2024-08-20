import React from "react";

// The Context API is a feature in React, a popular JavaScript library for building user interfaces. The Context API provides a way to share values (such as global state) between components without having to pass props down manually through each level of the component tree. This is particularly useful for sharing data that many components in an application need to access, such as user authentication status, themes, or language preferences

// Prop drilling is a term used in React to describe the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components. This often results in the intermediate components receiving props they don't actually need, just so they can pass them down to the appropriate child component

const UserContext = React.createContext();
// every context is a provider(which provides data)
//every component inside UserContext will get access of global UserContext
//context => global variable jiske andar sara data hota he
//UserContext is a provider which gives access of all states to the components inside it

export default UserContext;
