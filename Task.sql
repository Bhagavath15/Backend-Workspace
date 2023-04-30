select S.No,ItemName,Composition,Manufacturer,ProductId from Master
left join test
where UPPER(test.ItemName)=UPPER(Master.ItemName)