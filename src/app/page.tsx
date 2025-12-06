'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Play, Target, TrendingUp, Award, Zap, Users, Clock, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      try {
        const quizCompleted = localStorage.getItem('quizCompleted');
        
        if (!quizCompleted) {
          router.push('/quiz');
        } else {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Erro ao verificar quiz:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [router, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Trial Banner - Fixo no topo */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 text-center shadow-lg">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold animate-pulse">
          <Clock className="w-5 h-5" />
          🎉 OFERTA ESPECIAL: 3 DIAS GRÁTIS + Acesso Total Premium!
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">
              Mais de <strong className="text-blue-600">10.000 corredores</strong> já transformaram suas vidas
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Pare de Sonhar.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comece a Correr.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Você está a <strong>apenas 3 dias</strong> de descobrir o corredor que existe dentro de você. 
            Sem desculpas. Sem complicação. Apenas resultados reais.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            <strong className="text-green-600 dark:text-green-400">GRÁTIS por 3 dias.</strong> Depois, 
            apenas R$ 29,90/mês. Cancele quando quiser. Sem pegadinhas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => router.push('/pricing')}
              size="lg"
              className="px-10 py-7 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🚀 Começar Teste Grátis de 3 Dias
            </Button>
            <Button
              onClick={() => router.push('/dashboard')}
              size="lg"
              variant="outline"
              className="px-10 py-7 text-xl rounded-xl font-semibold border-2 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Problema + Solução */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Você Já Tentou Começar a Correr e...
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-4">
                  ❌ Sem o RunStart:
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Não sabe por onde começar</li>
                  <li>• Desiste na primeira semana</li>
                  <li>• Treina errado e se machuca</li>
                  <li>• Perde a motivação sozinho</li>
                  <li>• Não vê resultados</li>
                </ul>
              </Card>

              <Card className="p-6 bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4">
                  ✅ Com o RunStart:
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Plano personalizado para SEU nível</li>
                  <li>• Evolução gradual e segura</li>
                  <li>• Acompanhamento profissional</li>
                  <li>• Comunidade que te apoia</li>
                  <li>• Resultados visíveis em semanas</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features com Benefícios */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tudo Que Você Precisa Para{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ter Sucesso
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Não é só um app. É seu treinador pessoal no bolso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Planos Personalizados
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Treinos adaptados ao <strong>SEU ritmo</strong>, não ao de outra pessoa. 
                Evolua com segurança e sem lesões.
              </p>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                IA Adaptativa
              </Badge>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Progresso Visível
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Veja sua evolução em <strong>tempo real</strong>. Gráficos, estatísticas 
                e conquistas que te mantêm motivado.
              </p>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                Análise Avançada
              </Badge>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Sistema de Conquistas
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Desbloqueie medalhas e bata recordes. <strong>Gamificação</strong> que 
                transforma treino em diversão.
              </p>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Motivação Diária
              </Badge>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-orange-500">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Resultados Rápidos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Veja mudanças em <strong>2 semanas</strong>. Nosso método comprovado 
                acelera sua evolução.
              </p>
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                Método Comprovado
              </Badge>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-pink-500">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Comunidade Ativa
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Junte-se a <strong>milhares de corredores</strong> que se apoiam 
                mutuamente. Você não está sozinho!
              </p>
              <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
                10.000+ Membros
              </Badge>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Suporte Premium
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dúvidas? Nossa equipe responde em <strong>minutos</strong>, não dias. 
                Suporte 24/7 sempre disponível.
              </p>
              <Badge className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                Resposta Rápida
              </Badge>
            </Card>
          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Histórias Reais de Transformação
              </h2>
              <p className="text-xl text-blue-100">
                Veja o que nossos corredores estão dizendo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Em 3 meses saí do sedentarismo para correr 5K sem parar. 
                  O RunStart mudou minha vida completamente!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Maria Clara</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">São Paulo, SP</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Tentei começar a correr 5 vezes e sempre desistia. 
                  Com o RunStart, finalmente consegui! Melhor investimento que fiz."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Roberto Silva</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "Perdi 12kg e ganhei disposição. O app é tão bom que virou 
                  parte da minha rotina. Não vivo mais sem!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    AC
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Ana Costa</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Belo Horizonte, MG</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final Urgente */}
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Clock className="w-5 h-5" />
            OFERTA POR TEMPO LIMITADO
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Sua Transformação Começa HOJE
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Não deixe para amanhã o que pode mudar sua vida hoje. 
            <strong> 3 dias grátis</strong> para você descobrir seu potencial.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>Acesso imediato a TODOS os recursos</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>Cancele quando quiser, sem burocracia</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>Suporte dedicado para te ajudar</span>
            </div>
          </div>

          <Button
            onClick={() => router.push('/pricing')}
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 text-2xl px-16 py-8 font-bold shadow-2xl hover:scale-105 transition-all"
          >
            🎯 Quero Começar Meu Teste Grátis AGORA
          </Button>

          <p className="text-sm mt-6 opacity-75">
            Junte-se a 10.000+ corredores que já transformaram suas vidas
          </p>
        </Card>
      </div>
    </div>
  );
}
