import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ChangeTextColor from './ChangeTextColor';
import Tableform from './Tableform';
import UseStateDemo from'./UseStateDemo';
import DigitalClock from './DigitalClock';
import UseEffectHook from './UseEffectHook';
import React from "react"
import BlogContextDemo from './BlogContextDemo'
import DataFetching from './DataFetching';
import BmiCalculator from './BmiCalculator';

const blogInfo={
  React:{
    post:"Learn Use Context Hooks",
    author:"Varun K"
  },
  NodeJs:{
    post:"NOde Commands",
    author:"Veena K"
  }
};

export const BlogContext=React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
     {/*<div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}><BlogContextDemo/></BlogContext.Provider>
  </div>*/}
     
     {/*<Counter/>*/}
     {/*<ChangeTextColor/>*/} 
    {/*<Tableform/>*/}
    {/*<UseStateDemo/>*/}
    {/*<DigitalClock/>*/}
    {/*<UseEffectHook/>*/}
    {/*<DataFetching/>*/}
    {/*<BmiCalculator/>*/}
    </div>
  );
}


