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
    tabuleiro[linha][coluna] = jogador
    if jogador == 'X':
        return 'O'
    else:
        return 'X'

jogador = jogada(1,1)
jogador = jogada(1,2)

exibeTabuleiro()