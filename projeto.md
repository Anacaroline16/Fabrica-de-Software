<img src='/img/logo.png' alt='logo da empresa' width='50px' heidth='50px'/>

# *FIBONACCI MANAGEMENT SYSTEM*

# PROJETO DE SOFTWARE

## *Stakeholders*
|NOME|CARGO|E-MAIL|
|:---|:---|:---|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|


# Sumário

* [RESUMO DO PROJETO](#resumo-do-projeto)
* [INTRODUÇÃO](#introdução)
  * [PROPÓSITO DESTE DOCUMENTO](#propósito-deste-documento)
* [DESCRIÇÃO GERAL](#descrição-geral)
  * [USUÁRIOS DO SISTEMA](#usuários-do-sistema)
  * [ABRANGÊNCIA E SISTEMAS SIMILARES](#abrangência-e-sistemas-similares)
  * [SUPOSIÇÕES E DEPENDÊNCIAS](#suposições-e-dependências)
* [METODOLOGIA ADOTADA NO DESENVOLVIMENTO](#metodologia-adotada-no-desenvolvimento)
* [REQUISITOS DO SOFTWARE](#requisitos-do-software)
  * [REQUISITOS FUNCIONAIS](#requisitos-funcionais)
  * [REQUISITOS NÃO FUNCIONAIS](#requisitos-não-funcionais)
* [PROTOTIPAGEM](#prototipagem)
* [DIAGRAMA DE CASOS DE USO](#diagrama-de-casos-de-uso)
* [DIAGRAMA DE CLASSES](/img/Class%20Diagram%20Academia.jpg)
* [REFERÊNCIAS](#referências)


# RESUMO DO PROJETO
| ITEM | DESCRIÇÃO|
|:---|:---|
| NOME DO PROJETO | Fibonacci Management System |
| GERENTE DO PROJETO | Wagner Ferreira |
| PRINCIPAL OBJETIVO | Auxiliar o sistema de ensino através de ferramentas síncronas e assíncronas que serão usadas por funcionários e alunos da instituição de ensino. |
| BENEFÍCIOS ESPERADOS |* Melhor acompanhamento pedagógico;<br/>* Redução da evasão escolar;<br/>* Aumento do número de matrículas;<br/>* Redução da inadimplência escolar;<br/>* Automatização dos processos financeiross|
| INÍCIO E TÉRMINO PREVISTOS | 14/03/2023 - 07/12/2023 |

[ [INÍCIO](#fibonacci-management-system) ]

# INTRODUÇÃO

## PROPÓSITO DESTE DOCUMENTO

Este documento destina-se aos clientes, engenheiros, gerentes e demais stakeholders deste projeto. O propósito deste documento é apresentar a descrição dos serviços e funções que o sistema **_Fibonacci Management System_** deve prover, bem como as suas restrições de operação e propriedades gerais, a fim de ilustrar uma descrição detalhada do sistema para um auxílio durante as etapas de análise, projeto e testes. O documento especifica todos os requisitos funcionais e não funcionais do sistema e contém a prototipagem, além de diagramas UML que foram construídos levando-se em conta as funcionalidades identificadas durante a fase de concepção do sistema.

[ [INÍCIO](#fibonacci-management-system) ]

# DESCRIÇÃO GERAL

## Usuários do sistema
|USUÁRIO|DESCRIÇÃO|
|:---|:---|
|**Usuário Padrão:**|Realizam as tarefas comuns a todos os usuários, tal como: logar e enviar mensagens. Todos demais usuários estendem as funcionalidades do UsuárioPadrão|
|**Administrador:**|Responsáveis pelo gerenciamento das entidades pertinentes à instituição e pela alocação de outros administradores|
|**Coordenador:**|Responsáveis pela aprovação de disciplinas, turmas e matrículas realizadas pela secretaria do curso, além de ser responsável pela alocação da secretaria|
|**Secretaria:**|Responsáveis pelo cadastramento de disciplinas e turmas, pela alocação de professores e monitores de um curso e matrículas dos alunos|
|**Professor:**|Responsáveis pela criação do programa da disciplina através de ferramentas de planejamento e criação de atividades|
|**Aluno:**|Seguem o programa da disciplina criada pelo professor, tendo como apoio ferramentas de comunicação, tal como: chat e fórum|


[ [INÍCIO](#fibonacci-management-system) ]

# Metodologia Adotada no Desenvolvimento


[ [INÍCIO](#fibonacci-management-system) ]

# Requisitos do Software

A especificação dos requisitos deste documento deve seguir as recomendações da norma IEEE Std-830-1998, levando em conta as recomentações do documento de [características dos requisitos](caracteristicas_requisitos.md).

## Requisitos Funcionais

A tabela a seguir contém a relação dos Requisitos Funcionais elicitados, com as colunas: identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
:---|:---|:---|
|RF-001 |Cadastrar clientes |O sistema permitirá que os usuários sejam cadastrados com informações pessoais como nome completo, data de nascimento, CPF, email, endereço, 
telefone para contato e restrições do cliente.|
|RF-002 | Cadastrar funcionários | O sistema permitirá que os funcionários sejam cadastrados com informações pessoais como nome completo, data de nascimento, CPF, email, endereço, telefone para contato, formação profissional |
|RF-003 | Cadastrar produtos | O sistema permitirá o cadastramento de produtos como nome, marca, peso, tabela nutricional e quantidade de estoque.|
|RF-004 | Vender os produtos | O sistema permitirá a venda de produtos como valores, validade, quantidade. |
|RF-005 | Cadastrar equipamentos |  O sistema permitirá o cadastramento de equipamentos disponíveis na academia como marcas, nomes, pesos e funcionalidades. |
|RF-007 | Registrar preços | O sistema disponibilizará os preços de produtos, planos e aulas exclusivas. |
|RF-008 | Avaliar sua I.M.C| O sistema avaliará seu índice de massa corporal com peso, altura e idade.|
|RF-009 | Atender suas dúvidas | O sistema disponibilizará um atendimento ao público com mensagens automáticas e com profissionais. |
|RF-010 | Informar horários | O sistema disponibilizará informações sobre horários de aulas e de abertura e fechamento de cada espaço da academia. |
|RF-011 | Agendar aulas experimentais | O sistema possibilitrá o agendamento de aulas experimentais somente 1 vez de forma gratuita. |
|RF-012 | Escolher plano | O sistema permitirá que o usuário escolha o plano que dejesa com valores e horários. |
|RF-013 | Cancelar o pedido | O sistema permitirá que o usuário cancele o pedido do produto. |
|RF-014 | Comprar aulas | O sistema permitirá que o usuário escolha os dias para ir em aulas específicas, de forma avulsa. |
|RF-015 | Fichar treinos | O sistema permitirá que o usuário acesse a ficha de treino pelo aplicativo depois de finalizada pelo instrutor, de forma presencial. |
|RF-016 | Notificar informações atualizadas |O sistema irá permitir que o usuário seja notificado a cada atualização, se permitido pelo usuário. |
|RF-017 | Cancelar plano | O sistema permitirá que o usuário cancele o plano. |
|RF-018 | Cadastrar fornecedores | O sistema possibilitará o cadastro de fornecedores como nome da empresa, email, telefone e CNPJ. |
|RF-019 | Avaliar possíveis parceiros | O sistema possibilitará a avaliação de possíveis parceiros para divulgação e marketing. |
|RF-020 | Trocar/renovar planos | O sistema possibilitará a troca ou a renovação dos planos para o usuário.|



## Requisitos Não Funcionais
A tabela a seguir contém a relação com os Requisitos Não Funcionais identificados, contendo identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
|:---|:---|:---|
|RNF-001 |Nome do Requisito |Descreva aqui as informações sobre o requisito |
|RNF-002 |Nome do Requisito |Descreva aqui as informações sobre o segundo requisito |


[ [INÍCIO](#fibonacci-management-system) ]


# Prototipagem

[Protótipo criado no FIGMA em 2022 por estudantes](https://www.figma.com/file/iNC7wyX9zP7Kmn3BhiCFGf/Fals6Hood-(Prot%C3%B3tipo-criado-por-estudantes-em-2022)?node-id=0%3A1&t=B16hgeZP3MSURCCa-1)

![Imagem do Protótipo](/img/home.png)

[ [INÍCIO](#fibonacci-management-system) ]


# Diagrama de Casos de Uso


![Diagrama de Casos de Uso](/img/use_case_placas.png)

[ [INÍCIO](#fibonacci-management-system) ]

# Diagrama de Classes

[ [INÍCIO](#fibonacci-management-system) ]


# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
