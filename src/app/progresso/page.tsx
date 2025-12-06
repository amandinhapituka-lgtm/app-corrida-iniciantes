'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, Calendar, Target, Award, Flame, CheckCircle2, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProgressoPage() {
  const router = useRouter();
  const [periodoSelecionado, setPeriodoSelecionado] = useState<'semana' | 'mes' | 'ano'>('semana');

  // Dados de exemplo
  const estatisticas = {
    semana: {
      distanciaTotal: 12.5,
      tempoTotal: '2h 15min',
      corridasCompletas: 3,
      paceMedio: '6:15 min/km',
      calorias: 1250,
      sequencia: 7,
    },
    mes: {
      distanciaTotal: 52.3,
      tempoTotal: '9h 45min',
      corridasCompletas: 14,
      paceMedio: '6:20 min/km',
      calorias: 5230,
      sequencia: 28,
    },
    ano: {
      distanciaTotal: 425.8,
      tempoTotal: '78h 30min',
      corridasCompletas: 98,
      paceMedio: '6:25 min/km',
      calorias: 42580,
      sequencia: 365,
    },
  };

  const conquistas = [
    {
      id: '1',
      nome: 'Primeira Corrida',
      descricao: 'Complete sua primeira corrida',
      icone: '🏃',
      conquistado: true,
      data: '2024-01-05',
    },
    {
      id: '2',
      nome: 'Sequência de 7 Dias',
      descricao: 'Mantenha atividade por 7 dias seguidos',
      icone: '🔥',
      conquistado: true,
      data: '2024-01-12',
    },
    {
      id: '3',
      nome: '5K Completo',
      descricao: 'Complete uma corrida de 5 quilômetros',
      icone: '🎯',
      conquistado: true,
      data: '2024-01-15',
    },
    {
      id: '4',
      nome: '50km no Mês',
      descricao: 'Percorra 50km em um mês',
      icone: '📊',
      conquistado: false,
    },
    {
      id: '5',
      nome: 'Madrugador',
      descricao: 'Complete 5 corridas antes das 7h',
      icone: '🌅',
      conquistado: false,
    },
    {
      id: '6',
      nome: '10K Completo',
      descricao: 'Complete uma corrida de 10 quilômetros',
      icone: '🏆',
      conquistado: false,
    },
  ];

  const metas = [
    {
      id: '1',
      nome: 'Correr 5K sem parar',
      progresso: 75,
      atual: '3.75 km',
      objetivo: '5 km',
      prazo: '2 semanas',
    },
    {
      id: '2',
      nome: 'Melhorar pace para 6:00 min/km',
      progresso: 60,
      atual: '6:15 min/km',
      objetivo: '6:00 min/km',
      prazo: '1 mês',
    },
    {
      id: '3',
      nome: 'Correr 3x por semana',
      progresso: 100,
      atual: '3 corridas',
      objetivo: '3 corridas',
      prazo: 'Esta semana',
    },
  ];

  const stats = estatisticas[periodoSelecionado];

  const evolucaoSemanal = [
    { semana: 'Sem 1', distancia: 8.5, pace: 6.45 },
    { semana: 'Sem 2', distancia: 10.2, pace: 6.35 },
    { semana: 'Sem 3', distancia: 11.8, pace: 6.25 },
    { semana: 'Sem 4', distancia: 12.5, pace: 6.15 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Trial Banner */}
      <div className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6" />
            <div>
              <p className="font-bold">📊 Análise Avançada + Insights com IA</p>
              <p className="text-sm opacity-90">Descubra padrões ocultos e otimize seu treino</p>
            </div>
          </div>
          <Button 
            onClick={() => router.push('/pricing')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold whitespace-nowrap"
          >
            Teste Grátis 3 Dias
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
          ← Voltar ao Dashboard
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Seu Progresso 📈
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Cada passo conta. Veja como você está evoluindo!
        </p>
      </div>

      {/* Seletor de Período */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={periodoSelecionado === 'semana' ? 'default' : 'outline'}
            onClick={() => setPeriodoSelecionado('semana')}
            className="rounded-full"
          >
            Esta Semana
          </Button>
          <Button
            variant={periodoSelecionado === 'mes' ? 'default' : 'outline'}
            onClick={() => setPeriodoSelecionado('mes')}
            className="rounded-full"
          >
            Este Mês
          </Button>
          <Button
            variant={periodoSelecionado === 'ano' ? 'default' : 'outline'}
            onClick={() => setPeriodoSelecionado('ano')}
            className="rounded-full"
          >
            Este Ano
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5 opacity-80" />
          </div>
          <div className="text-3xl font-bold mb-1">{stats.distanciaTotal} km</div>
          <div className="text-sm opacity-90">Distância Total</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8 opacity-80" />
            <CheckCircle2 className="w-5 h-5 opacity-80" />
          </div>
          <div className="text-3xl font-bold mb-1">{stats.corridasCompletas}</div>
          <div className="text-sm opacity-90">Corridas Completas</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 opacity-80" />
            <span className="text-xs opacity-80">min/km</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.paceMedio}</div>
          <div className="text-sm opacity-90">Pace Médio</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5 opacity-80" />
          </div>
          <div className="text-3xl font-bold mb-1">{stats.calorias}</div>
          <div className="text-sm opacity-90">Calorias Queimadas</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8 opacity-80" />
            <span className="text-xs opacity-80">horas</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.tempoTotal}</div>
          <div className="text-sm opacity-90">Tempo Total</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-8 h-8 opacity-80" />
            <span className="text-xs opacity-80">dias</span>
          </div>
          <div className="text-3xl font-bold mb-1">{stats.sequencia}</div>
          <div className="text-sm opacity-90">Sequência Ativa</div>
        </Card>
      </div>

      {/* Evolução Semanal */}
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Evolução nas Últimas 4 Semanas
        </h2>
        <div className="space-y-4">
          {evolucaoSemanal.map((semana, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium text-gray-600 dark:text-gray-400">
                {semana.semana}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Distância</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{semana.distancia} km</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(semana.distancia / 15) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                {index > 0 && semana.pace < evolucaoSemanal[index - 1].pace ? (
                  <TrendingDown className="w-4 h-4 text-green-500" />
                ) : index > 0 ? (
                  <TrendingUp className="w-4 h-4 text-red-500" />
                ) : null}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {semana.pace} min/km
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Metas */}
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Suas Metas
        </h2>
        <div className="space-y-6">
          {metas.map((meta) => (
            <div key={meta.id}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {meta.nome}
                </h3>
                <Badge variant={meta.progresso === 100 ? 'default' : 'outline'}>
                  {meta.prazo}
                </Badge>
              </div>
              <div className="flex items-center justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{meta.atual}</span>
                <span>{meta.progresso}%</span>
                <span>{meta.objetivo}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    meta.progresso === 100 
                      ? 'bg-gradient-to-r from-green-500 to-green-600' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                  style={{ width: `${meta.progresso}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Conquistas */}
      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Conquistas 🏆
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conquistas.map((conquista) => (
            <div
              key={conquista.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                conquista.conquistado
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-400 dark:border-yellow-600'
                  : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
              }`}
            >
              <div className="text-4xl mb-3">{conquista.icone}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {conquista.nome}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {conquista.descricao}
              </p>
              {conquista.conquistado && conquista.data && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                  <Award className="w-3 h-3" />
                  <span>Conquistado em {new Date(conquista.data).toLocaleDateString('pt-BR')}</span>
                </div>
              )}
              {!conquista.conquistado && (
                <Badge variant="outline" className="text-xs">
                  Em progresso
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* CTA Premium */}
      <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Insights Avançados com IA</h3>
            </div>
            <p className="text-lg opacity-90 mb-4">
              Descubra padrões ocultos, receba recomendações personalizadas e 
              otimize seu treino com análise de IA. <strong>Teste grátis por 3 dias!</strong>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Análise preditiva</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Comparação avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Relatórios detalhados</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => router.push('/pricing')}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 whitespace-nowrap"
          >
            🚀 Começar Teste Grátis
          </Button>
        </div>
      </Card>

      {/* Motivação */}
      <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💪 Continue Assim!
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Você está fazendo um ótimo progresso! Cada corrida é uma vitória. 
          Continue focado em suas metas e lembre-se: <strong>a consistência é a chave para o sucesso na corrida.</strong>
        </p>
      </Card>
    </div>
  );
}
