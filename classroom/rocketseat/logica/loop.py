soma = 0
n = 1

print("inicio")

# while n <= 10: while é comumente usado para quando n se sabe quantas vezes seré necessário repetir
#     soma = soma + n
#     n = n + 1
    # print(f'Soma: {soma}') apenas para lembrar de strings formatadas em python
    # print(f'n: {n}')

# diferentes formas de for
for index in range(1, 11):
    soma = soma + n
    n = n + 1

for index in range(1, 11):
    soma = soma + index

for index in range(1, 11):
    soma += index

print(f'A soma dos numeros de 1 a 10 é: {soma}')

print("fim")
