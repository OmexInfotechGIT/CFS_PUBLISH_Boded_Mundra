
  
  
ALTER VIEW [dbo].[GetPreProformaTariffDetails]    
AS    
  
select ROW_NUMBER() over(order by TarrifHead ) as RowNumber,  
TarrifHead,  
trnPreProformaID,  
TarrifHeadID,  
HSNSACCode,  
UOM,  
SUM(NoOfStoragePeriod) as NoOfStoragePeriod,  
StoragePeriod,  
SUM(Area) as Area,  
SUM(QTY) as QTY,  
SUM(Weight) as Weight,  
Rate,  
SUM(Total) as Total,  
SUM(DiscountAmt) as  DiscountAmt  
, GSTPer  
, SUM(NetAmount) as NetAmount  
,MstrTaxGroupID  
  
   
 from (  
select TarrifHead,  trnPreProformaID,TarrifHeadID , UOM, NoOfStoragePeriod,StoragePeriod,Area,QTY,Weight,Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoBasedStorage where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID , UOM,0 as NoOfStoragePeriod,'' as StoragePeriod,0 as Area,QTY,Weight,Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoHandling where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID , UOM,NoOfStoragePeriod,StoragePeriod,Area,QTY,Weight,0 as Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoSlabwiseStorage where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID , UOM,NoOfStoragePeriod,StoragePeriod,Area,0 as QTY,0 as Weight,Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaReserveAreaStorage where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID ,'' as UOM,NoOfStoragePeriod,StoragePeriod,0 as Area,NoofContainers as QTY,0 as Weight,Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerBasedStorage where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID ,'' as UOM,0 as NoOfStoragePeriod,'' as StoragePeriod,0 as Area,NoofContainers as QTY,0 as Weight,Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerHandling where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID ,'' as UOM,0 as NoOfStoragePeriod,'' as StoragePeriod,0 as Area,NoofContainers as QTY,0 as Weight,0 as Rate,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerSlabwiseStorage where flagdeleted = 0  
UNION ALL  
select TarrifHead,  trnPreProformaID,TarrifHeadID ,'' as UOM,0 as NoOfStoragePeriod,'' as StoragePeriod,0 as Area,QTY,0 as Weight, Rate,Total, Discountamt, Netamount, GSTPer from trnPreProformaOtherTerrifDetails where flagdeleted = 0  
  
) as a   
Inner Join mstrtariffhead th on mstrtariffHeadID = TarrifHeadID  
  
  
GROUP BY TarrifHead , GSTPer, trnPreProformaID,TarrifHeadID,HSNSACCode,MstrTaxGroupID,UOM,StoragePeriod,Rate  
  
  