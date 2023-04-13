import numpy as np
import cv2
from skimage.filters import roberts, sobel, scharr, prewitt


accepted_filters = ['blur', 'canny', 'blur_canny', 'lighten', 'sobel', 'prewitt', 'roberts', 'scharr']


def accepted_image_filters(filtername: str) -> bool:
    accepted_condition = (filtername in accepted_filters)
    return accepted_condition


def lighten(image, weight: int = 40):
    one_shape_transform = np.ones(image.shape, dtype=np.uint8) * weight
    lighten_add = cv2.add(image, one_shape_transform)
    return lighten_add


def blur_canny(image):
    light_image = lighten(image)
    blur_image = cv2.blur(light_image, (2, 2))
    canny_image = cv2.Canny(blur_image, 50, 240)
    return canny_image


def canny(image):
    return cv2.Canny(image, 100, 200)


def blur(image):
    return cv2.blur(image, (100, 200))


def transform_imagefilter(contents: bytes, filtername: str, **kwargs):
    """
  :param contents: arquivo em bytes recebido via post
  :param filtername: nome do filtro que será aplicado na imagem
  :return: numpy.ndarray que foi aplicado um dos filtros do skit-image
  """
    ski_filters = {'sobel': sobel, 'roberts': roberts, 'scharr': scharr, 'prewitt': prewitt,
                   'lighten': lighten, 'blur': blur, 'canny': canny, "blur_canny": blur_canny}
    image_arr = np.frombuffer(contents, dtype=np.uint8)
    image = cv2.imdecode(image_arr, cv2.IMREAD_GRAYSCALE)
    t_image = ski_filters[filtername](image)
    image_obj = ski_filters[filtername](image, **kwargs)
    return image_obj
