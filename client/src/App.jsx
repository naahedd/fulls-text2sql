import styles from './index.module.css';
import { useState } from 'react';

function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  };

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ queryDescription })
    });

    const data = await response.json();
    return data.response.trim();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>SQL Generator</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.formSection}>
          <h2 className={styles.title}>Describe Your Query</h2>
          <form onSubmit={onSubmit} className={styles.form}>
            <textarea
              name="query-description"
              placeholder="Describe your query..."
              onChange={(e) => setQueryDescription(e.target.value)}
              className={styles.textarea}
            />
            <button type="submit" className={styles.button}>
              Generate SQL
            </button>
          </form>
        </section>
        <section className={styles.resultSection}>
          {sqlQuery && (
            <div className={styles.result}>
              <h3 className={styles.resultTitle}>Generated SQL Query</h3>
              <pre className={styles.query}>{sqlQuery}</pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
