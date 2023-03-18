/**
 * 导航栏维护
 */
import titles from "../autoSiderbar/textTitle";

let navbar = [
    {
        text: titles['topicNav'],
        link: '/topicNav/',
    },
    {
        text: titles['aboutme'],
        link: '/aboutme/'
    },
    {
        text: 'Github',
        link: 'https://github.com/Q10Viking/q10viking.github.io'
    }
]

module.exports = navbar;