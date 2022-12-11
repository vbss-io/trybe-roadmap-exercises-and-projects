file = open("./arquivo.txt", mode="w")
# file open this path
# mode="w" is for write
# mode="r" is for read
# mode="a" is for append
# mode="r+" is for read and write
# mode="w+" is for write and read
# mode="a+" is for append and read
# ...

# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele
# já exista, sobrescrevendo o antigo.

# file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close()
