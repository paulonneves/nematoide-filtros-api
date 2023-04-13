from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI


def set_cors_config(app: FastAPI):
    """
    Permite a Configuração de requisições de origens diferentes principalmente da mesma origem
    """
    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
