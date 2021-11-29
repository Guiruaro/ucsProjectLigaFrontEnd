import React, { useState } from "react";
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search';

import {Link} from "react-router-dom";


function Banner(){
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>

            <div className='banner__menu'>
                <div className='banner__button-container'>
                    <Link to='/'><Button className='banner__menu-button' variant='outlined' >Home</Button></Link>
                    <Link to='/search'><Button className='banner__menu-button' variant='outlined' >Meus Projetos</Button></Link>
                    <Link to='/search'><Button className='banner__menu-button' variant='outlined' >Meus Locais</Button></Link>
                    <Link to='/search'><Button className='banner__menu-button' variant='outlined' >Cadastrar</Button></Link>
                </div>
                <div className='banner__search'>
                    {showSearch && <Search />}
                    <Button className='banner__search-button' variant='outlined' onClick={() =>setShowSearch(!showSearch)}>Filtros</Button>
                </div>
            </div>

            <div className='banner__info'>
                <h1>Encontre locais para seus projetos</h1>
                <h5>Aqui mostramos os locais disponíveis mais próximos.</h5>
                <Button variant='outlined'>Explorar</Button>
            </div>

        </div>
    )
}

export default Banner

