from fastapi import FastAPI, File, UploadFile
from fastapi.responses import Response, PlainTextResponse
from io import BytesIO
import base64
from PIL import Image
from skimage.util import img_as_ubyte
from file_utils import samples
from cors import set_cors_config
from image_features import transform_imagefilter, accepted_image_filters, accepted_filters


app = FastAPI()
set_cors_config(app=app)


@app.get('/listsample')
def get_list_samples():
    """
    Obtém a lista dos arquivos de imagens salvos no banco de dados. Para facilitar a consulta na rota /databaseimage.
    :return: Rota que mapeia a lista de títulos (PATH) das imagens na pasta de amostras.
    """
    return samples


@app.get('/listfilter')
def get_list_filters():
    """
    Obtém a lista dos filtros aceitos. Para facilitar a consulta na rota /databaseimage e /uploud.
    :return: Rota que mapeia a lista o filtros aceitos e que serão atendidos nas requisições.
    """
    return accepted_filters


@app.get('/databaseimage')
def get_database_image(filename: str, filtername: str = 'sobel',  base64_output: bool = False):
    """
    Método 'get' que recebe o nome do arquivo pretendido e o filtro desejado e procura na base de dados pelo arquivo.
    :param filename: Título (PATH) da imagem na pasta de amostras.
    :param filtername: Opção de filtro para ser aplicado na imagem.
    :param base64_output: Opção para retornar a imagem (formato de Bytes) ou o texto codificado (Base64).
    :return: Rota que dá acesso a recursos de imagem ou texto na base64 processado conforme o filtro.
    """
    if accepted_image_filters(filtername=filtername):
        try:
            if filename in samples:
                with open(f'data/samples/{filename}', 'rb') as file_io:
                    contents = file_io.read()
                    array_image = transform_imagefilter(contents=contents, filtername=filtername)

                    with BytesIO() as buffered:
                        pil_image = Image.fromarray(img_as_ubyte(array_image))
                        pil_image.save(buffered, 'JPEG')
                        bytes_data = buffered.getvalue()
                        if base64_output:
                            img_str = base64.b64encode(buffered.getvalue(), )
                            return PlainTextResponse(img_str)
                        return Response(bytes_data, media_type='image/jpeg')

        except Exception as e:
            print(e)
            return {"message": "There was an error uploading the file"}
    return {"message": f"There was an error with filtername {filtername} check"}


@app.post("/upload")
def upload(file: UploadFile = File(...), filtername: str = 'sobel', base64_output: bool = False):
    """
    Método 'post' que recebe uma imagem e o filtro desejado.
    :param file: Arquivo Bytes da imagem recebido através de um input File.
    :param filtername: Opção de filtro para ser aplicado na imagem.
    :param base64_output: Opção para retornar a imagem (formato de Bytes) ou o texto codificado (Base64).
    :return: Rota que dá acesso a recursos de imagem ou texto na base64 processado conforme o filtro.
    """
    if accepted_image_filters(filtername=filtername):
        try:
            contents = file.file.read()
            array_image = transform_imagefilter(contents=contents, filtername=filtername)

            with BytesIO() as buffered:
                pil_image = Image.fromarray(img_as_ubyte(array_image))
                pil_image.save(buffered, 'JPEG')
                bytes_data = buffered.getvalue()
                if base64_output:
                    img_str = base64.b64encode(buffered.getvalue(), )
                    return PlainTextResponse(img_str)
                return Response(bytes_data, media_type='image/jpeg')

        except Exception as e:
            print(e)
            return {"message": "There was an error uploading the file"}
        finally:
            file.file.close()

    return {"message": f"There was an error with filtername {filtername} check"}
