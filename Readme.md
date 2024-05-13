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
	* http://localhost:5173/
	* git commit


	
*- backend: port = 8000; GET POST
	*- ```cd backend```
	*- ```npm i express```
	*- .gitignore
	*- ```node index```

## Задание итогового проекта
* Init проекта
* Commit все исходники проекта
* Push в GitHub

## Удовлетворительный результат
* Dockerfile в папке frontend
* Dockerfile в папке backend
* В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов

## Измеримый результат
* Зайти на git.com/your_name/your_project
* Clone к себе на компьютер
* Запустить команду docker-compose up
* Увидеть в браузере рабочее приложение

## Хороший результат
* Dockerfile в папке frontend
* Dockerfile в папке backend
* В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов
+ Данное приложение размещено в интернете

## Измеримый результат
* Зайти на git.com/your_name/your_project
* Clone к себе на компьютер
* Запустить команду docker-compose up
* Увидеть в браузере рабочее приложение
* Зайти на your_project.com и увидеть работающее приложение

## Отличный результат
* Dockerfile в папке frontend
* Dockerfile в папке backend
* В корневой папке должен быть файл docker-compose.yml, создающий контейнеры на основе этих образов
+ Проект должен быть развернут внутри Yandex.Cloud обязательно через Docker
+ Образ каждого из приложений должен быть выложен на docker hub

## Измеримый результат
* Зайти на git.com/your_name/your_project
* Clone к себе на компьютер
* Запустить команду docker-compose up
* Увидеть в браузере рабочее приложение
* Зайти на your_project.com и увидеть работающее приложение
* Увидеть ваш личный кабинет Yandex.Cloud с объяснением как оно запущено и какие действия были произведены для выполнения задания