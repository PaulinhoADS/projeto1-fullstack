import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'; // Biblioteca externa escolhida
import { AppContext } from '../contexts/AppContext';

export default function SearchForm() {
  const { buscarPersonagens, limparBusca, personagens, erroApi } = useContext(AppContext);
  
  // Configuração do react-hook-form para gerenciar o input
  // função 'reset' do hook p/ limpar o campo de texto
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const aoEnviar = (dados) => {
    buscarPersonagens(dados.nomePersonagem);
  };

  const acaoVoltar = () => {
    limparBusca(); 
    reset();      
  };

  return (
    <form onSubmit={handleSubmit(aoEnviar)} className="search-form">
      <h3>Buscar Personagem</h3>
      
      {/* Verificação de campos obrigatórios antes do envio */}
      <input 
        type="text" 
        placeholder="Digite o nome (ex: Rick, Morty, Summer, Mr., Jerry, Beth, Squanchy, Birdperson, etc.)"
        {...register("nomePersonagem", { required: "O nome do personagem é obrigatório para a busca!" })}
      />
      
      {/* Mensagem de erro de validação (react-hook-form) */}
      {errors.nomePersonagem && <span className="error-msg">{errors.nomePersonagem.message}</span>}
      
      <div className="botoes-acao">
        <button type="submit" className="btn-buscar">Procurar o personagem da Série Rick e Morty</button>
        
        {/* Renderização Condicional: O botão só aparece se houver resultados ou erro */}
        {(personagens.length > 0 || erroApi) && (
          <button type="button" className="btn-voltar" onClick={acaoVoltar}>
            Voltar ao Início
          </button>
        )}
      </div>
    </form>
  );
}
