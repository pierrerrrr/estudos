# MATCH CASE

comando = input("Digite um comando: ")

match comando:
    case 'tempo' | 'clima':
        print("Tá calor demais! 🥵")
    case 'saldo':
        print("Seu saldo é de R$00,00. Precisando trabalhar mais!")
    case _:
        print("Não entendi seu comando.")