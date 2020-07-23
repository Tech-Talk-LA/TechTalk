import React from 'react';

const initialUserState = {
  isLoggedIn : false,
  userInfo : {
    id : '',
    username: '',
    email: '',
    toTeach: '', 
    toLearn: '' 
  },
};

const initialMatchesState = {
  fetching: false, 
  matches: [],
}; 

const UserStateContext = React.createContext(); 
const UserDispatchContext = React.createContext();
const MatchesContext = React.createContext(); 
const MatchesDispatchContext = React.createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'successfulLogIn': {
      return {
        isLoggedIn : true,
        userInfo: action.userInfo
      }; 
    }; 
    default: {
      throw new Error(`Unhandled action type: ${action.type} `); 
    }
  };
};

const matchReducer = (state, action) => {
  switch (action.type) {
    case 'fetchingMatches': {
      return {
        ...state,
        fetching: true
      };
    };
    case 'addMatchesToState': {
      return {
        fetching: false, 
        matches: [...action.payload]
      };
    };
    default: {
      throw new Error(`Unhandled action type: ${action.type} `); 
    };
  };
};

const userProvider = ({ children }) => {
  const [userState, userDispatch] = React.useReducer(userReducer, initialUserState); 
  return (
    <UserStateContext.Provider value={userState}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const matchesProvider = ({ children }) => {
  const [matchesState, matchesDispatch] = React.useReducer(matchReducer, initialMatchesState); 
  return (
    <MatchesContext.Provider value={matchesState}>
      <MatchesDispatchContext.Provder value={matchesDispatch}>
        {children}
      </MatchesDispatchContext.Provder>
    </MatchesContext.Provider>
  );
};

const useUserState = () => {
  const userStateContext = React.useContext(UserStateContext); 
  if (userStateContext === undefined) {
    throw new Error('useUserState must be used within a UserStateProvider'); 
  }; 
  return userStateContext; 
}; 

const useUserDispatch = () => {
  const userDispatchContext = React.useContext(UserDispatchContext); 
  if (userDispatchContext === undefined) {
    throw new Error('useUserDispatch must be used within a UserDispatchProvider'); 
  }; 
  return userDispatchContext; 
}; 

const useMatchesState = () => {
  const matchesStateContext = React.useContext(MatchesContext); 
  if (matchesStateContext === undefined) {
    throw new Error('useMatchesState must be used within a MatchesStateProvider'); 
  }; 
  return matchesStateContext; 
}; 

const useMatchesDispatch = () => {
  const matchesDispatchContext = React.useContext(matchesDispatchContext); 
  if (matchesDispatchContext === undefined) {
    throw new Error('useMatchesDispatch must be used within a MatchesDispatchProvider'); 
  }; 
  return matchesDispatchContext; 
}; 

export {userProvider, matchesProvider, useUserState, useUserDispatch, useMatchesState, useMatchesDispatch};







