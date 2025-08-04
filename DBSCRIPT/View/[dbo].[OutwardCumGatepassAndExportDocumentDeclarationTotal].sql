CREATE VIEW   [dbo].[OutwardCumGatepassAndExportDocumentDeclarationTotal]        
AS        
SELECT   trnExBondDocumentEntryDetailsID,         
 ISNULL(SUM(OutPackages ),0) AS OutPackages,        
 ISNULL(SUM(OutPieces ),0) AS OutPieces,        
 ISNULL(SUM(OutWeight   ) ,0) AS OutWeight   FROM (        
SELECT         
 trnExBondDocumentEntryDetailsID AS trnExBondDocumentEntryDetailsID,         
 ISNULL(SUM(WHPackages ),0) AS OutPackages,        
 ISNULL(SUM(WHPieces ),0) AS OutPieces,        
 ISNULL(SUM(WHWeight   ) ,0) AS OutWeight          
FROM trnExportCLPBOEItems EXPCLP         
INNER JOIN trnExportCLP cargo ON cargo.trnExportCLPID = EXPCLP.trnExportCLPID and cargo.flagdeleted = 0 and cargo.Isfinished =1        
WHERE EXPCLP.flagdeleted = 0         
GROUP BY trnExBondDocumentEntryDetailsID         
        
UNION ALL        
SELECT  CargoOut.trnExBondDocumentEntryDetailsID AS trnExBondDocumentEntryDetailsID,         
  SUM(Packages) AS OutPackages,        
  SUM(Pieces) AS OutPieces,        
  SUM(Weight) AS OutWeight          
FROM trnCargoTruckOutwardCumGatepassDetails  CargoOut        
INNER JOIN trnCargoTruckOutwardCumGatepass Cargo ON cargo.trnCargoTruckOutwardCumGatepassID = CargoOut.trnCargoTruckOutwardCumGatepassID and cargo.flagdeleted = 0 and cargo.Isfinished =1        
 WHERE CargoOut.flagdeleted = 0          
GROUP BY CargoOut.trnExBondDocumentEntryDetailsID        
        
) AS a         
GROUP BY trnExBondDocumentEntryDetailsID 
