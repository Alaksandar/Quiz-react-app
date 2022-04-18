import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.module.css'

const links = [
    {to: '/', label: 'Список'},
    {to: '/auth', label: 'Авторизация'},
    {to: '/quiz-creator', label: 'Создать тест'},
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => (isActive ? classes.active : '')}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render () {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>

                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </>
            
        )
    }

    
}

export default Drawer
