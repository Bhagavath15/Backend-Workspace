select S.No,ItemName,Composition,Manufacturer,ProductId from test
left join Master
where UPPER(test.Composition)=UPPER(Master.Composition)