import { useState } from 'react';
import styles from './styles.module.css';

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type NameFormProps = {
  onUnlock: (name: string) => void;
};

export function NameForm({ onUnlock }: NameFormProps) {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // limite sorteado uma única vez, quando o componente aparece
  const [limit] = useState(() => randomBetween(3, 7));
  const [clicks, setClicks] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    if (!cleanName) return;

    const newClicks = clicks + 1;
    setClicks(newClicks);

    // atingiu o limite: vai para a página da senha
    if (newClicks >= limit) {
      onUnlock(cleanName);
      return;
    }

    setGreeting(`Olá, ${cleanName}!`);
    setPosition({
      x: randomBetween(-200, 200),
      y: randomBetween(-80, 80),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor='nome'>
        Nome
      </label>
      <input
        className={styles.input}
        id='nome'
        type='text'
        placeholder='Digite seu nome'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <p className={styles.greeting}>{greeting}</p>

      <button
        className={styles.button}
        type='submit'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        Enviar
      </button>
    </form>
  );
}