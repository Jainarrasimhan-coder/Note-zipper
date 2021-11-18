  import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {userLoginReducer, userRegisterReducer} from "./Reducer/reducer"
import { noteListReducer,noteCreateReducer,noteDeleteReducer,noteUpdateReducer } from "./Reducer/notesReducers";


const reducer = combineReducers({
    
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: noteListReducer,
    // userRegister: userRegisterReducer,
    noteCreate: noteCreateReducer,
    noteDelete: noteDeleteReducer,
    noteUpdate: noteUpdateReducer,
    // userUpdate: userUpdateReducer,
    
  });

  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  }; 
  
  const middleware = [thunk];

  
const store = createStore(
    reducer,
    initialState,
composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;