/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const Navbar = () => {
//     return (
//         <nav>
//             <h1>some website name</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )
// }

// ReactDOM.render(
//     <Navbar />,
//     document.getElementById("root")
// )

/*

Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser

*/

// const RandomElement = (
//     <main>
//         <div>Website Name</div>
//         <ul>
//             <li>apples</li>
//             <li>burgers</li>
//             <li>bananas</li>
//         </ul>
//     </main>
// )

// ReactDOM.render(RandomElement, document.getElementById("root"))

// document.getElementById("root").appendChild(RandomElement);

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


// const reactElement = (
//     <main>
//         <img src="./react-logo.png" width="40px" alt="react logo"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </main>
// )

// console.log(reactElement)

// ReactDOM.render(
//     reactElement,
//     document.getElementById('root')
//     );

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

    /**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
import React from "react"

function Footer() {
    return (
        <footer id="footer">
            <small>© 2024 Arzola's development. All rights reserved.</small>
        </footer>

    )
}

function Header() {
    return (
        <div>
            <nav className="nav">
                <img className="nav-img" src="./react-logo.png"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ul>
                <li>I am learning React because I want to get better at coding</li>
                <li>I am learning React because I love learning</li>
                <li>I am learning React because I want to get into developing real programs and apps</li>
            </ul>
        </main> 
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(<Page />)

export default Page