import styles from './index.module.css'
import { useState } from 'react'
function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, SetSqlQuery] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    const generatedQuery = await generateQuery();
    SetSqlQuery(generatedQuery)
  };

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', { 
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({queryDescription: queryDescription})
  });

  const data = await response.json()
  return data.response.trim();
  }
  //const [count, setCount] = useState(0)
  //<img src={sqlLogo} alt='' className={styles.icon} />
  return (
    <main className={styles.main}>
      <text>SQL LOGO HERE</text> 
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          name='query-description'
          placeholder='Describe your query'
          onChange={(e)=> setQueryDescription(e.target.value)}  
        />
        <input type='submit' value='Generate query'/>
        <pre>{sqlQuery}</pre>
      </form>
    </main>
  )
}

export default App
