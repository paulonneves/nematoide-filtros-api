from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI


def set_cors_config(app: FastAPI):
    """
    Configura a política de Cors para atender requisições internas.
    :param app: Objeto FastAPI construtor da API.
    :return: Adiciona parâmetros de CORSMiddleware a configuração de middleware da API.
    """
    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
