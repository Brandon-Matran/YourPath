// import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import './index.css'

// const Fader = ({text}) => {

//     const [ fadeProp, setFadeProp ] =useState({
//         fade: 'fade-in',
//     });

//     useEffect(() => {
//         const timeout = setInterval(() => {
//             if(fadeProp.fade === 'fade-in)' {
//                 setFadeProp({
//                     fade: 'fade-out'
//                 })
//             } else {
//                 setFadeProp({
//                     fade: 'fade-in'
//             })
//         }

//         }, 2000);

//         return () => {

//         }
//     }, [])

//     useEffect(() => {
//         const timeout = setInterval(() => {
//             if (fadeProp.fade === 'fade-in') {
//                 setFadeProp({
//                     fade: 'fade-out'
//                 })
//             } else {
//                 setFadeProp({
//                     fade: 'fade-in'
//                 })
//             }
//         }, 4000);


//         return ()=> {

//         }
//     }, [])

//     return (
//         <>
//         <p className={fadeProp.fade}>{text}</p>

//         </>
//     )
// }
// Fader.defaultProps = {
//     text: 'Let us take you further'
// }

// Fader.propTypes = {
//     text:PropTypes.string,
// }


// export default Fader
