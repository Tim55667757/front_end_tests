������� ������������ ��������������� ��� ������.

������������� ����� (��� �����) ������� �� 7 ����, ����������� ������ �������������:
1 ����� - ��� ����� (0 - CRUD, 1 - Regression, 2 - Positive, 3 - Negative, 4 - End-to-end),
2 ����� - ���������� ������ ���������� (0 - �������� �����, 1 - 1-� ���, 2 - 2-� ��� � �.�.),
3, 4 ����� - ���������� ������ (00 - �������� ����� (���� � ���-� ��� ���������), 10 - 1-� ����������, 20 - 2-� ���������� � �.�.),
5, 6, 7 ����� - ����� �����, 7-� ����� ��������, �� ��������� 0 (010 - 1-� ����, ..., 100 - 10-� ���� � �.�.).
������������� ����� ������� ����������, ����� ���� ������������� (_name - �������� ���������� ����������).

����������� ��������������� ��� ����������:


CRUD-����� (������� �������������: projectname_Test_suite_CRUD)

	1-� ���

0_1_00_000_Enter_system_1			���������� �����������
		1-� ����������
0_1_10_010_SubSystem1_Test1			���������� 1, ���� 1
0_1_10_020_SubSystem1_Test2			���������� 1, ���� 2
0_1_10_030_SubSystem1_Test3			���������� 1, ���� 3
...
		2-� ����������
0_1_20_010_SubSystem2_Test1			���������� 2, ���� 1
0_1_20_020_SubSystem2_Test2			���������� 2, ���� 2
0_1_20_030_SubSystem2_Test3			���������� 2, ���� 3
...

	2-� ���

0_2_00_000_Enter_system_2			���������� �����������
		1-� ����������
0_2_10_010_SubSystem1_Test1			���������� 1, ���� 1
0_2_10_020_SubSystem1_Test2			���������� 1, ���� 2
0_2_10_030_SubSystem1_Test3			���������� 1, ���� 3
...
		2-� ����������
0_2_20_010_SubSystem2_Test1			���������� 2, ���� 1
0_2_20_020_SubSystem2_Test2			���������� 2, ���� 2
0_2_20_030_SubSystem2_Test3			���������� 2, ���� 3
...


������������� ����� (������� �������������: projectname_Test_suite_Regression)

1_1_00_010_ARM_1_Regression			��� 1
1_2_00_010_ARM_2_Regression			��� 2
1_3_00_010_ARM_3_Regression			��� 3


���������� ����� (������� �������������: projectname_Test_suite_Positive)

2_1_00_010_ARM_1_Positive			��� 1
2_2_00_010_ARM_2_Positive			��� 2
2_3_00_010_ARM_3_Positive			��� 3


���������� ����� (������� �������������: projectname_Test_suite_Negative)

3_1_00_010_ARM_1_Negative			��� 1
3_2_00_010_ARM_2_Negative			��� 2
3_3_00_010_ARM_3_Negative			��� 3


End-to-end �������� (������� �������������: projectname_Test_suite_End_to_end)

4_1_00_010_ARM_1_End_to_end			��� 1
4_2_00_010_ARM_2_End_to_end			��� 2
4_3_00_010_ARM_3_End_to_end			��� 3


��������� �������� ������ ��� ���������� ������� smoke-������:

projectname_Test_suite_ARM_1 			��� ���� ������ ��� �������� ��� 1
projectname_Test_suite_ARM_2			��� ���� ������ ��� �������� ��� 2
projectname_Test_suite_ARM_3			��� ���� ������ ��� �������� ��� 3

projectname_Test_suite_CRUD			��� CRUD-�����
projectname_Test_suite_Regression		��� ������������� �����
projectname_Test_suite_Positive			��� ���������� �����
projectname_Test_suite_Negative			��� ���������� �����
projectname_Test_suite_End_to_end		��� end-to-end ��������