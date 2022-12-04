## Hard Skills Desenvolvidas

### Aprendendo Python

- [X] _Utilizar o terminal interativo do Python_
- [X] _Entender e utilizar estruturas condicionais (se, senão se, senão) e de repetição (enquanto, para)_
- [X] _Criar funções para reutilização de código_
- [X] _Escrever seus próprios módulos e importá-los em outros códigos_

#### Resumo

Python no Docker:
````bash
# Baixe a última versão do python
docker pull python

# Baixe uma versão específica
docker pull python:tag

# ---
docker run -it --rm python:tag
````

Dockerfile:
````dockerfile
FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./seu-arquivo.py" ]
````

````bash
docker build -t my-python-app .
docker run -it --rm --name my-running-app my-python-app
````

Outra forma:
````bash
docker run -it --rm --name nome-do-seu-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp python:3 python seu-arquivo.py
# -v "$PWD":/usr/src/myapp - monta o diretório atual para dentro do contêiner
# -w /usr/src/myapp - muda o WORKDIR para executar o comando no diretório recém montado.
````