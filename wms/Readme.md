###### Warehouse Management Software Built With React and Django

**Backend - Django**

1. Clone this repository
2. `git clone https://github.com/Nyamador/wms`
3. Create a virtual environment with virtualenv `virtual {your-virtual-environment-name}`
4. Activate your virtual environment , from your virtual environment root `.\Scripts\activate`
5. Go back to your project root where the `requirements.txt` lives
6. Install dependencies  `pip install -r requirements.txt`
7. `cd wms`
8. Run your migrations => `manage.py makemigrations` then `manage.py migrate`
9.  Run the project `python manage.py runserver`


**Frontend - Reaact**
1. cd  `wms-frontend`
2. If you prefer using `npm` -> Run `npm i` or `yarn add` for Yarn

**Redis - Caching**
1. Download Redis From The Official Website ( You need Redis > 3.x.x )
2. If you run windows download the Binary (Not Official) from this link [Redis Windows Binary 3.2.100](https://github-production-release-asset-2e65be.s3.amazonaws.com/3402186/bb47f4a2-3fac-11e6-9e71-9a4261699bd5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20200609%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200609T073851Z&X-Amz-Expires=300&X-Amz-Signature=46ff45abdcac77c3992179d4f5e4d8af73a988638f04fa93d5c4e40f456506fe&X-Amz-SignedHeaders=host&actor_id=48738520&repo_id=3402186&response-content-disposition=attachment%3B%20filename%3DRedis-x64-3.2.100.zip&response-content-type=application%2Foctet-stream)
3. If you want be able to run the Redis-Server with `redis-server` without having to open the \bin directory of the binary everytime, add it to your path. You should be able to start the server with `redis-server`.
4. To verify the server is running open another terminal window and run `redis-cli`, then enter `PING`. You should see `PONG` on your screen