"use client"
import React, { useState, useEffect } from "react";
import Menu from "../Components/menu";
import styles from "./page.module.css";

const Page = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [airPollutionData, setAirPollutionData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [apiUrl, setApiUrl] = useState("");
    const [pollutionApiUrl, setPollutionApiUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4bf654832e136cdc3d7865ae59931b18`);
                
                if (response.ok) {
                    const data = await response.json();
                    setWeatherData(data);
                } else {
                    throw new Error('Erro ao recuperar os dados meteorológicos');
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados meteorológicos:', error);
            }
        };

        if (city !== "") {
            fetchData();
        }
    }, [city]);

    useEffect(() => {
        const fetchPollutionData = async () => {
            try {
                if (weatherData && weatherData.length > 0) {
                    const latitude = weatherData[0]?.lat;
                    const longitude = weatherData[0]?.lon;
                    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=4bf654832e136cdc3d7865ae59931b18`);
                    
                    if (response.ok) {
                        const data = await response.json();
                        setAirPollutionData(data);
                    } else {
                        throw new Error('Erro ao recuperar os dados de poluição do ar');
                    }
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados de poluição do ar:', error);
            } finally {
                setLoading(false);
            }
        };

        if (weatherData && weatherData.length > 0) {
            fetchPollutionData();
            setApiUrl(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4bf654832e136cdc3d7865ae59931b18`);
            const latitude = weatherData[0]?.lat;
            const longitude = weatherData[0]?.lon;
            setPollutionApiUrl(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=4bf654832e136cdc3d7865ae59931b18`);
        }
    }, [weatherData, city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        if (city !== "") {
            fetchData();
        }
    };

    const handleClear = () => {
        setCity("");
        setWeatherData(null);
        setAirPollutionData(null);
        setApiUrl("");
        setPollutionApiUrl("");
    };

    return (
        <div className={styles.teste}>
            <Menu />
            <h1>Dados Meteorológicos e de Poluição do Ar</h1>
            <div>
                <label htmlFor="city">Digite o nome de uma Cidade ou Bairro:</label>
                <input type="text" id="city" value={city} onChange={handleCityChange} />
            </div>
            
            <button onClick={handleClear}>
                Limpar Resultados
            </button>
            
            {weatherData ? (
                <div>
                    <p>Nome: {weatherData[0]?.name}</p>
                    <p>Latitude: {weatherData[0]?.lat}</p>
                    <p>Longitude: {weatherData[0]?.lon}</p>
                    <p>País: {weatherData[0]?.country}</p>
                </div>
            ) : (
                <p>{loading ? "Carregando dados..." : "Digite o nome da cidade e clique em Buscar."}</p>
            )}
            {airPollutionData ? (
                <div>
                    <h2>Dados de Poluição do Ar</h2>
                    <p>Índice de Poluição: {airPollutionData.list[0]?.main?.aqi}</p>
                    <p>Componentes:</p>
                    <ul>
                        {airPollutionData.list[0]?.components && Object.entries(airPollutionData.list[0]?.components).map(([key, value]) => (
                            <li key={key}>{key}: {value}</li>
                        ))}
                    </ul>
                    <p>{apiUrl && `URL da API do Clima: ${apiUrl}`}</p>
                    <p>teste</p>
                    <p>{pollutionApiUrl && `URL da API da Poluição do Ar: ${pollutionApiUrl}`}</p>
                </div>
            ) : (
                <p>{loading ? "Carregando dados de poluição do ar..." : "Aguardando dados de poluição do ar."}</p>
            )}
        </div>
    );
};

export default Page;
