tabuleiro = [
             [' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']
]

jogador = 'X'

def exibeTabuleiro():
    for linha in tabuleiro:
        print('|'.join(linha))
        print("-" * 5)

    # for linha in tabuleiro:
    #     print(f'{linha[0]} | {linha[1]} | {linha[2]}')
    #     print("---------") outra forma de fazer

def jogada(linha, coluna):
    # global jogador  funciona mas não é recomendado
    if (
        linha < 0 or linha > 2 or
        coluna < 0 or coluna > 2 or
        tabuleiro[linha][coluna] != ' '
    ):
        print("Jogada inválida!")
        return jogador
    tabuleiro[linha][coluna] = jogador
    # if jogador == 'X':
    #     return 'O'
    # else:
    #     return 'X'
    return 'O' if jogador == 'X' else 'X'

while True:
    print(f'Jogador da vez: {jogador}')
    try:
        linha = int(input("Digite a linha: "))
        coluna = int(input("Digite a coluna: "))
        jogador = jogada(linha, coluna)
    except (ValueError, IndexError):
        print("Digite valores numéricos entre 0 e 2")
    exibeTabuleiro()