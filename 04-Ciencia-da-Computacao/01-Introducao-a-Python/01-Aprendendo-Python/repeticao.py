restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# for

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Compreensão de lista (list comprehension)

# 1)
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]

print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# 2)
names_list = ["Duda", "Rafa", "Cris", "Yuri"]
new_names_list = [name for name in names_list if "a" in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a"
# nele, o adiciona à variável "name", e então gera nossa nova lista
# "new_names_list"
print(new_names_list)

# 3)
quadrados = [x * x for x in range(11)]
print(quadrados)

# while

# fibonacci
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# enumerate

languages = ["Python", "Java", "JavaScript"]

# 1)

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# 2)

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
