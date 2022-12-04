def soma(x, y):
    return print(x + y)


soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um
    # iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


# pode ser chamado com 2 parâmetros
concat("Carlos", "Cristina")  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"

# dict é uma função que já vem embutida no python
# cria um dicionário utilizando as chaves passadas
dict(nome="Felipe", sobrenome="Silva", idade=25)

# o número de parâmetros passados para a função pode variar
dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

# len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Coin", "Rodrigo", ", ")  # imprime Coin Rodrigo ,

# nomeando o terceiro parâmetro, agora temos a saída: Coin, Rodrigo
print("Coin", "Rodrigo", sep=", ")
