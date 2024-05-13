> Задание в "2024.05.02_06.06_classwork" 1:29:11

* Развернуть приложение при помощи Docker, что бы backend и frontend между собой общались

## Выполнение
* Unpack 'Exercise.zip' in folder with project
	* Git init
* Working with frontend path of project (vue.js)
	* Did ```npm create vue@latest``` with frontend’ name of project
	* Copy all exercise frontend files without 'node_modules' folder
	* ```npm i```
	* ```npm run dev``` for testing frontend
	* ``` http://localhost:5173/```
	* git commit
* Working with backend path of project (port = 8000; GET POST)
	* ```npm init -y```
	* ```npm i express```
	* Did file '.gitignore' for ignored 'node_modules' folder
	* ```node index.js``` for testing backend
	* git commit
* Test local project
	* Run frontend and backend
	* ``` http://localhost:5173/```
	* Test
* Check bad answer in backend 'index.js'
	* git commit
* Add Docker
	* git commit

## Задание итогового проекта
+ [x] Init проекта
+ [x] Commit все исходники проекта
+ [x] Push в GitHub

## Удовлетворительный результат
+ [x] Dockerfile в папке frontend
+ [x] Dockerfile в папке backend
+ [x] В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов

## Измеримый результат
+ [x] Зайти на https://github.com/andymedtech/2024.05.13_06.07_coursework
+ [x] Clone к себе на компьютер
+ [x] Запустить команду docker-compose up
+ [ ] Увидеть в браузере рабочее приложение

## Хороший результат
- [x] Dockerfile в папке frontend
- [x] Dockerfile в папке backend
- [x] В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов
+ [ ] Данное приложение размещено в интернете

## Измеримый результат
- [x] Зайти на https://github.com/andymedtech/2024.05.13_06.07_coursework
- [x] Clone к себе на компьютер
- [x] Запустить команду docker-compose up
+ [ ] Увидеть в браузере рабочее приложение
+ [ ] Зайти на your_project.com и увидеть работающее приложение

## Отличный результат
- [x] Dockerfile в папке frontend
- [x] Dockerfile в папке backend
- [x] В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов
+ [ ] Проект должен быть развернут внутри Yandex.Cloud обязательно через Docker
+ [ ] Образ каждого из приложений должен быть выложен на docker hub

## Измеримый результат
- [x] Зайти на https://github.com/andymedtech/2024.05.13_06.07_coursework
- [x] Clone к себе на компьютер
- [x] Запустить команду docker-compose up
- [ ] Увидеть в браузере рабочее приложение
- [ ] Зайти на your_project.com и увидеть работающее приложение
+ [ ] Увидеть ваш личный кабинет Yandex.Cloud с объяснением как оно запущено и какие действия были произведены для выполнения задания