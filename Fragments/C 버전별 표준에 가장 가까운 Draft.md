#C
## C 버전별 표준에 가장 가까운 Draft
C 표준 문서는 "ISO/IEC 9899" 라는 문서 번호로 발행되고 있다. \
어찌 보면 당연하지만 표준화 끝난 문서는 공짜가 아닌데, 작성 시점에서 최신인 "ISO/IEC 9899:2024" 기준 PDF 한 개에 221 스위스 프랑(2025-12-01 환율 기준 약 403,962원)이다.

그래서 SO 같은 데서는 접근성이 떨어지는 표준 문서 대신 공개 Draft를 가지고 인용을 하는 경우가 많은데, 늘 이 버전에 맞는 최종 Draft가 뭐더라 하고 찾는 게 귀찮아서 만든 목록이다.

관련 정보는 Open Standards의 다음 문서에서 찾을 수 있다. 애초에 목록을 저기서 가져왔다.
https://www.open-std.org/JTC1/SC22/WG14/www/projects#9899

### ISO/IEC 9899:2024 (aka C23)
https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3220.pdf

공식적으로는 "C2Y", 그러니까 C23 다음 표준을 위한 시작 Draft라고 되어 있지만,
n3219 DIS(Draft International Standard, 최종 검토안. 당연히 일반인에겐 비공개)와는 Annex K의 footnote 하나만 다르다고 한다.
> Specifically for the PDF Draft n3220, the only C2Y specific change that has approval is an editorial one to fix a footnote in Annex K to state "potentially reserved" rather than just "reserved". There are no other changes between the n3220 and n3219.

출처: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3221.htm

### ISO/IEC 9899:2018 (aka C17)
https://www.open-std.org/JTC1/SC22/WG14/www/docs/n2310.pdf

공식적으로는 C23 표준을 위한 시작 Draft이다. \
문서 내에 C17 최종에서 C23 Draft로 넘어가면서 변경되는 점들이 전부 강조 표시 되어 있어 C17의 내용을 같이 확인할 수 있다.

### ISO/IEC 9899:2011 (aka C11)
https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1570.pdf

C11이랑 C99는 실제 표준과 얼마나 차이가 나는지 확인이 잘 안 된다.

### ISO/IEC 9899:1999 (aka C99)
https://www.open-std.org/JTC1/SC22/WG14/www/docs/n1256.pdf

### ISO/IEC 9899:1990 (aka C90 or C89 or ANSI C)
ANSI에서 1989년 표준화한 것을 ISO에서 1990년에 문서 형식만 수정해서 그대로 표준화했다고 한다.

NIST에서 발간한 다음 표준 문서(Draft가 아니라)가 공개되어 있다.
https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub160.pdf

### K&R C (aka C78)
"The C Programming Language" 책의 초판본의 내용을 기준으로 한다. \
저 책이 표준 문서는 아니긴 한데, 일단 ANSI C 표준화 이전에는 K&R C가 사실상 표준으로 기능했다.

Second Edition은 ANSI C를 기준으로 작성되었다고 한다.
