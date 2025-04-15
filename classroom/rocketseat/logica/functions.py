def olaMundo():
    print("Olá, Mundo!")
olaMundo()

def olaPessoa(nome):
    print(f'Olá, {nome}')
olaPessoa('Carlos')

def dobro(numero):
    return numero * 2
print(dobro(6))

def multiplicaDoisNumeros(a, b):
    return a * b
print(multiplicaDoisNumeros(3, 5))

x = 5 # variavel global

def soma():
    x = 10 # variavel local 
    print(x)
    return x + 1
soma()
print(x)