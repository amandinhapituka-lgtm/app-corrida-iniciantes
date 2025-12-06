// Dados mock para o MVP
import { Treino, Exercicio } from './types';

export const treinosIniciais: Treino[] = [
  {
    id: '1',
    titulo: 'Primeira Corrida Leve',
    descricao: 'Comece devagar! Alterne 2 minutos de corrida leve com 2 minutos de caminhada. Repita 5 vezes.',
    tipo: 'intervalo',
    duracao: 20,
    nivel: 'iniciante',
    concluido: false,
  },
  {
    id: '2',
    titulo: 'Caminhada Ativa',
    descricao: 'Caminhada em ritmo moderado para construir resistência base.',
    tipo: 'caminhada',
    distancia: 3,
    duracao: 30,
    nivel: 'iniciante',
    concluido: false,
  },
  {
    id: '3',
    titulo: 'Corrida Contínua Curta',
    descricao: 'Tente correr sem parar por 15 minutos em ritmo confortável.',
    tipo: 'corrida',
    duracao: 15,
    nivel: 'iniciante',
    concluido: false,
  },
];

export const exerciciosFortalecimento: Exercicio[] = [
  {
    id: '1',
    nome: 'Agachamento',
    descricao: 'Fortalece pernas e previne lesões nos joelhos',
    repeticoes: '3 séries de 12 repetições',
    categoria: 'pernas',
    concluido: false,
  },
  {
    id: '2',
    nome: 'Prancha',
    descricao: 'Fortalece o core e melhora a postura na corrida',
    repeticoes: '3 séries de 30 segundos',
    categoria: 'core',
    concluido: false,
  },
  {
    id: '3',
    nome: 'Alongamento de Panturrilha',
    descricao: 'Previne dores e câimbras durante a corrida',
    repeticoes: '2 séries de 30 segundos cada perna',
    categoria: 'alongamento',
    concluido: false,
  },
  {
    id: '4',
    nome: 'Elevação de Panturrilha',
    descricao: 'Fortalece a panturrilha e tornozelos',
    repeticoes: '3 séries de 15 repetições',
    categoria: 'pernas',
    concluido: false,
  },
  {
    id: '5',
    nome: 'Ponte (Glúteos)',
    descricao: 'Fortalece glúteos e lombar, essencial para corredores',
    repeticoes: '3 séries de 12 repetições',
    categoria: 'pernas',
    concluido: false,
  },
];

// Função auxiliar para calcular pace
export function calcularPace(distanciaKm: number, tempoMinutos: number): string {
  const paceMinutos = tempoMinutos / distanciaKm;
  const minutos = Math.floor(paceMinutos);
  const segundos = Math.round((paceMinutos - minutos) * 60);
  return `${minutos}:${segundos.toString().padStart(2, '0')} min/km`;
}
