FROM python:3.8-alpine3.10

WORKDIR /code

COPY requirements.txt /code


RUN pip install -r requirements.txt

COPY . /code

RUN python manage.py makemigrations && python manage.py migrate

EXPOSE 8000

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]