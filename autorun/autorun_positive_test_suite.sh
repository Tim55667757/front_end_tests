#!/bin/bash
# AUTHOR: Т.М. Гильмуллин
# TEST PRIORITY: 0
# SPEC ID: -
# OVERVIEW: Данный shell-скрипт запускает тест-сьют projectname_Test_suite_Positive.html содержащий позитивные тест-кейсы.
# IDEA: Тест-кейсы, вызываемые в projectname_Test_suite_Positive.html должны быть завершены успешно.
# SETUP&INFO: Существует файл projectname_Test_suite_Positive.html оформленный по правилам Selenium. Необходимо верно настроить переменные для рабочих каталогов и файлов.
#
# ----- Настраиваем переменные окружения, рабочие каталоги и файлы -----
DIRNAME=`dirname $0`
if [ ! -d ../log ]
then
	mkdir -v ../log
fi
source $DIRNAME/config_for_all_test_suites.sh
# ----- Доп. параметр для указания верного каталога для лог-файла -----
if [ x"$2" != x"" ]
then
	if [ ! -d $2 ]
	then
		mkdir -v $2
	fi
	export selResultFile=$2/testResult.html
fi
# ----- Запуск Xvfb сервера -----
if [ ! -f /tmp/.X1-lock ]
then
	echo "Starting Xvfb server"
	Xvfb :1 -fp /usr/share/X11/fonts/misc -screen 1 1600x1200x24 &
	sleep 10
else
	echo "Xvfb server is already running"
fi
# ----- Пауза для TeamCity, передаваемая параметром при необходимости -----
if [ x"$1" != x"" ]
then
        echo "Wait for $1 seconds..."
        sleep $1
fi
# ----- Запускаем сервер Selenium и тест-сьют на исполнение с указанными параметрами -----
echo "Starting test suite"
if [ x"$selDebug" != x"off" ]
then
	java -jar $selServer -debug -htmlSuite $selBrowserString $selStartURL1 $selSuiteFile3 $selResultFile -port $selPort -timeout $selTimeout -userExtensions $selExtensions -firefoxProfileTemplate $ffProfile
else
	java -jar $selServer -htmlSuite $selBrowserString $selStartURL1 $selSuiteFile3 $selResultFile -port $selPort -timeout $selTimeout -userExtensions $selExtensions -firefoxProfileTemplate $ffProfile
fi
