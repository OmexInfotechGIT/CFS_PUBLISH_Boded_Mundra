
  
ALTER VIEW [dbo].[GetPreProformaConsolidatedChargesDetails]      
AS     
select ROW_NUMBER() over(order by TarrifHead ) as RowNumber,    
TarrifHead,    
trnPreProformaID,    
TarrifHeadID,    
SUM(Total) as Total,    
SUM(DiscountAmt) as  DiscountAmt,    
GSTPer,    
SUM(NetAmount) as NetAmount,    
MstrTaxGroupID    
from (    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoBasedStorage where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoHandling where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaCargoSlabwiseStorage where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaReserveAreaStorage where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerBasedStorage where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerHandling where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,Total,Discountamt,Netamount,GSTPer from trnPreProformaContainerSlabwiseStorage where flagdeleted = 0    
UNION ALL    
select TarrifHeadID,TarrifHead,trnPreProformaID,ISNULL(QTY,0)*ISNULL(Rate, 0) AS [Total],Discountamt,Netamount,GSTPer from trnPreProformaOtherTerrifDetails where flagdeleted = 0    
) as a     
Inner Join mstrtariffhead th on mstrtariffHeadID = TarrifHeadID    
GROUP BY TarrifHead , GSTPer, trnPreProformaID,TarrifHeadID,MstrTaxGroupID    