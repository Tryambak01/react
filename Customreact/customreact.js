function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    //note that reactElements.prop returns a list of objects.
    for (const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank',
    },
    children : 'Click me to visit google'
}

//mainContainer is the div
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer) 