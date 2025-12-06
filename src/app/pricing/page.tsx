'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Sparkles, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'mensal' | 'anual'>('mensal');

  const planos = [
    {
      id: 'basico',
      nome: 'Iniciante',
      icone: Zap,
      descricao: 'Perfeito para começar sua jornada',
      precoMensal: 29.90,
      precoAnual: 299.90,
      economia: 'Economize R$ 59',
      recursos: [
        'Planos de treino personalizados',
        'Registro de corridas ilimitado',
        'Estatísticas básicas',
        'Acompanhamento de progresso',
        'Suporte por email',
      ],
      destaque: false,
      cor: 'from-blue-500 to-blue-600',
    },
    {
      id: 'pro',
      nome: 'Corredor Pro',
      icone: Crown,
      descricao: 'Para quem leva a corrida a sério',
      precoMensal: 49.90,
      precoAnual: 499.90,
      economia: 'Economize R$ 99 + 2 meses grátis',
      recursos: [
        'TUDO do plano Iniciante',
        'Análise avançada de performance',
        'Planos de treino adaptativos com IA',
        'Exercícios de fortalecimento',
        'Coaching personalizado',
        'Metas e conquistas exclusivas',
        'Suporte prioritário 24/7',
        'Acesso antecipado a novos recursos',
      ],
      destaque: true,
      cor: 'from-purple-500 to-pink-600',
    },
    {
      id: 'elite',
      nome: 'Elite Runner',
      icone: Sparkles,
      descricao: 'O máximo para atletas de elite',
      precoMensal: 79.90,
      precoAnual: 799.90,
      economia: 'Economize R$ 159 + 3 meses grátis',
      recursos: [
        'TUDO do plano Corredor Pro',
        'Consultoria 1-on-1 com treinadores',
        'Plano de nutrição personalizado',
        'Análise biomecânica',
        'Preparação para provas',
        'Grupo VIP exclusivo',
        'Relatórios detalhados mensais',
        'Garantia de resultados',
      ],
      destaque: false,
      cor: 'from-orange-500 to-red-600',
    },
  ];

  const getPreco = (plano: typeof planos[0]) => {
    return billingCycle === 'mensal' ? plano.precoMensal : plano.precoAnual;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
            ← Voltar ao Dashboard
          </Link>
          
          {/* Trial Banner */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-pulse">
            <Clock className="w-5 h-5" />
            🎉 TESTE GRÁTIS POR 3 DIAS - SEM COMPROMISSO!
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha Seu Plano e{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforme Sua Corrida
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comece <strong>GRÁTIS por 3 dias</strong>. Cancele quando quiser. 
            Sem pegadinhas. Sem taxas ocultas.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
            <button
              onClick={() => setBillingCycle('mensal')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'mensal'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('anual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                billingCycle === 'anual'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Anual
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                -20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {planos.map((plano) => {
            const Icon = plano.icone;
            return (
              <Card
                key={plano.id}
                className={`relative overflow-hidden transition-all duration-300 ${
                  plano.destaque
                    ? 'border-4 border-purple-500 shadow-2xl scale-105 md:scale-110'
                    : 'hover:shadow-xl hover:scale-105'
                }`}
              >
                {plano.destaque && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold">
                    MAIS POPULAR 🔥
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${plano.cor}`} />

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plano.cor} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plano.nome}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plano.descricao}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        R$ {getPreco(plano).toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{billingCycle === 'mensal' ? 'mês' : 'ano'}
                      </span>
                    </div>
                    {billingCycle === 'anual' && (
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        {plano.economia}
                      </Badge>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 text-lg py-6 ${
                      plano.destaque
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    }`}
                  >
                    🎁 Começar Teste Grátis de 3 Dias
                  </Button>

                  <div className="space-y-3">
                    {plano.recursos.map((recurso, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {recurso}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Garantia */}
        <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-300 dark:border-green-700 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Garantia de 3 Dias Grátis - Risco Zero!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Experimente <strong>TODOS os recursos premium</strong> por 3 dias completos, 
              totalmente grátis. Se não gostar, cancele antes do 4º dia e 
              <strong> não pague nada</strong>. Simples assim!
            </p>
          </div>
        </Card>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Como funciona o teste grátis de 3 dias?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Você tem acesso completo a TODOS os recursos do plano escolhido por 3 dias. 
                Não pedimos cartão de crédito no cadastro. Após os 3 dias, você decide se quer continuar.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sim! Você pode cancelar quando quiser, sem multas ou taxas. 
                Se cancelar durante o trial, não será cobrado nada.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Posso mudar de plano depois?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                Ajustamos o valor proporcionalmente.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Vale a pena o plano anual?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Definitivamente! Você economiza até 20% e ganha meses grátis. 
                Além disso, mostra seu compromisso com a transformação - e isso faz toda diferença nos resultados!
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pronto Para Transformar Sua Corrida?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a <strong>mais de 10.000 corredores</strong> que já transformaram 
              suas vidas com o RunStart. Comece seu teste grátis agora!
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 font-bold shadow-2xl"
            >
              🚀 Começar Meu Teste Grátis Agora
            </Button>
            <p className="text-sm mt-4 opacity-75">
              ✓ Sem cartão de crédito necessário  ✓ Cancele quando quiser  ✓ Suporte 24/7
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
