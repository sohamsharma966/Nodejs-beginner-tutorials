console.log("hello world");
//--1 basics.
// what is npm= node package manager, it manage node packages.
// let assum we want to make node project and initialise it > "npm init".
// let assum you want to install Express, angular etc, these are packages which we can use by installing them and to use u need to import them.
// to install "npm i <package-name>".
// do not share or push node_module because it is heavy folder and anyone can make this folder on there computer by "npm i"
// we can install package globally that mean we can use global package on any project. "npm i -g nodemon".
// use dependencies at development time > "npm install --save-dev nodemon". it will add into package.json in dev-dependencies.
// to remove dependencies > "npm uninstall express".
// to install angular > "npm i @angular/cli".
// we have dependencies of dependencies.


//--2 common js module vs ecma module.
//-1 common js module
//create second.js from where import
// const tell = require("./second"); //common js model // importing second.js module. we use ./ because it is not built-in.
// console.log("hello world",tell);
//-2 ecma module
// create mjs file to make es6 module file. //ecma module 
// create modulesecond.js from where import.
// if u want to use es6 module correctly add "type":"module" in package.json.
import {simple} from "./modulesecond.mjs"
simple();


//--3
// about os module, some important function present in it.
// go to osmodule.js


//--4
// about path module, some important function present in it.
// go to pathmodule.js


//--5
// about filesystem.


//--6
// about events.
// go to events.js


//--7
// build http server in nodejs.
// go to http.js


//--8
// express framework
