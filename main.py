from os import listdir, path
from fastapi import FastAPI
from fastapi.responses import FileResponse, StreamingResponse
from PIL import Image
from io import BytesIO

from lib import apply_filters

app = FastAPI()
a_path = 'C:\\Users\\ricar\\Documents\\code\\nametoide'
list_filters = ['', 'canny', 'lighten', 'sobel', 'prewitt', 'roberts', 'scharr']


@app.get("/images")
async def create_upload_file(nameimage, namefilter: str = ''):
    list_images = listdir('samples')
    if nameimage in list_images and namefilter in list_filters:
        r_path = path.join(a_path, f'samples\\{nameimage}')
        if namefilter == '':
            return FileResponse(r_path)
        img_filtered = apply_filters(r_path, namefilter)
        pil_image_filtered = Image.fromarray(img_filtered)
        buffer = BytesIO()
        pil_image_filtered.save(buffer, "JPEG")
        buffer.seek(0)
        return StreamingResponse(buffer, media_type="image/jpeg")
    return {'error': 'image file not found'}
