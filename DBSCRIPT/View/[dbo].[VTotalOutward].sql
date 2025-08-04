CREATE VIEW [dbo].[VTotalOutward]    
AS    
SELECT      
  ISNULL(SUM(WorkOrderPackages) ,0) as OutOrderPackages    
 ,ISNULL(SUM(WorkOrderPieces)   ,0) as OutOrderPieces    
 ,ISNULL(SUM(WorkOrderWeight)  ,0) as OutOrderWeight    
 ,T.trnDocumentBoiItemsID  
 ,ISNULL(SUM(T.Packages)  ,0) as BOEPackages  
 ,ISNULL(SUM(T.Weight)  ,0) as BOEWeight  
 ,ISNULL(SUM(T.Pieces)  ,0) as BOEPieces  
 ,trnDocumentID    
 ,WO.LotNo    
 ,WO.trnDocumentLotDetailsID    
from trnWorkOrderoutLotDetails WO    
INNER JOIN trnWorkOrderOut W ON W.trnWorkOrderOutID = WO.trnWorkOrderOutID AND W.Flagdeleted = 0 AND W.isfinished = 1    
LEFT Join trnCargoTruckOutwardCumGatepass TD on TD.WorkOrderID = W.trnWorkOrderOutID  and TD.Flagdeleted=0  
LEFT join trnCargoTruckOutwardCumGatepassdetails T ON TD.trnCargoTruckOutwardCumGatepassID = T.trnCargoTruckOutwardCumGatepassID and T.trnDocumentLotDetailsID = WO.trnDocumentLotDetailsID and T.flagdeleted = 0  
where WO.Flagdeleted = 0       
GROUP BY trnDocumentID,WO.LotNo,WO.trnDocumentLotDetailsID ,T.trnDocumentBoiItemsID  
  
  
  
    
    
    
    
  