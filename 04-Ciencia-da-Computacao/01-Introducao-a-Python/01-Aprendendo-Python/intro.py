# 1) 7 operações básicas
a = 10
b = 5

print(a + b)  # soma
print(a - b)  # subtração
print(a * b)  # multiplicação
print(a / b)  # divisão
print(a % b)  # resto da divisão
print(a**b)  # potência
print(a // b)  # divisão inteira

# 2) Minutos e segundos em 6 horas

hours = 6

minutes = hours * 60
seconds = minutes * 60

print("Em", hours, "horas temos", minutes, "minutos e", seconds, "segundos.")

# 3) Preço livro = R$ 24,20, com desconto de 40%, transporte primeiro
# livro = R$ 3,00, transporte livro adicional = R$ 0,75.
# Qual o custo total para 60 cópias?

books = 60
price = 24.20 * 0.6
transport = 3 + (books - 1) * 0.75
cost = books * price + transport

print("O custo total para", books, "livros é de R$", cost)

# type corresponde ao typeof do JavaScript
