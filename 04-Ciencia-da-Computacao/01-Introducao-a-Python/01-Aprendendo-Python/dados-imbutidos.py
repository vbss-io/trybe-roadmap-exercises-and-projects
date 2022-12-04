# elementos são definidos separados por vírgula, envolvidos por colchetes
fruits = ["laranja", "maçã", "uva", "abacaxi"]

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

# acrescenta uma lista de frutas a lista original
fruits.extend(["pera", "melão", "kiwi"])

# retorna o índice onde a fruta está localizada, neste caso, 1
fruits.index("maçã")

fruits.sort()  # ordena a lista de frutas

trybe_course = ["Introdução", "Front-end", "Back-end"]

# 1)

trybe_course.append("Ciência da Computação")
print(trybe_course)

# 2)

trybe_course[0] = "Fundamentos"
print(trybe_course)

# Tuplas (tuple)

# elementos são definidos separados por vírgula, envolvidos por parênteses
user = ("Will", "Marcondes", 42)

user[0]  # acesso também por índices

# Conjuntos (set)

# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}

permissions.add("root")  # adiciona um novo elemento ao conjunto

# como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.add("member")

permissions.union({"user"})  # retorna um conjunto resultado da união

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# 3)

var = set()
var.add(42)

print(var)

# Conjuntos imutáveis (frozenset)

# assim como o set, qualquer estrutura iterável pode ser utilizada para criar
# um frozenset
permissions = frozenset(["member", "group"])

# novos conjuntos imutáveis podem ser criados à partir do original, mas o
# mesmo não pode ser modificado
permissions.union({"user"})

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# Dicionários (dict)

# elementos no formato "chave: valor" separados por vírgula, envolvidos por
# chaves
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}

# outro exemplo, dessa vez usando strings como chaves. As aspas são
# necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe`
# sejam variáveis.
people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
# dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
people_by_id.items()
# um conjunto é retornado com tuplas contendo chaves e valores


# Range (range)

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
