FROM python:3

WORKDIR /app

COPY . /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

ENV NAME="Todo list service"
ENV MODE="dev"

CMD ["python", "run.py"]