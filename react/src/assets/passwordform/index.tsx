import { useState } from 'react';
import nameStyles from '../nameform/styles.module.css';
import styles from './styles.module.css';

type PasswordFormProps = {
  userName: string;
};

export function PasswordForm({ userName }: PasswordFormProps) {
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const rules = [
    {
      label: 'Um símbolo (ex: ? ! @ #)',
      ok: /[^A-Za-z0-9\s]/.test(password),
    },
    {
      label: 'Uma letra maiúscula',
      ok: /[A-Z]/.test(password),
    },
    {
      label: 'Pelo menos 3 números',
      ok: (password.match(/\d/g) ?? []).length >= 3,
    },
  ];

  const isValid = rules.every(rule => rule.ok);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(isValid);
  }

  if (success) {
    return <p className={nameStyles.greeting}>Acesso liberado, {userName}! 🎉</p>;
  }

  return (
    <form className={nameStyles.form} onSubmit={handleSubmit}>
      <label className={nameStyles.label} htmlFor='senha'>
        Agora, {userName}, digite a senha
      </label>
      <input
        className={nameStyles.input}
        id='senha'
        type='password'
        placeholder='Senha'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />

      <ul className={styles.rules}>
        {rules.map(rule => (
          <li key={rule.label} className={rule.ok ? styles.ok : styles.pending}>
            {rule.ok ? '✔' : '✘'} {rule.label}
          </li>
        ))}
      </ul>

      <button className={nameStyles.button} type='submit' disabled={!isValid}>
        Entrar
      </button>
    </form>
  );
}