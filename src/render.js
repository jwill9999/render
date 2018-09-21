let render = (data={}, tag = 'h5') => {
    const root = document.getElementById('root');
    typeof data === 'object' && Object.keys(data).length !== 0 ?
        createSomeElements(data, tag) :
        createElement(data, tag);
}


let createSomeElements = (data, tag) =>  {
   

    for (const [key, value] of Object.entries(data)) {
        let element = document.createElement(tag)
        let text = document.createTextNode(`${key} : ${value}`)
        element.appendChild(text);
        result = root.appendChild(element);
    }

}

let createElement = (data, tag) =>  {

    let text;
    const element = document.createElement(tag)
    if (typeof data === 'string' || typeof data === 'number') {
        text = document.createTextNode(data)
    } else {
        text = document.createTextNode('No Data')
    }
    element.appendChild(text);
    root.appendChild(element);
}

render(1,'h1');
render('String Text', 'p');
render([1], 'h2');
render({name: 'object'}, 'h3');
render({},'h4');
render();
    

    



    










