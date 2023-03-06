import {SiMicrosoftoutlook} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://outlook.live.com/mail/0/', icon: <SiMicrosoftoutlook/>},
    {id: 2, link: 'https://twitter.com/home', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://www.linkedin.com/feed/', icon: <AiFillLinkedin/>},
    {id: 4, link: 'https://github.com/', icon: <AiFillGithub/>}
]