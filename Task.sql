select S.No,ItemName,Composition,Manufacturer,ProductId from test
left join Master
where UPPER(test.ItemName)=UPPER(Master.ItemName)