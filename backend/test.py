import os
import numpy as np
import cv2 as cv

def Processamento(pasta):
    # Função com todos os filtros do processamento
    img = cv.imread(pasta)
    blur = cv.blur(img, (100, 100)) 
    cv.imwrite('test.jpg', blur)
    return blur


file = 'data/samples/orange.jpg'


print(f'Aplicando filtro de processamento no arquivo: {file}')
Pro = Processamento(file)