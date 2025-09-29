import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <>
            <NavBar />
            <main className='main-home'>
                <div className='home-text'>
                    <h1>Bem-vindo ao <span id='wvt'>WVT_System</span></h1>
                    <p>Seu sistema seguro para gerenciar logins e cadastros de forma rápida e simples.</p>
                </div>

                <div className='buttons-home'>
                    <Link to='/login'>
                        <Button className='entrar' text='Entrar' />
                    </Link>

                    <Link to='cadastro'>
                        <Button className='cadas' text='Cadastrar' />
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Home