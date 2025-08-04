
CREATE View [dbo].[GetCarinDateWiseImportExportForNBilling]  
 AS   
SELECT  ExportItem.trnDocumentLotDetailsID ,  
  CLPBOE.trnDestuffingID,  
  CLPBOE.Type,  
  ContNo AS ContainerName,  
  SUM(CLPPackages) AS CLPPackages,  
  SUM(CLPPieces) AS CLPPieces,  
  SUM(CLPWeight) AS CLPWeight,  
  cast(CLPEndDateAndTime AS Date) AS CLPEndDateAndTime  
FROM   
trnExportDocumentDeclarationItems  As ExportItem  
JOIN trnExportDocumentDeclaration As Export  
 On Export.trnExportDocumentDeclarationID = ExportItem.trnExportDocumentDeclarationID     
  AND Export.Flagdeleted = 0 AND Export.IsFinished =1  
JOIN trnexportstufingwoSBDetails AS SBDetail   
  ON SBDetail.trnExportDocumentDeclarationLotDetailsID =ExportItem.trnExportDocumentDeclarationLotDetailsID AND SBDetail.flagDeleted =0  
JOIN trnexportstufingwoContainerDetails AS ESWCD on ESWCD.trnexportstufingwoID = SBDetail.trnexportstufingwoID AND ESWCD.flagDeleted =0  
JOIN trnexportstufingwo AS ESWO ON ESWO.trnexportstufingwoID =ESWCD.trnexportstufingwoID AND ESWO.IsFinished =1 AND ESWO.flagDeleted =0   
JOIN trnExportCLP as CLP ON CLP.trnexportstufingwoContainerDetailsID =  ESWCD.trnexportstufingwoContainerDetailsID AND CLP.IsFinished =1 AND CLP.flagDeleted =0   
JOIN trnExportCLPBOEItems AS CLPBOE ON CLPBOE.trnExportCLPID = CLP.trnExportCLPID  AND CLPBOE.Flagdeleted=0  
WHERE  ExportItem.flagDeleted =0  
  
GROUP BY ExportItem.trnDocumentLotDetailsID ,  
  CLPBOE.trnDestuffingID,CLPBOE.Type,  
  ContNo,  
  CAST( CLPEndDateAndTime AS Date)  
HAVING (SUM(CLPPackages)  +  
  SUM(CLPPieces) +   
  SUM(CLPWeight)  ) > 0  
  
  