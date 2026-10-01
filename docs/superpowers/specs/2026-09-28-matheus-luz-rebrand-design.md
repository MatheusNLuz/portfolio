# Rebranding da Matheus Luz e redesenho do portfólio

**Status:** Proposta para revisão
**Data:** 2026-09-28
**Branch de trabalho:** `codex/rebrand-matheus-luz`

## Objetivo

Recriar o portfólio Matheus Luz como um estúdio pessoal de tecnologia com identidade própria, apresentando automação, software sob medida e produtos SaaS sob uma única marca. A página deve ser acessível e convidativa, remover perguntas financeiras e de porte empresarial do contato, e usar motion para tornar o trabalho visível.

## Público e mensagem

A página atende pessoas e empresas que querem melhorar um processo, criar um produto ou aprimorar a experiência dos seus clientes. As três formas de trabalho devem ficar fáceis de entender, sem exigir que alguém revele faturamento, orçamento, tamanho da equipe ou capacidade de investimento.

**Promessa da marca:** Tecnologia prática para o trabalho fluir melhor.
**Título proposto para o hero:** “Tecnologia para sua operação fluir.”
**Texto de apoio proposto:** “Automação, sistemas sob medida e produtos SaaS para simplificar o trabalho e abrir espaço para o que importa.”

A marca principal continua sendo **Matheus Luz**. O site organiza o trabalho em três frentes:

- **Automação e integrações:** conectar ferramentas e simplificar tarefas repetitivas.
- **Software sob medida:** criar soluções para necessidades que os produtos prontos não atendem.
- **Produtos SaaS:** apresentar produtos próprios, começando pelo case existente do PapinhIA.

Usar apenas dados e afirmações já presentes no projeto, a menos que Matheus confirme informações novas. Não inventar logos de clientes, métricas, depoimentos, garantias, preços ou prazos de entrega.

## Sistema visual

A direção aprovada é a de um estúdio pessoal claro, com tipografia nítida, espaço generoso e um diagrama de fluxo como elemento memorável. O visual deve parecer autoral, profissional e direto; não depender de painéis de vidro, auroras, gradientes, 3D decorativo ou aparência de dashboard SaaS escuro.

| Papel | Token | Valor |
| --- | --- | --- |
| Tinta | `--color-ink` | `#17212B` |
| Papel | `--color-paper` | `#F5F7F8` |
| Azul cobalto | `--color-cobalt` | `#2454D6` |
| Laranja sinalizador | `--color-signal` | `#E77A42` |
| Cinza azulado | `--color-blue-gray` | `#D8E1E7` |

Usar Space Grotesk nos títulos, Inter nos textos de leitura e JetBrains Mono em pequenos rótulos de processo. Definir escala tipográfica responsiva, foco visível para teclado, contraste adequado e alvos de toque com pelo menos 44 px. O laranja é um sinal funcional, sem competir com o azul.

### Elemento gráfico e monograma

Criar um monograma **ML** em SVG inline, original e legível em tamanhos pequenos, como favicon e navegação. Relacionar a geometria do monograma ao fluxo: um traço azul cobalto e um ponto final laranja. Manter o nome completo da marca como texto para garantir leitura. O monograma pode ser desenhado uma vez ao entrar na página, mas deve terminar estático e não repetir em loop.

### Composição da página

```text
MATHEUS LUZ     Automação   Sistemas   SaaS   Sobre       Conversar
------------------------------------------------------------------
TECNOLOGIA PRÁTICA
Tecnologia para sua operação fluir.      [PEDIDO]──[ORGANIZAÇÃO]
Automação, sistemas sob medida e          └────[AUTOMAÇÃO]──[TEMPO]
produtos SaaS para simplificar o trabalho.
[Me conte o que precisa] [Conheça o PapinhIA]
------------------------------------------------------------------
Escolha o próximo passo
[Automação e integrações] [Software sob medida] [Produtos SaaS]
------------------------------------------------------------------
Case PapinhIA → Como trabalho → Sobre Matheus → FAQ → Contato
```

Usar o mockup aprovado como referência de hierarquia e espaçamento. Construir a página com componentes responsivos e semânticos, navegação clara e âncoras coerentes no desktop e no celular. O link “Conheça o PapinhIA” deve apontar para o case existente, a menos que o projeto já tenha uma URL funcional configurada.

## Conteúdo e ordem da página

1. **Navegação:** monograma ML e nome Matheus Luz, âncoras para Automação, Sistemas, SaaS e Sobre, mais um CTA de conversa. O menu móvel deve funcionar com teclado.
2. **Hero:** promessa e explicação breve ao lado do diagrama de fluxo animado; CTA principal “Me conte o que precisa” e link secundário para o case PapinhIA.
3. **Três frentes:** cards em linguagem simples para automação, software sob medida e SaaS, cada um com um benefício claro e uma ação adequada.
4. **Trabalho em destaque:** PapinhIA como produto próprio, usando a descrição e a mídia existentes. Não tratar números demonstrativos do template como resultados comprovados.
5. **Processo de trabalho:** explicação concisa de descoberta, construção e entrega, limitada a compromissos já sustentados pelo conteúdo atual.
6. **Sobre Matheus:** apresentação pessoal e contato direto.
7. **FAQ:** responder dúvidas práticas sobre processo, propriedade e suporte somente quando o conteúdo atual apoiar a afirmação. Remover estimativas antecipadas e garantias não confirmadas.
8. **Contato:** um caminho simples para iniciar uma conversa no WhatsApp.
9. **Rodapé:** marca e monograma consistentes, navegação curta e os links de contato/redes já existentes.

## Fluxo de contato

Substituir o wizard de dez etapas e a estimativa automática por um resumo curto do projeto que abre o WhatsApp usando o número já configurado. O fluxo pode perguntar qual frente interessa, oferecer uma descrição curta opcional e incluir o nome também como campo opcional. Deve ser possível começar sem informar o nome da empresa.

Não perguntar faturamento, orçamento ou faixa de investimento, tamanho da empresa, quantidade de funcionários ou prazo. Remover o cálculo automático de complexidade, prazo e preço; a página não deve sugerir que é possível calcular um orçamento com as respostas atuais. Manter rótulos visíveis, validação clara, uso por teclado e uma ação final fácil de entender.

## Direção de motion

Usar GSAP e `@gsap/react` já instalados, junto com a configuração existente de ScrollTrigger. Não adicionar dependências de animação.

- Na entrada, revelar o texto do hero em sequência curta enquanto o traço do fluxo é desenhado uma vez e o ponto laranja percorre suas etapas. O diagrama deve continuar compreensível parado.
- Revelar os três cards de serviço com um stagger discreto ao entrarem na tela.
- Dar aos cards e botões feedback conciso de hover e foco, usando transform e opacity. A interação também deve funcionar em toque e teclado, sem depender de hover.
- Se o monograma for animado, desenhá-lo uma vez e deixá-lo estático.
- Usar `useGSAP` ou contexto por seção para limpar timelines e ScrollTriggers. Evitar loops decorativos contínuos, cenas grandes fixadas no scroll, animação de propriedades de layout e efeitos que atrasem o conteúdo principal.
- Respeitar `prefers-reduced-motion`: mostrar todo o conteúdo no estado final e pular o percurso do ponto, o stagger e as revelações no scroll.

## Restrições técnicas e responsividade

- Manter React 19, TypeScript, Vite, Tailwind CSS 4, ícones Lucide, GSAP e `@gsap/react`.
- Não adicionar dependências nem alterar o comportamento de hospedagem/base path.
- Manter mensagem e CTA utilizáveis em larguras 375 px, 768 px, 1024 px e 1440 px, sem rolagem horizontal.
- Restringir transforms aos elementos animados; evitar `will-change` global e trabalho desnecessário na main thread.
- Atualizar título, descrição, Open Graph e dados estruturados para descrever com precisão a marca pessoal de tecnologia.
- Preservar links e informações factuais do perfil, removendo afirmações antigas apenas quando estiverem claramente desatualizadas.

## Fora do escopo

- Construir ou modificar o PapinhIA.
- Criar backend, base de leads, integração de agenda, analytics ou novas dependências externas.
- Publicar ou fazer deploy do site.
- Prometer números de conversão, receita, desempenho ou premiações.

## Critérios de aceite

- O resultado visual segue o mockup claro aprovado e apresenta as três frentes sob a marca Matheus Luz.
- Um monograma ML próprio aparece na navegação e no rodapé e continua legível sem animação.
- O motion do hero e do scroll comunica o fluxo e a hierarquia, com limpeza correta e suporte a movimento reduzido.
- As perguntas financeiras e sobre tamanho da equipe, a calculadora de estimativas e o resumo de orçamento não aparecem mais no contato.
- É possível iniciar o WhatsApp sem informar porte ou dados financeiros da empresa.
- O texto usa informações existentes e não cria métricas ou resultados de clientes.
- Navegação em desktop/celular, foco por teclado, rótulos de formulário e interações de toque continuam funcionais.
- TypeScript e o build de produção concluem sem erros após a implementação.
