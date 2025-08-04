        
alter view  [dbo].[TotalOutward]        
as        
SELECT         
 trnExBondDocumentEntryDetailsID AS trnExBondDocumentEntryDetailsID,trnDestuffingID AS trnDestuffingID,[Type],        
 ISNULL(SUM(CLPPackages ),0) as OutPackages,        
 ISNULL(SUM(CLPPieces ),0) as OutPieces,        
 ISNULL(SUM(CLPWeight   ) ,0) as OutWeight          
FROM trnExportCLPBOEItems EXPCLP         
Inner Join trnExportCLP cargo on cargo.trnExportCLPID = EXPCLP.trnExportCLPID and cargo.flagdeleted = 0 and cargo.Isfinished =1        
where EXPCLP.flagdeleted = 0         
GROUP BY trnExBondDocumentEntryDetailsID,trnDestuffingID,[Type]      
    
UNION ALL     
    
SELECT CTOGPD.trnExBondDocumentEntryDetailsID    
,CTOGPD.trnDestuffingID    
,CTOGPD.[Type]    
,ISNULL(SUM(CTOGPD.Packages),0)AS OutPackages    
,ISNULL(SUM(CTOGPD.Pieces  ),0)AS OutPieces    
,ISNULL(SUM(CTOGPD.Weight  ),0)AS OutWeight    
FROM trnCargoTruckOutwardCumGatepassDetails CTOGPD    
INNER JOIN trnCargoTruckOutwardCumGatepass CTOGP ON CTOGP.trnCargoTruckOutwardCumGatepassID=CTOGPD.trnCargoTruckOutwardCumGatepassID AND CTOGP.Flagdeleted=0    
AND CTOGP.IsFinished=1    
WHERE CTOGPD.Flagdeleted=0    
GROUP BY trnExBondDocumentEntryDetailsID,trnDestuffingID,[Type]      
        
        