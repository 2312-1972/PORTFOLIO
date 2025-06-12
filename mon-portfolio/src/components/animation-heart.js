
// TEST animation heart with scroll pointer
// const debounce = (func, threshold, callimmediately) => {
//     let timeout;
//     return function() {
//         const obj = this;
//         const args = arguments;

//         const delayed = () => {
//             timeout = null;
//             if (!callimmediately) func.apply(obj, args);
//         };

//         const callNow = callimmediately && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(delayed, threshold);

//         if (callNow) {
//             func.apply(obj, args);
//         }
//     };
// };


// export default debounce;