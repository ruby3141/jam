#Windows
## Windows에서 특정 프로그램을 항상 관리자 권한으로 실행하게 설정

1. regedit 실행
2. `HKCU\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers` (모든 유저에게 적용하고 싶다면 HKCU 대신 HKLM)
3. String Value(`REG_SZ`) 추가, 이름은 원하는 실행파일의 절대경로, data는 `^ RUNASADMIN`
