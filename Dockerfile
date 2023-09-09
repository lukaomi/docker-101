FROM python:3

WORKDIR /app

COPY /app /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 80

ENV NAME=docker-101

CMD ["python", "run.py"]