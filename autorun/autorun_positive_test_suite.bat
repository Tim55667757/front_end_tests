:: AUTHOR: Т.М. Гильмуллин
:: TEST PRIORITY: 0
:: SPEC ID: -
:: OVERVIEW: Данный .bat-файл запускает тест-сьют projectname_Test_suite_Positive.html содержащий позитивные тест-кейсы.
:: IDEA: Тест-кейсы, вызываемые в projectname_Test_suite_Positive.html должны быть завершены успешно.
:: SETUP&INFO: Существует файл projectname_Test_suite_Positive.html оформленный по правилам Selenium. Необходимо верно настроить переменные для рабочих каталогов и файлов.

@echo off

:: ----- Настраиваем переменные окружения, рабочие каталоги и файлы -----
if NOT EXIST ..\log (
	md ..\log
)
call config_for_all_test_suites.bat

:: ----- Запускаем сервер Selenium и тест-сьют на исполнение с указанными параметрами -----
if %selDebug%==on (
	java -jar %selServer% -debug -htmlSuite %selBrowserString% %selStartURL1% %selSuiteFile3% %selResultFile% -port %selPort% -timeout %selTimeout% -userExtensions %selExtensions% -firefoxProfileTemplate %ffProfile% > %selDebugFile%
)
if %selDebug%==off (
	java -jar %selServer% -htmlSuite %selBrowserString% %selStartURL1% %selSuiteFile3% %selResultFile% -port %selPort% -timeout %selTimeout% -userExtensions %selExtensions% -firefoxProfileTemplate %ffProfile%
)