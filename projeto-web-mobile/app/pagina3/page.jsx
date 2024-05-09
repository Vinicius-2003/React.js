"use client"
import React, { useState, useEffect } from "react";
import Menu from "../Components/menu";
import styles from "./page.module.css"

const Page = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [airQualityData, setAirQualityData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAirQualityData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=5a848d4b-26ec-4d30-9fc3-63f858c004d2`);
                
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
            {airQualityData ? (
                <div>
                    <p>Cidade: {airQualityData.data?.city}</p>
                    <p>Estado: {airQualityData.data?.state}</p>
                    <p>País: {airQualityData.data?.country}</p>
                    <p>Qualidade do Ar: {airQualityData.data?.current?.pollution?.aqius}</p>
                    <p>Temperatura: {airQualityData.data?.current?.weather?.tp}°C</p>
                    <p>Índice de Poluição do Ar: {airQualityData.data?.current?.pollution?.aqicn}</p>
                    {airQualityData.data?.current?.pollution?.aqius && (
    <p>
        {airQualityData.data.current.pollution.aqius <= 50 && (
            "Qualidade do ar: Boa"
        )}
        {airQualityData.data.current.pollution.aqius > 50 && airQualityData.data.current.pollution.aqius <= 100 && (
            "Qualidade do ar: Moderada"
        )}
        {airQualityData.data.current.pollution.aqius > 100 && airQualityData.data.current.pollution.aqius <= 150 && (
            "Qualidade do ar: Insalubre para grupos sensíveis"
        )}
        {airQualityData.data.current.pollution.aqius > 150 && airQualityData.data.current.pollution.aqius <= 200 && (
            "Qualidade do ar: Insalubre"
        )}
        {airQualityData.data.current.pollution.aqius > 200 && airQualityData.data.current.pollution.aqius <= 300 && (
            "Qualidade do ar: Muito insalubre"
        )}
        {airQualityData.data.current.pollution.aqius > 300 && (
            "Qualidade do ar: Perigosa"
        )}
    </p>
)}
                </div>
            ) : (
                <p>{loading ? "Carregando dados..." : "Digite a latitude e a longitude e clique em Buscar."}</p>
            )}
        </div>
    );
};

export default Page;