Client Side Javascript:
......................

HTML and Web:

What is HTML?
 HTML is mark up language.

HTML itself is PL.

PL :  
1.Imperative
    let customers = [{id:1,name:'a',city:'test'}];

i want find out all customers in chennai city.

function findCustomerByCity(city){
  let result = [];
for(let i=0;i<customers.length;i++){
    let customer  =customers[i];
   //logic
   if(customer.city === city){
	  result.push(customer);
   }

}
  return result
}

findCustomerByCity('chennai');


2.Declarative

function findCustomerByCity(city){
     return customers.filter(customer=>customer.city == city);
}

findCustomerByCity('chennai');


HTML is more declarative pl.


Types of languages:
1.GPL
  General purpose pl : c,c++,java,C#.....
2.DSL
  invented for only one purpose : HTML

HTML is declarative,dsl pl.

...........................................................................................

Why HTML was created/invented?

 For preparing documents : Distributed Document
      document collection of information.

Document creation project, started in 1960 by ibm,xerox : GML : Generalized markup language.

GML is meta language, using gml y create many markup languages.

HTML is created from GML 1989 by tim berners lee for distributing document over internet : WEB

...........................................................................................

Machine -1 ----network---http--------------------------------Machine 2(server) --documents


Web Project Technology:

1.HTML
2.Webserver
3.HTTP
4.Browser : line-mode web browser

..............................................................................................

How html works?

hello.c---compile---hello.exe/hello.dll/hello.obj------>runtime---execution-process

#include<stdio.h>

void main(){
  printf("Hello");
}

hello.obj
#include<stdio.h>

void main(){
  printf("Hello");
}
void printf(char *data){

   //os api call
   winPrintf(data);
}

source code ---- compiled-----assembly------execution.


index.html -source code

<body>
  <div>
     <h1>Welcome</h1>
  </div>
</body>
  |
loader
 |
   from file: or http:
 |
 parser : parser is special compiler which converts source into lexcial tree(string tree)
 |
body
  div
     h1
        Welcome 
     h1
  div
body
|
 Convert this into assembly
|
body -load xxx
  div
     h1
        Welcome 
     h1
  div
body
|
HTML Execution engine : Request Os ,to allocate memory
|
-LinkedList
body -Node
  div -Node
     h1 -Node
        Welcome -Node
     h1
  div
body
|  Linking the Nodes: Tree
body  -Node
  |
  div -Node
    |
     h1 -Node
      |
        Welcome -Node
        |
     h1
  div
body
 |
Layout/Paint Engine: will convert nodes into pxs : final output
..............................................................................................


In 1996,Netscap communication,Started an RND project called "How to manipulate the tree"

Tree is written in c language,then we need another c program to communicate.


How to access nodes from javascript engine?
  
One spec was published ,As per that spec
 "Document Object Model"
    -How to represent document(elements/nodes) in object oriented way.->DOM

 "Documents can be reprsented as Objects" : Object oriented Document Programming.
............................................................................................

How dom works?

index.html           Broser runtime(C program)         Javascript Engine
<h1>Hello</h1>       h1-Node                           h1- Object
			Hello-Node			 Hello Object Property

if you want to create object?

 class/ function

function Employee(){}  let emp = new Employee()

<h1> => function HTMLHeadingElement(){} => let h =new HTMLHeadingElement() ?

Note: For html elements, we cant create object directly, rather than JS Engine will create objects , return references to the developer to access.
 How via factory Objects: object helps to get other documents

Facory Object : HTML Document =>body

document.getElementById();
   |
Implicit object reference variable which points HTMLDocument OBject.
............................................................................................
Enter into DOM programming:

1.write dom programming using javascript language.

HTMLDocument : body : factory Object.


Document apis:

Finding HTML Elements

document.getElementById(id)	       Find an element by element id

document.getElementsByTagName(name)	Find elements by tag name

document.getElementsByClassName(name)	Find elements by class name

document.querySelectory(selector)        find element/elements by selector


Changing HTML Elements : update existing element
......................
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
Method	Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element


Adding and Deleting Elements

document.createElement(element)	Create an HTML element

document.removeChild(element)	Remove an HTML element

document.appendChild(element)	Add an HTML element

document.replaceChild(new, old)	Replace an HTML element

//document.write(text)	Write into the HTML output stream



Create new Element:

1.create element
2.attach that element on existing tree. appendChild

function findElement() {
      //get the h1
      const element = document.getElementById('heading');
      console.dir(element);
      //get the content
      console.log(element.innerHTML);
}
findElement();

function updateElement() {
      const element = document.getElementById('heading');
      //element.innerText = 'Welcome to React' : Plain String
      element.innerHTML = 'Welcome to React!'; // which is node
}
updateElement()

function createElement() {
      const element = document.createElement('h2');
      element.innerHTML = 'Hey Buddy Are you new to DOM!';
      //attach that element
      document.body.appendChild(element);
}
createElement();

function applyStyle() {
      const element = document.getElementById('heading');
      //css property inside javascript
      element.style.backgroundColor = 'yellow'

}
applyStyle()
.......................................................................................

User interaction : Event Handling : UI events

Hardware events : mouse,keyboard,touch events
application events : onload,onupdate,offline,online........

How to add user interaction?

Every dom element has ability to subscribe events called dom events.

ways to attach events?

1.inline events
2.through coding

eventattachment has syntax

on+EventName = "callbackfunction /handler function"

Event Object : Object asscioated with every dom element.

 Which is proxy object between dom element and handler function.

if you want to access any dom element inside event handler, event object will help
event object is created and ready for use inside handler function arg.


 <h1 id="heading" onmouseout="applyMouseOut(event)" onmouseover="applyDynamicStyle(event)">Welcome to DOM</h1>

function applyDynamicStyle(e) {
      console.dir(e);
      const element = e.target;
      console.log(element);
      element.style.backgroundColor = 'green'

}

function applyMouseOut(e) {
      const element = e.target;
      element.style.backgroundColor = 'yellow'
}


........................................................................................

<h1 id="heading">Welcome to DOM</h1>

function applyDynamicStyle(e) {
      console.dir(e);
      const element = e.target;
      console.log(element);
      element.style.backgroundColor = 'green'

}
function applyMouseOut(e) {
      const element = e.target;
      element.style.backgroundColor = 'yellow'
}

document.getElementById('heading').addEventListener('mouseover', applyDynamicStyle)

document.getElementById('heading').addEventListener('mouseout', applyMouseOut);
..........................................................................................

javascript language can be used to manipulate web documents.

When we use javascript language directly , we face lot of problems

1.Complexity
2.Performance
3.No standard practice

In 2001,DOM Wrappers - libs /frameworks came into picture.
 DOJO
2005, JQuery
.............................................................................................

Plain JS
			 Application(dom)
			     |
			 Javascript Engine
			      |
			  Browser Engine




Framework/lib
			 Application(JQuery)
			     |
		       ---------------------------
			  JQuery Engine			
                       -------------------------------
			      |
			 Javascript Engine
			      |
			  Browser Engine


What is jquery engine?
  Jquery engine is also javascript program.

Angular
			 Application(Angular)
			     |
		       ---------------------------
			  Angular Engine : Renderer(Ng2) Renderer2(Ng4,5),Ivy(6,7)		
                       -------------------------------
			      |
			 Javascript Engine
			      |
			  Browser Engine

React


		       Application(React)
			     |
		       ---------------------------
			  React Engine :React fiber-->React 16 on wards		
                       -------------------------------
			      |
			 Javascript Engine
			      |
			  Browser Engine

...................................................................................

React Project Setup:
...................

React cli : command line interface : tool

1.To create project layouts.
2.in built webserver for running react application.
3.Compiler / transpiler : webpack
4.enables hot reloading like nodemon.


steps:
1.install cli
>npm i create-react-app -g

2.create project
>create-react-app  pathfinder-app

3.> cd pathfinder-app

4.pathfinder-app>npm start


ES 6 modules:
..............
js modules : namespace,amd,cjs,es6 modules,system,umd


es6 modules:

es6 module  ==== cjs
,,,,,,,,,,,,,,,,,,,,,
export           exports
export default   module.exports
import           require()



src/data/info.js
export const name = 'Karthik'

export function sayGreeter() {
      return 'Greeter'
}
export const sayHai = () => "Hai!";

export const skills = ['java', 'spring', 'react'];

export const address = {
      city: 'Erode',
      state: 'TN'
}

export class Order {
      constructor() {
            console.log('Order');
      }
}

src/index.js

import {
      name,
      sayGreeter,
      sayHai,
      skills,
      address,
      Order
} from './data/info';

console.log(name);
console.log(sayGreeter())
console.log(sayHai());
console.log(skills)
console.log(address);
new Order();

.............................................................................

export statement short cuts:
...........................
const name = 'Karthik'

function sayGreeter() {
      return 'Greeter'
}
const sayHai = () => "Hai!";

const skills = ['java', 'spring', 'react'];

const address = {
      city: 'Erode',
      state: 'TN'
}

class Order {
      constructor() {
            console.log('Order');
      }
}

//export statement last
export {
      name,
      sayGreeter,
      sayHai,
      address,
      Order,
      skills
};
...............................................................................
import * as myinfo from './fileName' :  which imports everthing from the file

import * as myinfo from './data/info';

console.log(myinfo.name);
console.log(myinfo.sayGreeter())
console.log(myinfo.sayHai());
console.log(myinfo.skills)
console.log(myinfo.address);
new myinfo.Order();

dont use * in projects.

..................................................................................

export default similar to module.exports



src/data/info.js

/* export default class Customer {
      constructor() {
            console.log('Customer class')
      }
} */
//Line 6:1:  Parsing error: Only one default export allowed per module.
// export default class Invoice {

// }
//short cut
class Customer {
      constructor() {
            console.log('Customer class')
      }
}
export default Customer;


src/index.js
import Customer from './data/Customer';

new Customer();
//////////////////////////////////////////////////////////////////////////////

Can we mix export and export default

Yes!

src/data/info.js
export const name = 'Karthik'
//short cut
class Customer {
      constructor() {
            console.log('Customer class')
      }
}
export default Customer;

src/index.js
import Customer, {
      name
} from './data/Customer';

console.log(name);
new Customer();

note : when u import with export and export default
export default must come first,and then export will come.
////////////////////////////////////////////////////////////////////////////////

src/header/SiteHeader.js

export const SiteHeader = () => 'Site Header';

src/header/MenuBar.js

export const MenuBar = () => 'Menu Bar';

src/layout/Layout.js

import {
      SiteHeader
} from '../header/SiteHeader';
import {
      MenuBar
} from '../header/MenuBar';

export const Layout = () => {
      console.log(SiteHeader())
      console.log(MenuBar());
}

src/index.js
import {
      Layout
} from './layout/Layout';

Layout();

..............................................................................

Barrel Export or Reexport

src/layout/Layout.js

import {
      SiteHeader
} from '../header/SiteHeader';
import {
      MenuBar
} from '../header/MenuBar';

if you look at the above code, folder "layout" which has two files  "SiteHeader.js"
and "MenuBar.js"

We are importing multiple things from the same folder "layout" but files are different.

We can simplify this step using concept called "Barrel Export"


Steps to implement barrel export:

1.Go to any folder , where you have to create "index.js"

src/header/index.js

note: main index.js and inside folder index.js is different.


2. import everthing(from every file) from header folder into index.js

import {
      SiteHeader
} from './SiteHeader';
import {
      MenuBar
} from './MenuBar';


3.export what ever you imported inside index.js file

import {
      SiteHeader
} from './SiteHeader';
import {
      MenuBar
} from './MenuBar';

//barrel export
export {
      SiteHeader,
      MenuBar
};

4.Test barrel export inside layout/Layout.js

import {
      SiteHeader,
      MenuBar
} from '../header';

export const Layout = () => {
      console.log(SiteHeader())
      console.log(MenuBar());
}
................................................................................

What is React /react.js?

React is javascript lib for building user interfaces(DOM Application) using javascript - es 6


React is created by face book.

React was created not for others but created for face book one of the use case called "Buddylist" / chat application.

instagram web version was fully built by react.

React most implementations

1.flipkart ui is written react.
2.espn cric info
3.facebook use case chat , graph....
4.netflix
etc......

Where we can use React ? What type of application we can build using react.

Data intensive application.
 where more data , which are chainging rapidly, where you want to update ui very faster with out ui flickering.


React can be used to build application for 

.........................................
1.browsers : Desktop
2.Mobile Apps : React Native
..........................................

face book is working on many features projects related to react

3.React VR : Virtual Reality.
4.React Car : For car applications
5.React TV  : React for TV.
6.React IOT : any devices

We are going to learn react web for browsers.
.................................................................................

React core modules:

react.js      => Core module
react-dom.js  => Browser

-----------------------------------------------------------------------------
 Markup layer             |  React Core Engine     | Render Engine  | Target
-----------------------------------------------------------------------------

HTML Markup---------------|  Object Tree(V.DOM)   |  ReactDom.render|  Browser

Mobile Markup-------------|  Object Tree          |ReactNative.render| Mobile /Tabs

VR Markup---------------  |  Object Tree          |VR.render         |VR devices

IOT Markup--------------- |  Object Tree          | IOT.render       |IOT Devices   


JSX :
 PL language built by face book to write user interfaces.
 JSX is collection of html markup and javascript.
 JSX is dsl and declarative.
Every device has its own jsx language syntax.
  Brower jsx can't be used for building mobile application.

Since jsx  is a spearte language can be executed on browser /mobile directly.

JSX compilation model:

              layout.js / layout.jsx
		       |
		    compiler - babel.js 
			|
		    plain js code
			|
	-----------------------------------------
Runtime : React Engine  compiled code feed into react engine
			|
	     create virtual Object tree (in browser V-dom)
		        |
		     Render Engine
			|
		   Flush the tree into target
			|
	--------------------------------------------
        |
     Browser


///////////////////////////////////////////////////////////////////////////////////

JSX is used to create dom elements.

Every DOM element is object.

Component : Component is Object , Coined by MS in 1989.

According to ms, Component is object which has state(date),behaviour(methods) + User interface(Visual).
 eg:Button,TextBox,Grid,Menu,MenuBar,Layout,Table.....

Like Object tree(DOM Tree), In React we can create "Component" Tree.

..................................................................................

In coding 

Threre two libs 
1.react.js  => to create component and manages all features related component.
2.react-dom => Render engine.

react.js

1.React
  It top level class which provides all apis to create,delete,update components.

2.ReactDOM
   It is top level class which provides api to flush the v.dom into real dom

1.first component creation

import React from 'react';
import ReactDOM from 'react-dom';

//create component
const Welcome = <h1>Welcome!</h1>;

//Flush the component into Render engine

ReactDOM.render(Welcome, document.getElementById('root'))
////////////////////////////////////////////////////////////////////////////////

Component Creational Patterns

1.variable pattern
2.function pattern
3.es 6 class pattern



How code gets compiled?

source code:

function Welcome() {
      return <h1>Welcome To React!</h1>;
}
|
babel
|
compiled code
function Welcome() {
  return React.createElement(
    'h1',
    null,
    'Welcome To React!'
  );
}
|
runtime
function Welcome() {
  return React.createElement(
    'h1',
    null,
    'Welcome To React!'
  );
}
|
//React.createElement
function createElement(args){
   document.createElement(args);
}



Since React is declarative we should not call component function like below

ReactDOM.render(Welcome(), document.getElementById('root'))

Declarative syntax to call Welcome function

ReactDOM.render(<Welcome></Welcome>, document.getElementById('root'))
  |
ReactDOM.render(Welcome(), document.getElementById('root'))


Component creational Code:
import React from 'react';
import ReactDOM from 'react-dom';

//create component : variable pattern
//const Welcome = <h1>Welcome!</h1>;

//Using function : ES 5
//the funciton return object/component
/* function Welcome() {
      return <h1>Welcome To React!</h1>;
} */

//const Welcome = () => <h1>Welcome To React!</h1>;

//using e6 class
class Welcome extends React.Component {
      render() {
            return <h1>Welcome To React!</h1>;
      }
}
//new Welcome() 

//Flush the component into Render engine
//imperative
//ReactDOM.render(Welcome(), document.getElementById('root'))
ReactDOM.render(<Welcome></Welcome>, document.getElementById('root'));

function vs class vs variable pattern : to be discussed
..................................................................................

JSX : javascript + XML:


Since HTML parser is weak, but when y write react code, we need consistent code generation.

So that react team, developed compiler follows basic xml rules.

Basic XML  rules:

1.every opened element must be closed
  <h1>Hello</h1>
  <Welcome></Welcome>
 some elements may not have closing tag
  <img /> : image element has no child elements : self closing. 

2. In xml you must have one single root element.
  all elements must be organized under single root element.

 <h1>Welcome to React</h1>
 <p>Path finder</p>

In html what can be root element
 <div>,<span>,all html 5 layout eleements header,footer,section,aside...


import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = () => {
      return <div>
            <h1>Welcome to React</h1>
            <p>Path finder</p>
      </div>;
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
/////////////////////////////////////////////////////////////////////////////

Component Tree : Object Tree : Component Composition:
.....................................................

Layouts
 container
 header
 footer
 main


import React from 'react';
import ReactDOM from 'react-dom';

//header
const Header = () => <div>
      <h1>Site Header</h1>
</div>;
const Footer = () => <div>
      <h3>Site Footer</h3>
</div>;
const Main = () => <div>
      <h3>main Panel</h3>
</div>;
const Container = () => {
      return <React.Fragment>
            <Header />
            <Main />
            <Footer />
      </React.Fragment>;
}


ReactDOM.render(<Container />, document.getElementById('root'));


React.Fragement : looks like div, which elements physical divs in the output.


.............................................................................

src/header/Header.jsx
import React from 'react';

export const Header = () => <div>
      <h1>Site Header</h1>
</div>;
src/header/index.js
import {
      Header
} from './Header';

export {
      Header
};


src/footer/Footer.jsx

import React from 'react';

export const Footer = () => <div>
      <h3>Site Footer</h3>
</div>;

index.js

import {
      Footer
} from './Footer';
export {
      Footer
};

src/main/Main.jsx
import React from 'react';

export const Main = () => <div>
      <h3>main Panel</h3>
</div>;

index.js

import {
      Main
} from './Main';

export {
      Main
};

src/container/Container.jsx
import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Main } from '../main';

export const Container = () => {
      return <React.Fragment>
            <Header />
            <Main />
            <Footer />
      </React.Fragment>;
}

index.js
import {
      Container
} from './Container';


export {
      Container
};


src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './container';

//header
ReactDOM.render(<Container />, document.getElementById('root'));
/////////////////////////////////////////////////////////////////////////////////

Styling React Components:

How to add css?

two ways:

using class attribute : external style.
using style attribute : inline

html syntax:
<div class="container">

</div>
React uses jsx syntax

Rule for html attributes

3. html attributes must be in in camel case

HTML ATTRIBUTES

accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap

how to link css in react?

import css files inside index.js

can we import css?
yes, this is the concept of webpack.

you can import any thing - css,image,documents(static assets)

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

.................................................................................
Component : Object => state + behaviour + UI

As of now , UI is static, how to make dynamic it.

DATA: data binding:

data can be number,string,boolean,object,array.

const name='Karthik'
 <h3>Name {name} </h3>


import React from 'react';

const name = 'Karthik';
const age = 18;
const isActive = false;
const address = {
      city: 'Chennai'
};
const salary = 10000;
const noofdays = 5;
function getDepartment() {
      return 'Learning and Development';
}
export const Main = () => <div>
      <section className="col-md-12">
            <h3>Employee information</h3>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Status : {isActive ? 'Active' : 'In Active'}</h2>
            <h2>City : {address.city}</h2>
            <h2>Salary : {salary * noofdays}</h2>
            <h2>Department : {getDepartment()}</h2>
      </section>
</div>;
................................////////////////...................................

functional programming :

it is programming style to build applications.

Functional programming principles:

1.pure function
 
1.1.function should receive input, that function function should return the same.
1.2. to be discussed later.


function  doStuff(a){

  return a;
}

doStuff(10);=>10

Pure function in react:
Component is pure function , component receive input return the same.

input is data. data in react we call property called props.

Props:data holder

Component class:
...............
Component is super class of a component which has

1.instance variables
props
state
2.instance methods
3.static variables


props is just variable 


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//
class Profile extends Component {
      render() {
            //this.props = {}
            //props are read only : the compnent never change data
            //this.props.title = 'Hello'
            console.log('', this.props);
            return <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>
      }
}
const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      />
}
render(<App />, document.getElementById('root'));

How to pass props to function components?

function Profile(props){

 return  <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>

}

<Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      /> 
===>
   Profile({name:xx,rating:xxx,status:xxx})




Object Destructuring:
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends Component {
      render() {
            //destructuring
            const { title, name, rating, status, address: { city } } = this.props;
            return <div className="container">
                  <h1>{title}</h1>
                  <h3>Name {name}</h3>
                  <h3>Rating {rating}</h3>
                  <h3>Status {status ? 'Active' : 'InActive'}</h3>
                  <h3>City {city}</h3>
            </div>
      }
}
const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      />
}
render(<App />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


/* const Profile = props => {
      const { title, name, rating, status, address: { city } } = props;
      return <div className="container">
            <h1>{title}</h1>
            <h3>Name {name}</h3>
            <h3>Rating {rating}</h3>
            <h3>Status {status ? 'Active' : 'InActive'}</h3>
            <h3>City {city}</h3>
      </div>;

} */
/* const Profile = ({ title, name, rating, status, address: { city } }) => {
      return <div className="container">
            <h1>{title}</h1>
            <h3>Name {name}</h3>
            <h3>Rating {rating}</h3>
            <h3>Status {status ? 'Active' : 'InActive'}</h3>
            <h3>City {city}</h3>
      </div>;

} */
const Profile = ({ title, name, rating, status, address: { city } }) => <div className="container">
      <h1>{title}</h1>
      <h3>Name {name}</h3>
      <h3>Rating {rating}</h3>
      <h3>Status {status ? 'Active' : 'InActive'}</h3>
      <h3>City {city}</h3>
</div>;


const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      />
}
render(<App />, document.getElementById('root'));
................................................................................

Default Properties:

The React.Component class has static variable.
static variable=value;

defaultProps : is static variable from Component class.

ClassName.variableName


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends Component {
      static defaultProps = {
            title: 'Path finder Profile Manager',
            name: 'default Name',
            rating: 0,
            status: false,
            address: {
                  city: 'default City'
            }
      }

      render() {

            return <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>
      }
}
/* Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
      }
} */

const App = () => {

      const firstName = 'Karthik';

      return <Profile name={firstName} />
}
render(<App />, document.getElementById('root'));



functions
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Profile = ({ title, name, rating, status, address: { city } }) => <div className="container">
      <h1>{title}</h1>
      <h3>Name {name}</h3>
      <h3>Rating {rating}</h3>
      <h3>Status {status ? 'Active' : 'InActive'}</h3>
      <h3>City {city}</h3>
</div>;

//default Props
Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
      }
}



const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai' }}
      />
}
render(<App />, document.getElementById('root'));
......................*********...................................................

Typechecking With PropTypes:

 Lets say , i want to pass property whose type is number, what if i pass string

 eg :

 rating = {1} ===> rating = {"a"}

Since js is type less, we cant verify the type during runtime, rather than js offers compile time /development time check to verify our code is working as expected. 

React.Component class offers one static variable 'propTypes'


import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends Component {

      render() {

            return <div className="container">
                  <h1>{this.props.title}</h1>
                  <h3>Name {this.props.name}</h3>
                  <h3>Rating {this.props.rating}</h3>
                  <h3>Status {this.props.status ? 'Active' : 'InActive'}</h3>
                  <h3>City {this.props.address.city}</h3>
            </div>
      }
}
//property rules
Profile.propTypes = {
      id: PropTypes.number.isRequired,
      rating: PropTypes.number
}

Profile.defaultProps = {
      title: 'Path finder Profile Manager',
      // id: 1,
      name: 'default Name',
      rating: 0,
      status: false,
      address: {
            city: 'default City'
      }
}

const App = () => {

      const firstName = 'Karthik';

      return <Profile id={1} name={firstName} rating={10} />
}
render(<App />, document.getElementById('root'));

Rules:

1.if req property, dont initlize inside defaultProps.
 
......................................**..........................................

Component compostion and Uni directional data flow:

Profile => receive properties and display there itself.
 Profile component must receive property then it has to forword properties to another component to display.

  Profile- props--------------getData
    |
   forward props to child component
      |
      ProfileDisplay.
     	|
        Address
	 |
	 ....

import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


export class Profile extends Component {
      render() {
            return <div className="container">
                  <ProfileDisplay title={this.props.title} name={this.props.name} rating={this.props.rating} status={this.props.status} address={this.props.address} />
            </div>
      }
}
export const ProfileDisplay = props => <Fragment>
      <h1>{props.title}</h1>
      <h3>Name {props.name}</h3>
      <h3>Rating {props.rating}</h3>
      <h3>Status {props.status ? 'Active' : 'InActive'}</h3>
      <Address address={props.address} />
</Fragment>

export const Address = props => <Fragment>
      <h3>Street {props.address.street}</h3>
      <h3>Area {props.address.area}</h3>
      <h3>City {props.address.city}</h3>
      <h3>State {props.address.state}</h3>
      <h3>Pincode {props.address.pincode}</h3>
</Fragment>

const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai', street: '10th street', area: 'Perumbakkam', pincode: '600100', state: 'TN' }}
      />
}
render(<App />, document.getElementById('root'));

..................................................................................

Spread Operator which simplifies property passing from parent to child

  ... : Spread Operator (ES 7 feature) : merge operator
  ... : Rest operator : (ES 6 feature) : passing args 


Syntax:

Old Style:
<ProfileDisplay title={this.props.title} name={this.props.name} rating={this.props.rating} status={this.props.status} address={this.props.address} />

With Spread Notation
<ProfileDisplay {...this.props} />


import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


export class Profile extends Component {
      render() {
            return <div className="container">
                  {/* <ProfileDisplay title={this.props.title} name={this.props.name} rating={this.props.rating} status={this.props.status} address={this.props.address} /> */}
                  <ProfileDisplay {...this.props} />
            </div>
      }
}
export const ProfileDisplay = props => <Fragment>
      <h1>{props.title}</h1>
      <h3>Name {props.name}</h3>
      <h3>Rating {props.rating}</h3>
      <h3>Status {props.status ? 'Active' : 'InActive'}</h3>
      {/* <Address address={props.address} /> */}
      <Address subtitle="Address Details" {...props} />
</Fragment>

export const Address = ({ subtitle, address: { street, area, city, state, pincode } }) => <Fragment>
      <h2>{subtitle}</h2>
      <h3>Street {street}</h3>
      <h3>Area {area}</h3>
      <h3>City {city}</h3>
      <h3>State {state}</h3>
      <h3>Pincode {pincode}</h3>
</Fragment>

const App = () => {

      const firstName = 'Karthik';

      return <Profile
            title="Path finder - Profile Manager"
            name={firstName}
            rating={1}
            status={true}
            address={{ city: 'Chennai', street: '10th street', area: 'Perumbakkam', pincode: '600100', state: 'TN' }}
      />
}
render(<App />, document.getElementById('root'));

.........................................&&&&&&....................................
state:
......

The another way of storing data.

data + biz logic 

state can be used inside class component only.

state is just variable inside component class.
its value


Event Handling:

Button==>event====>Listener(callback)

4.1.How to bind event
 <button onclick="listner">text</button> -js
 <button className="btn btn-success" onClick={this.increment} >+</button> -external event listner
 <button className="btn btn-success" onClick={()=>{}} >+</button> -inline event listener


render method:
.............

Objective:
  To prepare object tree - virtual dom



import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {

      constructor() {
            super();
            console.log('Counter constructor is called!');
      }

      state = {
            count: 0
      };
      // Arrow function
      //setState(oldState)=>newState
      increment = () => {
            //pure function
            this.setState(function (previousState) {
                  console.log(`Previous State(Old State) ${previousState.count}`)
                  //new state
                  return {
                        count: previousState.count + 1
                  }
            });
      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }


      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.state.count}</h2>
                  <button onClick={this.increment} className="btn btn-success">Increment</button>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));
............................................................................

import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {

      constructor() {
            super();
            console.log('Counter constructor is called!');
      }

      state = {
            count: 0
      };
      // Arrow function
      //setState(oldState)=>newState
      increment = () => {
            //pure function
            this.setState(function (previousState) {
                  console.log(`Previous State(Old State) ${previousState.count}`)
                  //new state
                  return {
                        count: previousState.count + 1
                  }
            });
      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }


      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.state.count}</h2>
                  <button onClick={this.increment} className="btn btn-success">Increment</button>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));


Pure function :

1. pass input to the function return the same: Props
2. pass input to the function , update the input, return new output.
   eg:
     dont change the value in orginal memory address, use the concept of immutablity.


Immutablity implementation in javascript:
 two data implementation
1.literal object
2.array.

1.literal object

1.old style:
function updateProfile(city, profile) {
      //update profile data
      return {
            id: profile.id,
            name: profile.name,
            city: city
      }
}
Problems in the above code
 we have to copy old properties manually, what you want to change ,that you have to override.
This complex

2.javascript provides an api
 Object.assign
function updateProfile(city, profile) {
      //update profile data
      return Object.assign({}, profile, {
            city: city
      });
}

3.ES 7 WAY : Spread Operator

return {
            ...profile,
            city: city
      };


// javascript immutablity algorthims

//1.literal object
//verify /write pure function pattern
/* function updateProfile(city, profile) {
      //update profile data
      profile.city = city;
      return profile;
} */
//old style
/* function updateProfile(city, profile) {
      //update profile data
      return {
            id: profile.id,
            name: profile.name,
            city: city
      }
} */
//Using object.assign method
/* function updateProfile(city, profile) {
      //update profile data
      return Object.assign({}, profile, {
            city: city
      });
} */
//Using ES 7 Spread operator
function updateProfile(city, profile) {
      //update profile data
      return {
            ...profile,
            city: city
      };
}

const profile = {
      id: 1,
      name: 'karthik',
      city: 'Chennai'
};
//Test whether object is allocated in different memory address or updated in the same memeory address.
Object.freeze(profile);

let result;
result = updateProfile('Coimbatore', profile);
console.log(result);

result = updateProfile('Erode', profile);
console.log(result);


import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {

      constructor() {
            super();
            console.log('Counter constructor is called!');
      }

      state = {
            count: 0
      };
      // Arrow function
      //setState(oldState)=>newState
      increment = () => {
            //pure function
            this.setState(function (previousState) {
                  console.log(`Previous State(Old State) ${previousState.count}`)
                  // old style 
                  /* return {
                        count: previousState.count + 1
                  } */

                  let count = previousState.count + 1;

                  // return Object.assign({}, previousState, { count: count })
                  return { ...previousState, count: count };
            });
      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }


      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.state.count}</h2>
                  <button onClick={this.increment} className="btn btn-success">Increment</button>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));
////////////////////////////////////////////////////////////////////////////////

setState syntax


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {

      constructor() {
            super();
            console.log('Counter constructor is called!');
      }

      state = {
            count: 0
      };
      // Arrow function
      //setState(oldState)=>newState
      increment = () => {
            //pure function
            /*   this.setState(function (previousState) {
                    console.log(`Previous State ${previousState.count}`)
                    let count = previousState.count + 1;
                    return { ...previousState, count: count };
              }) */
            //Arrow version
            /*  this.setState(previousState => {
                   console.log(`Previous State ${previousState.count}`)
                   let count = previousState.count + 1;
                   return { ...previousState, count: count };
             }) */
            //With destructuring
            /*    this.setState(previousState => {
                     console.log(`Previous State ${previousState.count}`)
                     let count = previousState.count + 1;
                     //if objectkey:local variable is same : make it one
                     return { ...previousState, count };
               }) */
            // no more extra statement, only return
            let count = this.state.count + 1;
            this.setState(({ count }));

      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }


      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.state.count}</h2>
                  <button onClick={this.increment} className="btn btn-success">Increment</button>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));
.................................................................................

Clock: 10:00:42

componentDidMount : is used to write

1.timer
2.initalize ajax setup
3.websocket setup
All resource incentsive jobs.


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'



class Clock extends Component {
      state = {
            date: new Date()
      };


      tick = () => {
            this.setState({
                  date: new Date()
            });

      }
      componentDidMount() {
            console.log('Clock : DOM is ready!');
            setInterval(
                  () => this.tick(),
                  1000
            );
      }
      componentDidUpdate() {
            console.log('Clock : Component didUpdate is called')
      }


      render() {
            return <div className="container">
                  <h1>Clock Application</h1>
                  <h2>Time {this.state.date.toLocaleTimeString()}</h2>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('C constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Clock />
      }

}

render(<App />, document.getElementById('root'));

....................................**********...................................

css can be added in two ways:

1.className
2.style attribute

 in normal html
 <div style="color:red;">
 
Every style property in js is object.

 domelement.style.anystyle

 Refer:https://www.w3schools.com/jsref/dom_obj_style.asp

 div.style.backgroundColor = "red";


const divStyle={
   backgroundColor:'red'
}
 <div style={divStyle}>

import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


const clockStyle = {
      backgroundColor: 'yellow',
      border: "thick solid #0000FF"
}

class Clock extends Component {
      state = {
            date: new Date()
      };


      tick = () => {
            this.setState({
                  date: new Date()
            });

      }
      componentDidMount() {
            console.log('Clock : DOM is ready!');
            setInterval(
                  () => this.tick(),
                  1000
            );
      }
      componentDidUpdate() {
            console.log('Clock : Component didUpdate is called')
      }


      render() {
            return <div className="container">
                  <h1>Clock Application</h1>
                  <h2 style={clockStyle}>
                        Time {this.state.date.toLocaleTimeString()}</h2>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('C constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Clock />
      }

}

render(<App />, document.getElementById('root'));
......................................................*******......................


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


const clockStyle = {
      backgroundColor: 'yellow',
      border: "thick solid #0000FF"
}

class Clock extends Component {
      state = {
            date: new Date()
      };


      tick = () => {
            this.setState({
                  date: new Date()
            });

      }
      componentDidMount() {
            console.log('Clock : DOM is ready!');
            setInterval(
                  () => this.tick(),
                  1000
            );
      }
      componentDidUpdate() {
            console.log('Clock : Component didUpdate is called')
      }


      render() {
            return <div className="container">
                  <h1>Clock Application</h1>
                  <h2 style={clockStyle}>
                        Time {this.state.date.toLocaleTimeString()}</h2>
            </div>
      }
}


class App extends Component {
      constructor() {
            super();
            console.log('C constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Clock />
      }

}

render(<App />, document.getElementById('root'));
...............................................................................

Dynamic Props: state + props
 
Component : The component has state + biz logic + UI

We need to separate state+biz logic =>one component =>container component
The component will have only UI =>Presentational component
  ->PC receive data as prop from the CC.

function as prop

import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends Component {
      state = {
            count: 0
      };

      increment = () => {
            let count = this.state.count + 1;
            this.setState(({ count }));
      }
      componentDidMount() {
            console.log('Counter : DOM is ready!');
      }
      componentDidUpdate() {
            console.log('Counter : Component didUpdate is called')
      }

      render() {
            console.log('Counter render is called')
            console.log(`Current State(New State) ${this.state.count}`)
            return <Fragment>
                  <CounterView onIncrement={this.increment}  {...this.state} />
            </Fragment>;
      }
}
//Presentational Component
class CounterView extends Component {
      constructor() {
            super();
            console.log('Counterview : constructor is called!');
      }
      componentDidMount() {
            console.log('Counterview : DOM is ready!');

      }
      render() {
            console.log('Counterview : render is called')
            return <div className="container">
                  <h1>Counter App</h1>
                  <h2>Counter {this.props.count}</h2>
                  <button onClick={this.props.onIncrement} className="btn btn-success">Increment</button>
            </div>
      }
      componentDidUpdate() {
            console.log('Counterview : componentDidUpdate is called!');

      }
}


class App extends Component {
      constructor() {
            super();
            console.log('App constructor is called');
      }

      componentDidMount() {
            console.log('App: DOM is ready!');
      }

      render() {
            console.log('App render is called')
            return <Counter />
      }

}
render(<App />, document.getElementById('root'));

...................................................................................

 Mount                       |           Update                |     UnMount
 

ReactDOM.render(<Review/>)   |         Ui is Ready              When Component is removed
   | 		
Review render method is      |             |
called
   |                         |      User Interaction
render creates inital                     |
Object Tree(VDOM) -including |      Button Click event
child components                          |
   |                         |      Listener is called
-----Render Engine-----      |           |
  |                          |      setState==mutates state=>returns new State
					|
flushes the Object tree             render--is called with current state
  into target(Browser/Mobile)|		|
  |                                 Object Tree is created:Current State
componentDidMount will be    |          |
called                              Take copy of already Rendered Tree
					|
				   Start Comparing both tree and find differences
					This process is called "Reconliation"
					|
				    Find the Differences
					|
				  Flushes the Tree into Target
					|
				   ComponentDidUpdate
					
...................................................................................

Array:
......
iterations: immutable 

1.map : transformation api, iterate an array, if you want to transform any item
2.filter : filtering data set from the array.


Add : immutable
1.concat
   array.concat(item) => new array
2.spread operator
   [...oldarray,item]; ==concat =>new array



update:
 filter,map

delete:
 filter
const numbers = [1, 2, 3, 4, 78, 810, 100];

Object.freeze(numbers);
//each item should be multipled by 2
/* const result = numbers.map(function (item, index) {
      return item * 2;
}); */
//Arrow function
/* const result = numbers.map((item, index) => {
      return item * 2;
}); */
const result = numbers.map(item => item * 2);
console.log(result);

//find even numbers 
/* const evenNumbers = numbers.filter(function (item) {
      //return boolean condition
      return item % 2 === 0;
}); */
const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers);

//find even numbers and multiply those  by 3 : chainning filter + map

const sumofEvenNumbers = numbers.filter(item => item % 2 === 0)
      .map(item => item * 3);
console.log(sumofEvenNumbers);
///////////////////////////////////////////////////////////////////////////

const hotels = [{
            id: 1,
            name: 'A1',
            rating: 4,
            rate: 1000,
      },
      {
            id: 2,
            name: 'A2',
            rating: 2,
            rate: 2000,
      },
      {
            id: 3,
            name: 'A3',
            rating: 1,
            rate: 1500,
      },
      {
            id: 4,
            name: 'A4',
            rating: 5,
            rate: 6000,
      },
      {
            id: 5,
            name: 'A5',
            rating: 2,
            rate: 2800,
      }
];

//find all hotels whose rating is between 1 and 3, offer 10% discount ,list all hotels details with dicounted rate.

/* const hotelsResult = hotels.filter(hotel => {
      return hotel.rating >= 1 && hotel.rating <= 3;
}).map(hotel => {
      let discount = hotel.rate * 10 / 100;
      //let totalPrice = hotel.rate - discount;
      let rate = hotel.rate - discount;
      return {
            ...hotel,
            rate
      }
}); */
const hotelsResult = hotels.filter(hotel =>
      (hotel.rating >= 1 && hotel.rating <= 3)
).map(hotel => {
      let discount = hotel.rate * 10 / 100;
      //let totalPrice = hotel.rate - discount;
      let rate = hotel.rate - discount;
      return {
            ...hotel,
            rate
      }
});

console.log(hotelsResult);

//Add operation
const numList = [1, 2, 3];
Object.freeze(numList);
//numList.push(4);//mutable version
console.log(numList.concat(4));
console.log([...numList, 6]);

//remove item array :  slice and splice ,filter

const names = ['A', 'B', 'C', 'D', 'E'];

const namesResult = names.filter(name => name !== 'C');
console.log(namesResult);

//Update item array : slice and splice , map

const updatedNameList = names.filter(name => name === 'A').map(name => 'Angular');
console.log(updatedNameList);
////////////////////////////////////////////////////////////////////////////////

How to connect with REST end points?

AJAX Api:

1.fetch
2.axios
3.jquery


Steps:

https://jsonplaceholder.typicode.com/todos


showing progress bar,error,data

render
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );


dynamic css:

based on state changes , i want to add /remove css styles dynamically.

<li className="list-item">{todo.id} {todo.title}</li>

<li className="list-item active">{todo.id} {todo.title}</li>

<li className="list-item">{todo.id} {todo.title}</li>


To implement dynamic css for react we have third party lib.

Classnames :
  A simple JavaScript utility for conditionally joining classNames together.

>npm install classnames --save

import classNames from 'classnames'


Syntax:

<li className={`list-group-item ${classNames({ 'active': todo.completed })}`}
key={index}>
..........................*****************......................................
import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames'

import 'bootstrap/dist/css/bootstrap.css'

class Todo extends Component {

      state = {
            error: null,
            isLoaded: false,
            todos: []
      }
      componentDidMount() {
            const todourl = 'https://jsonplaceholder.typicode.com/todos';
            fetch(todourl).then(response => response.json()).then(todos => {
                  this.setState(previousState => {
                        return { ...previousState, todos, isLoaded: true };
                  });

            },
                  error => {
                        this.setState({
                              isLoaded: true,
                              error
                        });
                  }
            );
      }
      showCompletedTodos = () => {
            this.setState(pstate => {
                  let completed = pstate.todos.filter(todo => todo.completed);
                  return {
                        ...pstate,
                        todos: completed
                  }
            });
      }
      render() {

            const { error, isLoaded, todos } = this.state;

            if (error) {
                  return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                  return <h1>Loading...</h1>;
            } else {
                  return (
                        <div>
                              <h1>TODO App</h1>
                              <button onClick={this.showCompletedTodos} className="btn btn-success">
                                    Show Completed Todos
                              </button>
                              <button className="btn btn-primary">
                                    Show All dos
                              </button>

                              <hr />
                              <h3>Total todos {this.state.todos.length}</h3>
                              <ul className="list-group">
                                    {todos.map((todo, index) => (
                                          <li className={`list-group-item ${classNames({ 'active': todo.completed })}`} key={index}>
                                                <span className="badge badge-pill badge-primary">
                                                      {todo.id}
                                                </span>
                                                <span>
                                                      {todo.title}
                                                </span>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  );
            }

      }
}

const App = () => {
      return <div className="container">
            <Todo />
      </div>
}

render(<App />, document.getElementById('root'));
*************************..............*****************************************

User input:

Note: 
1.Use computed property syntax : [name] = value
2.To bind text box with value
   use name property


import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Form extends Component {

      leaves = ['Sick', 'Medical', 'Causal', 'others'];
      state = {
            firstName: 'firstName',
            lastName: 'lastName',
            leaveType: this.leaves[1]
      }
      handleChange = evt => {
            const name = evt.target.name;
            const value = evt.target.value;

            this.setState({
                  [name]: value
            });
      }
      onSave = evt => {
            evt.preventDefault();
            alert(JSON.stringify(this.state))
      }

      render() {
            return <div>
                  <h1>User Form</h1>
                  <h2>{JSON.stringify(this.state)}</h2>
                  <form onSubmit={this.onSave}>
                        <div className="form-group">
                              <label htmlFor="userName">First Name</label>
                              <input onChange={this.handleChange} type="text" className="form-control" id="userName" placeholder="Enter user name" name="firstName" value={this.state.firstName} />
                        </div>
                        <div className="form-group">
                              <label htmlFor="userName">Last Name</label>
                              <input onChange={this.handleChange} type="text" className="form-control" id="userName" placeholder="Enter user name" name="lastName" value={this.state.lastName} />
                        </div>
                        <div className="form-group">
                              <label htmlFor="leaveType">Leave Type</label>
                              <select name="leaveType" className="form-control" value={this.state.leaveType} onChange={this.handleChange}>
                                    {this.leaves.map((leave, index) => {
                                          return <option key={index} value={leave}>{leave}</option>
                                    })};
                                    </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                  </form>
            </div >
      }
}


const App = () => {
      return <div className="container">
            <Form />
      </div>
}

render(<App />, document.getElementById('root'));











