import React from "react";
import './Home.css';
import Banner from './Banner';
import Card from './Card';

//test images
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpeg' 


function Home() {
    return (
        <div className='home'>
            <Banner />

            <h1>.</h1>

            <div className='home__section'>
                <Card src={img1} title='Almoço para Todos' description='Distribuição de pratos de sopa para pessoas necessitadas' location='Salgado Filho - Caxias do Sul'/>
                <Card src={img2} title='Corte de Cabelo Solidário' description='Corte de cabelo gratuito' location='Galópolis - Caxias do Sul'/>
                <Card src={img3} title='Marmitex Solidário' description='Distibuição de marmitas' location='Santa Catarina - Caxias do Sul'/>
            </div>

            <div className='home__section'>
                <Card src={img4} title='Precisa-se de Local - Projeto Saúde' description='Connsulta médica básica sem custo' location='Centro - Caxias do Sul'/>
                <Card src={img5} title='Dentista para Todos' description='Aula e consulta sem custo' location='Rio Branco - Caxias do Sul'/>
                <Card src={img6} title='Local para Almoço Solidário' description='Estou a procura de um local para realizar uma almoço para as pessoas carentes do meu bairro' location='Centro - Caxias do Sul'/>
            </div>
        </div>
    )
} 

export default Home