import { Button } from "@material-ui/core";
import React from "react";
import './SearchPage.css';
import SearchResult from "./SearchResult";

//test images
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>Total de 32 projetos/locais cadastrados</p>
                <h1>Projetos/Locais</h1>
                <Button variant='outlined'>Sem Reserva</Button>
                <Button variant='outlined'>Com Reserva</Button>
                <Button variant='outlined'>Todos</Button>
            </div>
            <SearchResult 
                img={img1}
                location='Salgado Filho - Caxias do Sul'
                title='Almoço para Todos'
                description='Distribuição de pratos de sopa para pessoas necessitadas'
            />

            <SearchResult 
                img={img2}
                location='Galópolis - Caxias do Sulv'
                title='Corte de Cabelo Solidário'
                description='Corte de cabelo gratuito'
            />

            
            <SearchResult 
                img={img3}
                location='Santa Catarina - Caxias do Sul'
                title='Marmitex Solidário'
                description='Distibuição de marmitas'
            />

            <SearchResult 
                img={img4}
                location='Centro - Caxias do Sul'
                title='Precisa-se de Local - Projeto Saúde'
                description='Connsulta médica básica sem custo'
            />
        </div>
    )
}

export default SearchPage