from fastapi import FastAPI, Request, status, HTTPException, BackgroundTasks
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import Union


app = FastAPI()
templates = Jinja2Templates(directory="templates")  # assuming your templates are in a directory named "templates"


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})  # assuming you have an index.html file in your templates directory


@app.get("/teste")
async def teste():
    if 1 == 1:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    return {"Hello": "World"}


@app.get("/items/{item_id}", status_code=status.HTTP_200_OK)
def read_item(item_id: int, q: Union[str, None] = None):

    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}


def write_notification(email: str, message=""):
    from datetime import datetime
    with open("log.txt", mode="a") as f:
        f.write(f"{datetime.now().strftime('%m/%d/%Y, %H:%M:%S')}: notification for {email} - {message}\n")


@app.get("/send-notification")
async def send_notification(background_tasks: BackgroundTasks):
    background_tasks.add_task(write_notification, email="chris.mar.silva@gmail.com", message="some notification")
    return {"message": "Notification sent in the background"}


if __name__ == '__main__':
    import uvicorn
    # , log_level="error",  workers=1 # "0.0.0.0" # "127.0.0.1" # localhost
    # uvicorn.run(app, host="0.0.0.0", port=8000)
    uvicorn.run(app="main:app", host="0.0.0.0", port=8000, reload=True)
