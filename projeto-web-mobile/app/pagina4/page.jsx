"use client"
import React, { useState, useEffect } from "react";
import Menu from "../Components/menu";
import styles from "./page.module.css"

const Page = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [apiUrl, setApiUrl] = useState("");

    useEffect(() => {
        const fetchAirQualityData = async () => {
            try {
                setLoading(true);
                const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=4bf654832e136cdc3d7865ae59931b18`;
                setApiUrl(url); // Definindo a URL completa
                const response = await fetch(url);
                
                if (response.ok) {
                    const data = await response.json();
                    setAirQualityData(data);
                } else {
                    throw new Error('Erro ao recuperar os dados da qualidade do ar');
                }
            } catch (error) {
                console.error('Erro ao recuperar os dados da qualidade do ar:', error);
            } finally {
                setLoading(false);
            }
        };

        if (latitude !== "" && longitude !== "") {
            fetchAirQualityData();
        }
    }, [latitude, longitude]);

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const handleSearch = () => {
        if (latitude !== "" && longitude !== "") {
            fetchAirQualityData();
        }
    };

    return (
        <div className={styles.teste}>
            <Menu />
            <h1>Dados da Qualidade do Ar</h1>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input type="text" id="latitude" value={latitude} onChange={handleLatitudeChange} />
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input type="text" id="longitude" value={longitude} onChange={handleLongitudeChange} />
            </div>
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Carregando..." : "Buscar"}
            </button>
            <p>URL completa: {apiUrl}</p> {/* Exibindo a URL completa */}
            {airQualityData ? (
                <div>
                    <p>Cidade: {airQualityData?.name}</p>
                    <p>Índice de Poluição do Ar: {airQualityData?.list[0]?.main?.aqi}</p>
                </div>
            ) : (
                <p>{loading ? "Carregando dados..." : "Digite a latitude e a longitude e clique em Buscar."}</p>
            )}
        </div>
    );
};

export default Page;
