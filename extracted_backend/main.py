# FastAPI backend entry point
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'Pulse Auto Market Backend Running'}
