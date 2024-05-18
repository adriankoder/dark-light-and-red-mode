// function teamswitshfunction (light,darkMode,redMode) {
//     //get  a element from html
//     const body = document.querySelector("#body")
//     console.log(body)
//         //set up a if/else statment to check wat 
//     if (body.classList.contains(light)){
//         body.classList.remove(light)
//         body.classList.add(darkMode)
//     } else if (body.classList.contains(darkMode)){
//         body.classList.remove(darkMode)
//         body.classList.add(light)
//     } else if (body.classList.contains(darkMode)){
//         body.classList.remove(darkMode)
//         body.classList.add(redMode)
//     } else if (body.classList.contains(redMode)){
//         body.classList.remove(redMode)
//         body.classList.add(light)
//     }else{
//         console.log("somting is wrong")
//     }
// }

// export {teamswitshfunction}
function teamswitshfunction(light, darkMode, redMode) {
    // Get the body element from HTML
    const body = document.querySelector("body");
    console.log(body);

    // Set up an if/else statement to check classes
    if (body.classList.contains(light)) {
        body.classList.remove(light);
        body.classList.add(darkMode);
    } else if (body.classList.contains(darkMode)) {
        body.classList.remove(darkMode);
        body.classList.add(redMode);
    } else if (body.classList.contains(redMode)) {
        body.classList.remove(redMode);
        body.classList.add(light);
    } else {
        console.log("Something is wrong");
    }
}

export { teamswitshfunction };
2