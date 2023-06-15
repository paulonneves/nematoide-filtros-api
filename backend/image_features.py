import numpy as np
import cv2
from skimage.filters import roberts, sobel, scharr, prewitt


# Variável que lista o filtros aceitos e que serão atendidos nas requisições.
accepted_filters = ['blur', 'canny', 'blur_canny',
                    'lighten', 'sobel', 'prewitt', 'roberts', 'scharr']


def preprocessing(image):
    """
    :param image: Objeto imagem cv2.
    :return: Imagem com todos os filtros do processamento aplicados.
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.blur(gray, (5, 10))
    return blur


def accepted_image_filters(filtername: str) -> bool:
    """
    Verifica se o filtro inserido atende a lista de filtros disponíveis.
    :param filtername: Filtro recebido como parâmetro de texto.
    :return: Condição booleana que informa o resultado da verificação do filtro.
    """
    accepted_condition = (filtername in accepted_filters)
    return accepted_condition


def lighten(image, weight: int = 40):
    """
    Função de filtro que aplica clareamento (Branco como cor dominante) na imagem.
    :param image: Matriz numpy que representa uma imagem.
    :param weight: Atributo que indica o grau de aplicação do filtro Lighten.
    :return: Matriz numpy com valores transformados, ou seja,
    imagem que recebeu a aplicação do filtro.
    """
    one_shape_transform = np.ones(image.shape, dtype=np.uint8) * weight
    lighten_add = cv2.add(image, one_shape_transform)
    return lighten_add


def blur_canny(image):
    """
    Função de filtro que aplica os efeitos de Canny (que suaviza a imagem e destaca as bordas)
    e Blur (borrar a imagem) na imagem.
    :param image: Matriz numpy que representa uma imagem.
    :return: Matriz numpy com valores transformados, ou seja,
    imagem que recebeu a aplicação do filtro.
    """
    light_image = lighten(image)
    blur_image = cv2.blur(light_image, (2, 2))
    canny_image = cv2.Canny(blur_image, 50, 240)
    return canny_image


def canny(image):
    """
    Função de filtro que aplica o efeito de Canny (que suaviza a imagem e destaca as bordas)
    na imagem.
    :param image: Matriz numpy que representa uma imagem.
    :return: Matriz numpy com valores transformados, ou seja,
    imagem que recebeu a aplicação do filtro.
    """
    return cv2.Canny(image, 100, 200)


def blur(image):
    """
    Função de filtro que aplica os efeitos de Blur (borrar a imagem)
    na imagem.
    :param image: Matriz numpy que representa uma imagem.
    :return: Matriz numpy com valores transformados, ou seja,
    imagem que recebeu a aplicação do filtro.
    """
    return cv2.blur(image, (100, 200))


def transform_imagefilter(contents: bytes, filtername: str, **kwargs):
    """
    :param contents: Arquivo em bytes recebido via post
    :param filtername: nome do filtro que será aplicado na imagem
    :return: numpy.ndarray que foi aplicado um dos filtros do skit-image
    """
    ski_filters = {'sobel': sobel, 'roberts': roberts, 'scharr': scharr, 'prewitt': prewitt,
                   'lighten': lighten, 'blur': blur, 'canny': canny, "blur_canny": blur_canny}
    image_arr = np.frombuffer(contents, dtype=np.uint8)
    image = cv2.imdecode(image_arr, cv2.IMREAD_GRAYSCALE)
    # image = preprocessing(image=image)
    t_image = ski_filters[filtername](image)
    image_obj = ski_filters[filtername](image, **kwargs)
    return image_obj
