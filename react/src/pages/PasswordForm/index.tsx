import { useState } from 'react';
import { MainTemplate } from '../../templates/MainTamplate';
import styles from './styles.module.css';

export function PasswordForm() {
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const rules = [
    { label: 'Um símbolo (ex: ? ! @ #)', ok: /[^A-Za-z0-9\s]/.test(password) },
    { label: 'Uma letra maiúscula', ok: /[A-Z]/.test(password) },
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
    return (
      <MainTemplate>
        <p className={styles.success}>Acesso liberado! 🎉</p>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='senha'>
          Digite a senha
        </label>
        <input
          className={styles.input}
          id='senha'
          type='password'
          placeholder='Senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <ul className={styles.rules}>
          {rules.map(rule => (
            <li
              key={rule.label}
              className={rule.ok ? styles.ok : styles.pending}
            >
              {rule.ok ? '✔' : '✘'} {rule.label}
            </li>
          ))}
        </ul>

        <button className={styles.button} type='submit' disabled={!isValid}>
          Entrar
        </button>
      </form>
    </MainTemplate>
  );
}