:: В данном файле задаются переменные, рабочие каталоги и файлы для всех тест-сьютов

:: Переключение режима отладки при запуске тест-сьюта (off - отладка выключена, on - включена)
set selDebug=on
:: Базовый URL для тестируемого проекта
set selStartURL1=http://arm-1/
set selStartURL2=http://arm-2/
set selStartURL3=http://arm-3/
:: Путь к файлу Selenium-server
set selServer=..\autorun\selenium-server-standalone-2.25.0.jar
:: Пути к файлам с тест-сьютами для запуска различных типов тестов
set selSuiteFile1=..\projectname_Test_suite_CRUD.html
set selSuiteFile2=..\projectname_Test_suite_Regression.html
set selSuiteFile3=..\projectname_Test_suite_Positive.html
set selSuiteFile4=..\projectname_Test_suite_Negative.html
set selSuiteFile5=..\projectname_Test_suite_End_to_end.html
set selSuiteFile6=..\projectname_Test_suite_ARM_1.html
set selSuiteFile7=..\projectname_Test_suite_ARM_2.html
set selSuiteFile8=..\projectname_Test_suite_ARM_3.html
:: Путь к файлу-результату, в который скидывается лог работы Selenium
set selResultFile=..\log\testResult.html
:: Путь к файлу с отладочной информацией, в который скидывается лог, если параметр selDebug=on
set selDebugFile=..\log\selDebug.txt
:: Строка браузера или соответствующая переменная окружения
set selBrowserString=*firefox
:: Путь к профилю Мозиллы
set ffProfile=..\autorun\ff_profile
:: Java-Script файл с расширениями функционала Selenium (с названием user-extensions.js)
set selExtensions=..\ext\user-extensions.js
:: Номер порта для сервера Selenium (по умолчанию 4444)
set selPort=4444
:: Таймаут в миллисекундах для команд Selenium (по умолчанию 50000)
set selTimeout=250000
