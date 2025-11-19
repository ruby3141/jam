#VisualStudio #CSharp
## xsd 파일로부터 생성된 typed dataset의 테이블이 LINQ를 안 먹을 때

출처: https://stackoverflow.com/questions/4469115/typed-dataset-not-using-typedtablebase-in-net-4

`MSDataSetGenerator`이 돌아갈 때 `System.Data.DataSetExtensions`이 VS에 로드가 안 되어 있으면 \
`TypedTableBase<>` 대신 `DataTable`이랑 `IEnumerable`을 써서 `OfType<>()` 없이 LINQ가 안 된다.

간단하게 VS에서 xsd 파일을 더블클릭해 테이블 디자이너를 켜서 `System.Data.DataSetExtensions`를 로드한 뒤, \
xsd 파일을 우클릭하고 "사용자 지정 도구 실행" 하면 된다.

일단 이 문제가 VS2008 이후에 고쳐지긴 했는지 잘 모르겠다. VS2022에서는 겪어본 적 없긴 했던 것 같긴 한데... \
이거랑 별개로 SOAP Web Service Reference로부터 생성되는 typed dataset 코드는 `TypedTableBase<>`을 안 쓰고 생성된다는 것 같다. \
이건 그냥 `OfType<>()` 해야 할 듯.
