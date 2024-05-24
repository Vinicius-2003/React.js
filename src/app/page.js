"use client"
import React, { useState, useEffect } from 'react';
import Teste from '@/components/teste';
import styles from "./page.module.css"

// const URL = "https://jsonplaceholder.typicode.com/posts"

const URL = "http://localhost:8000/todo"

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [tarefa, setTarefa] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  //Ler os dados
  const fetchData = async () => {
    try{
      setLoading(true)

      const response = await fetch(URL)
      const data = await response.json()
      setTarefa(data)

    }catch(error){
      console.log(error)
    } 
    finally {
      setLoading(false)
    }
  }

  //Adicionar dados
  const addTarefa = async (text) => {
      const response = await fetch(URL, {
        method : 'POST',
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify({text}),
      });
      const data = await response.json();
      setTarefa([...tarefa,data]);
  };

  // Deletar dados
  const deletarTeste = async (id) => {
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
      method : 'DELETE',
    });
    if (response.ok) {
      setTarefa(tarefa.filter((tarefa => tarefa.id !== id)))
    }

  }


  return (
    <>
    <div className={styles.corpo}>
    <form
        onSubmit = { (e) => {e.preventDefault(); const text = e.target.tarefa.value.trim();
          if (text) {
            addTarefa(text);
            e.target.tarefa.value = "";
          }
        }}
      >
      <h1>To Do List</h1>
      <div >
        <input className={styles.input} type="text" name="tarefa" />
        <button className={styles.botao} type='submit'> + </button>
      </div>
      </form>
    </div>
      <div className= {styles.listaCentro}>
        <div className={styles.lista}>
          {tarefa.map( (item) => <Teste item={item} deletar={deletarTeste} />) }
        </div>
      </div>
    </>
  );
}

