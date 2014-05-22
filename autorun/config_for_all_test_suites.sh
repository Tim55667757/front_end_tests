#!/bin/bash
# В данном файле задаются переменные, рабочие каталоги и файлы для всех тест-сьютов
#
# Переключение режима отладки при запуске тест-сьюта (off - отладка выключена, on - включена)
export selDebug=on
# Базовый URL для тестируемого проекта
export selStartURL1=http://arm-1/
export selStartURL2=http://arm-2/
export selStartURL3=http://arm-3/
# Путь к файлу Selenium-server
export selServer=$DIRNAME/selenium-server-standalone-2.25.0.jar
# Пути к файлам с тест-сьютами для запуска различных типов тестов
export selSuiteFile1=$DIRNAME/../projectname_Test_suite_CRUD.html
export selSuiteFile2=$DIRNAME/../projectname_Test_suite_Regression.html
export selSuiteFile3=$DIRNAME/../projectname_Test_suite_Positive.html
export selSuiteFile4=$DIRNAME/../projectname_Test_suite_Negative.html
export selSuiteFile5=$DIRNAME/../projectname_Test_suite_End_to_end.html
export selSuiteFile6=$DIRNAME/../projectnameTest_suite_ARM_1.html
export selSuiteFile7=$DIRNAME/../projectname_Test_suite_ARM_2.html
export selSuiteFile8=$DIRNAME/../projectname_Test_suite_ARM_3.html
# Путь к файлу-результату, в который скидывается лог работы Selenium
export selResultFile=../log/testResult.html
# Путь к файлу с отладочной информацией, в который скидывается лог, если параметр selDebug=on
export selDebugFile=../log/selDebug.txt
# Строка браузера или соответствующая переменная окружения
export selBrowserString=*firefox
# Путь к профилю Мозиллы
export ffProfile=$DIRNAME/ff_profile/
# Java-Script файл с расширениями функционала Selenium (с названием user-extensions.js)
export selExtensions=$DIRNAME/../ext/user-extensions.js
# Номер порта для сервера Selenium (по умолчанию 4444)
export selPort=4444
# Таймаут в миллисекундах для команд Selenium (по умолчанию 50000)
export selTimeout=250000
# Обязательный параметр для виртуального дисплея Xvfb
export DISPLAY=:1