// // Text Reveal Animation

// export const animateTextReveal =()=>{

//     const textReveals = [...document.querySelectorAll('.text__reveal')]

    

// let callback = (entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             [...entry.target.querySelectorAll('span')].forEach((span) => {
//                 setTimeout(()=> {
//                     span.style.transform = `translateY(0)`
//                 })
//             })
//         }
//     })
// })


// let options = {
//     rootMarging: '0px',
//     threshold: 1.0
// }

// // export const IO = (item, options) => {
// //     return new Promise((resolve) => {
//         const observer = new window.IntersectionObserver((textReveals) => {
//             textReveals.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     [...entry.target.querySelectorAll('span')].forEach((span) => {
//                         setTimeout(()=> {
//                             span.style.transform = `translateY(0)`
//                         })
//                     })
//                 }
//             });
//         }, options);
//         // observer.observe(item);
// //     });
// // };

// // let observer = new IntersectionObserver(callback, options)

// textReveals.forEach(text => {
//     let string = text.innerHTML
//     let html = ''
//     for (let i = 0; i < string.length; i++){
//         html += `<span> ${string[i]} </span>`
//     }
//     text.innerHTML = html
//     observer.observe(text.parentElement)
// })



// }
