import { Talk } from '@/types';

export const talks: Talk[] = [
  {
    title: 'Angular Update: Guia Prático para Atualizações Sem Estresse',
    id: 'angular-update',
    description:
      'Esta palestra oferece conselhos úteis e passos claros para atualizar sua aplicação Angular de versões mais antigas para as mais recentes, sem estresse. Vamos explorar ferramentas úteis, pontos de atenção e estratégias para garantir uma transição eficiente para as novas versões do Angular.',
    url: 'https://www.youtube.com/embed/Y18qaM5aXw0'
  },
  {
    title: 'Nx: Escalando seu frontend com Monorepo',
    id: 'nx-frontend',
    description:
      'Escalar um ecossistema frontend moderno envolve governança, custos, processos, confiabilidade de entrega e performance em alto nível. Cada vez mais o tema de monorepositórios é tratado para alcançar estes objetivos. Esta talk irá abordar o Nx, que é um grande destaque quando o assunto é gerenciamento de monorepos, principalmente se tratando deste universo complexo que é o frontend.',
    url: 'https://www.youtube.com/embed/j_WD9ttgz-I'
  },
  {
    title: 'Composição de Formulários no Angular',
    id: 'angular-forms',
    description:
      'Desenvolver formulários complexos no frontend é um grande desafio. Precisamos lidar com muitos cenários como validações, lógicas de interação e reuso. Nesta talk apresentarei algumas técnicas para compor formulários utilizando o Angular Reactive Forms, garantindo assim mais flexibilidade e coesão para seu código.',
    url: 'https://www.youtube.com/embed/_V0IarbfZLQ'
  },
  {
    title: 'Testes no front-end com Testing Library',
    id: 'testing-library',
    description:
      'Realizar testes automatizados no Front-end é um grande desafio, pois envolve além do código, testes de UI. Nesta palestra irei apresentar a Testing Library, uma solução que visa facilitar a interação com os componentes, criando testes voltados para o usuário. Ela entrega a filosofia de testes que evitam detalhes de implementação, tornando-os mais confiáveis e manuteníveis.',
    url: 'https://www.youtube.com/embed/-q-V5XK5E4A'
  },
  {
    title: 'Programação Orientada a Interfaces no Angular',
    id: 'angular-interfaces',
    description:
      'O conceito de Interfaces é um dos mais importantes dentro da Programação Orientada a Objetos. Com elas construímos softwares mais escaláveis e desacoplados. Nesta palestra veremos como utilizá-las a nosso favor dentro de aplicações Angular.',
    url: 'https://www.youtube.com/embed/2poaA1AkOJw'
  },
  {
    title: 'Push Notifications na Web',
    id: 'push-notifications-web',
    description:
      'Um dos grandes trunfos da web moderna se dá pela vinda das Progressive Web App’s. Nossa aplicação registra um script em Background chamado Service Worker e com ele temos a possibilidade de implementar Push Notifications, que são emitidas mesmo se o seu navegador estiver fechado. Neste vídeo, Andrew Rosário vai mostrar como podemos emitir notificações com diversas personalizações, visando elevar o engajamento do usuário.',
    url: 'https://www.youtube.com/embed/rBCO6czV3VA'
  },
  {
    title: 'Padrões de Desenvolvimento em Camadas no Angular',
    id: 'angular-layers',
    description:
      'Arquitetura de uma Aplicação Angular utilizando Padrões e subdividindo-a em três camadas: Principal, Abstração e Apresentação. A talk aborda práticas e padrões ao desenvolver uma Aplicação Angular de forma escalável.',
    url: 'https://www.youtube.com/embed/oLNmSd6yaWw'
  }
];
