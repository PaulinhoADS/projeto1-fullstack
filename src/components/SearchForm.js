import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'; // Biblioteca externa escolhida
import { AppContext } from '../contexts/AppContext';

export default function SearchForm() {
  const { buscarPersonagens } = useContext(AppContext);
  
  // Configuração do react-hook-form para gerenciar o input
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função disparada se a validação passar
  const aoEnviar = (dados) => {
    buscarPersonagens(dados.nomePersonagem);
  };

  return (
    <form onSubmit={handleSubmit(aoEnviar)} className="search-form">
      <h3>Buscar Personagem</h3>
      
      {/* Verificação de campos obrigatórios antes do envio */}
      <input 
        type="text" 
        placeholder="Digite o nome (ex: Rick, Morty, Summer)"
        {...register("nomePersonagem", { required: "O nome do personagem é obrigatório para a busca!" })}
      />
      
      {/* Mensagem de erro de validação (react-hook-form) */}
      {errors.nomePersonagem && <span className="error-msg">{errors.nomePersonagem.message}</span>}
      
      <button type="submit">Procurar na API</button>
    </form>
  );
}