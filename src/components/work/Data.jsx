import React from "react"
import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"

// for (let i = 1; i < 6; i++) {
//     import `${Work{i}}` from `../../assets/work${i}.jpg`
// }

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Web makaka',
        category: 'app'
    },
    {
        id: 2,
        image: Work2,
        title: 'Web makaka',
        category: 'web'
    },
    {
        id: 3,
        image: Work3,
        title: 'Web makaka',
        category: 'design'
    },
    {
        id: 4,
        image: Work4,
        title: 'Web makaka',
        category: 'web'
    },
    {
        id: 5,
        image: Work5,
        title: 'Web makaka',
        category: 'web'
    },
];

export const projectsNav = [
    {
        name:'all',
    },
    {
        name:'web',
    },
    {
        name:'app',
    },
    {
        name:'design',
    },
]