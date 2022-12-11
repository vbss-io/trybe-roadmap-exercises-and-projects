print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42

print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
print(
    "Maria", "João", "Miguel", "Ana", sep=", "
)  # saída: Maria, João, Miguel, Ana

print("Em duas ")
print("linhas.")

print("Na mesma", end=" ")
print("linha.")

x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 3 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse
# exemplo, duas casas decimais (.2f).
print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos
