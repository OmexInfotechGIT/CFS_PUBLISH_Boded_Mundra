  
  
  

CREATE VIEW [dbo].[GetTruckInUsed]    
AS    
  
select * From (  
select TruckNo from trnWorkOrder   where flagdeleted = 0 and IsFinished = 1  
UNION  
select TruckNo from trnWeighmentCashInvoice   where flagdeleted = 0 and IsFinished = 1  
UNION   
select TruckNo from trnEmptyTruckGateIn  where flagdeleted = 0  and IsFinished = 1  
UNION  
select TruckNo from trnCargoGateIn  where flagdeleted = 0 and IsFinished = 1  
UNION  
select TruckNo from trnContainerGateIn  where flagdeleted = 0  and IsFinished = 1) as a   
where TruckNo NOT in (select TruckNo from trnEmptyTruckOutWO where flagdeleted = 0  and IsFinished = 1)  
  
  