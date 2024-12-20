Repositório criado para aprender sobre o codeigniter 3, que é um framework PHP. Neste repositório foquei em aprender os 
fundamentos do codeigniter, pois vou precisar usar esse framework em meu novo emprego. 

Sendo assim, como esse curso é um pouco antigo, não estou usando as melhores práticas de programação, como, por exemplo, 
código limpo, que passa bem longe desse repositório rsrsrs. Segui exatamente o que o curso mandou fazer.

Estou seguindo o curso https://www.udemy.com/course/codeigniter-php

*******************
Iniciando o projeto
*******************
- Copiar os arquivos .example da pasta application/config para a pasta application/config removendo o .example
- Configurar o arquivo database.php com as informações do banco de dados
- Gerar um md5 e adicionar ele no arquivo config.php na chave ***encryption_key***
- Rodar os comandos SQL do arquivo database.sql para criar as tabelas no banco de dados
- Acesso à área restrita = Usuário: admin Senha: 123456
- Configurar a URL base no arquivo util.js na cont ***BASE_URL***
- Criar pasta tmp na raiz do projeto e rodar o comando `chmod 777 tmp -R` para dar permissão de escrita
- Criar pasta public/images/courses e public/images/team do projeto e rodar o comando `chmod 777 tmp -R` para dar permissão de escrita em cada pasta
---
###################
What is CodeIgniter
###################

CodeIgniter is an Application Development Framework - a toolkit - for people
who build web sites using PHP. Its goal is to enable you to develop projects
much faster than you could if you were writing code from scratch, by providing
a rich set of libraries for commonly needed tasks, as well as a simple
interface and logical structure to access these libraries. CodeIgniter lets
you creatively focus on your project by minimizing the amount of code needed
for a given task.

*******************
Release Information
*******************

This repo contains in-development code for future releases. To download the
latest stable release please visit the `CodeIgniter Downloads
<https://codeigniter.com/download>`_ page.

**************************
Changelog and New Features
**************************

You can find a list of all changes for each release in the `user
guide change log <https://github.com/bcit-ci/CodeIgniter/blob/develop/user_guide_src/source/changelog.rst>`_.

*******************
Server Requirements
*******************

PHP version 5.6 or newer is recommended.

It should work on 5.3.7 as well, but we strongly advise you NOT to run
such old versions of PHP, because of potential security and performance
issues, as well as missing features.

************
Installation
************

Please see the `installation section <https://codeigniter.com/userguide3/installation/index.html>`_
of the CodeIgniter User Guide.

*******
License
*******

Please see the `license
agreement <https://github.com/bcit-ci/CodeIgniter/blob/develop/user_guide_src/source/license.rst>`_.

*********
Resources
*********

-  `User Guide <https://codeigniter.com/docs>`_
-  `Contributing Guide <https://github.com/bcit-ci/CodeIgniter/blob/develop/contributing.md>`_
-  `Language File Translations <https://github.com/bcit-ci/codeigniter3-translations>`_
-  `Community Forums <http://forum.codeigniter.com/>`_
-  `Community Wiki <https://github.com/bcit-ci/CodeIgniter/wiki>`_
-  `Community Slack Channel <https://codeigniterchat.slack.com>`_

Report security issues to our `Security Panel <mailto:security@codeigniter.com>`_
or via our `page on HackerOne <https://hackerone.com/codeigniter>`_, thank you.

***************
Acknowledgement
***************

The CodeIgniter team would like to thank EllisLab, all the
contributors to the CodeIgniter project and you, the CodeIgniter user.
