import React,{useState} from 'react'

import './style.css'

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    
    const ongId = localStorage.getItem('ongId');

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault();

        console.log("Handle foi chamada")

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('/incidents', data, {
                headers:{
                    authorizion: ongId
                }
            }).catch(e => alert(e))

            history.push('/profile')
        } catch (error) {
            alert("Erro ao cadastrar caso")
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be the hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhado para encotrar um heroí para resolver isso.</p>
                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                       Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}