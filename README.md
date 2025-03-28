Profile Mapping is made easy by using the MERN stack application profileMapper-main.

#Commands to containerize application:
#By using play with docker
1)git clone ssh link
2)check once for dockercompose.yaml file name if not correct then make it correct:
mv old file name new file name (keep docker-compose as file name).
3) docker-compose up --build -d
4) To check containers are running or not:
docker ps -a
5)To check logs generated with containers:
docker-compose logs -f
6)To To stop containers:
docker-compose down
7)To remove everything (including volumes):
docker-compose down -v
