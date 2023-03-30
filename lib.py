import numpy as np
import cv2
from skimage.io import imread
from skimage import img_as_float, img_as_ubyte
from skimage.feature import canny
from skimage.filters import roberts, sobel, scharr, prewitt


cv_filters = ['blur', 'canny', 'lighten']
ski_filters = ['sobel', 'prewitt', 'roberts', 'scharr']

def lighten(image, weight: int = 40):
    one_shape_transform = np.ones(image.shape, dtype=np.uint8) * weight
    lighten_add = cv2.add(image, one_shape_transform)
    return lighten_add


def blur_canny(image):
    light_image = lighten(image)
    blur_image = cv2.blur(light_image, (2, 2))
    canny_image = cv2.Canny(blur_image, 50, 240)
    return canny_image


def apply_skifilter(path_image: str, name_filter: str, **kwargs):
    """
  :param path_image: caminho da imagem localizada no drive
  :param name_filter: nome do filtro que será aplicado na imagem
  :return: numpy.ndarray que foi aplicado um dos filtros do skit-image
  """
    ski_filters = {'sobel': sobel, 'roberts': roberts, 'scharr': scharr, 'prewitt': prewitt}
    image = imread(path_image)

    if name_filter in ski_filters.keys():
        img_filtered = ski_filters[name_filter](image, **kwargs)
        img_filtered_as_ubytes = img_as_ubyte(img_filtered)
        return img_filtered_as_ubytes


def apply_cv2_filters(path_image: str, name_filter: str, **kwargs):
    """
  :param path_image: caminho da imagem localizada no drive
  :param name_filter: nome do filtro que será aplicado na imagem
  :return: numpy.ndarray que foi aplicado um dos filtros do opencv
  """
    cv2_filters = {'canny': canny, 'lighten': lighten, 'blur': cv2.blur}
    image = cv2.imread(path_image, cv2.IMREAD_GRAYSCALE)

    if name_filter in cv2_filters.keys():
        img_filtered = cv2_filters[name_filter](image, **kwargs)
        print(img_filtered)
        print(type(img_filtered))
        return img_filtered


def apply_filters(path_image: str, name_filter: str, **kwargs):
    if name_filter in cv_filters:
        return apply_cv2_filters(path_image, name_filter, **kwargs)
    elif name_filter in ski_filters:
        return apply_skifilter(path_image, name_filter, **kwargs)
