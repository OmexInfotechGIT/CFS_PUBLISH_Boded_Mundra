CREATE view [dbo].[GetContainerGateInSummary]      
AS       
SELECT        
[trnContainerGateInNo] AS no      
,([trnContainerGateInPrefix]+[trnContainerGateInNo]) AS trnContainerGateInNo      
      
,STUFF((SELECT DISTINCT ', ' + UD.ContNo FROM trnContainerGateInDetails UD WHERE UD.trnContainerGateInID = U.trnContainerGateInID AND UD.Flagdeleted = 0  FOR XML PATH('')), 1, 2, '') AS ContNo      
      
,STUFF((SELECT DISTINCT ', ' + UD.ISOCode FROM trnContainerGateInDetails UD WHERE UD.trnContainerGateInID = U.trnContainerGateInID AND UD.Flagdeleted = 0  FOR XML PATH('')), 1, 2, '') AS ISOCode      
      
,STUFF((SELECT DISTINCT ', ' + UD.ISOCodeSize FROM trnContainerGateInDetails UD WHERE UD.trnContainerGateInID = U.trnContainerGateInID AND UD.Flagdeleted = 0  FOR XML PATH('')), 1, 2, '') AS ISOCodeSize      
      
,STUFF((SELECT DISTINCT ', ' + UD.ISOCodeType FROM trnContainerGateInDetails UD WHERE UD.trnContainerGateInID = U.trnContainerGateInID AND UD.Flagdeleted = 0   FOR XML PATH('')), 1, 2, '') AS ISOCodeType      
      
,U.trnContainerGateInID      
,IsApproved      
,U.TruckNo      
,U.DomesticContainerStatus      
 ,ApprovedDate        
      
,STUFF((SELECT DISTINCT ', ' + BOENo      
 FROM trnContainerGateInDetails dtl      
 INNER JOIN trnDocumentContainer  c ON c.trnDocumentContainerID = dtl.trnDocumentContainerID AND c.flagdeleted = 0      
 INNER JOIN trnDocumentContainerforlot dcl ON dcl.trnDocumentContainerID=c.trnDocumentContainerID AND dcl.flagdeleted=0      
 INNER JOIN trnDocumentLotDetails  l ON l.trnDocumentLotDetailsID =dcl.trnDocumentLotDetailsid AND l.flagdeleted = 0      
 WHERE dtl.flagdeleted = 0 AND trnContainerGateInID = U.trnContainerGateInID      
 FOR XML PATH('')), 1, 2, '') AS BOENo      
      
       
 ,STUFF((SELECT DISTINCT ', ' + CASE WHEN WeighmentRequired = 1 then 'Yes' else  'No' end       
  FROM trnContainerGateInDetails dtl      
  INNER JOIN trnDocumentContainer  c ON c.trnDocumentContainerID = dtl.trnDocumentContainerID AND c.flagdeleted = 0      
  INNER JOIN trnDocumentLotDetails  l ON l.trnDocumentID =  c.trnDocumentID AND l.flagdeleted = 0      
  INNER JOIN trnContainerWeighmentDetails w ON w. trnDocumentContainerID = C.trnDocumentContainerID AND w.flagdeleted = 0      
  WHERE dtl.flagdeleted = 0 AND trnContainerGateInID = U.trnContainerGateInID      
  FOR XML PATH('')), 1, 2, '') AS weighmentStatus      
      
,STUFF((SELECT DISTINCT ', ' + NatureofCargoName      
 FROM trnContainerGateInDetails dtl      
 INNER JOIN trnDocumentContainer  c ON c.trnDocumentContainerID = dtl.trnDocumentContainerID AND c.flagdeleted = 0      
 INNER JOIN trnDocumentLotDetails  l ON l.trnDocumentID = C.trnDocumentID AND l.flagdeleted = 0      
 WHERE dtl.flagdeleted = 0 AND trnContainerGateInID = U.trnContainerGateInID AND dtl.flagdeleted = 0      
 FOR XML PATH('')), 1, 2, '') AS NatureofCargoName      
,STUFF((SELECT DISTINCT ', ' + DeliveryMode      
 FROM trnContainerGateInDetails dtl      
 INNER JOIN trnDocumentContainer  c ON c.trnDocumentContainerID = dtl.trnDocumentContainerID AND c.flagdeleted = 0      
 INNER JOIN trnDocumentLotDetails  l on l.trnDocumentID = C.trnDocumentID AND l.flagdeleted = 0      
 WHERE dtl.flagdeleted = 0 AND trnContainerGateInID = U.trnContainerGateInID AND dtl.flagdeleted = 0      
 FOR XML PATH('')), 1, 2, '') AS DeliveryMode      
      
,ISNULl((SELECT COUNT(trnContainerGateIndetailsID) FROM trnContainerGateInDetails CIL       
      
INNER JOIN trnContainerWeighmentDetails CWD ON CWD.trnDocumentContainerID = CIL. trnDocumentContainerID AND CWD.flagdeleted = 0      
AND WeighmentRequired = 1        
AND (SELECT  COUNT(*) FROM trnWeighmentSlip SL WHERE SL.SearchType ='Container' AND SL.flagdeleted = 0 AND SL.IsFinished = 1 AND SearchID = CWD.trnDocumentContainerID) > 0      
WHERE CIL.trnContainerGateInID = U.trnContainerGateInID AND CIL.flagdeleted = 0),0)       
      
+       
      
ISNULl((SELECT COUNT(CIL.trnContainerGateIndetailsID) FROM trnContainerGateInDetails CIL       
      
INNER JOIN trnContainerWeighmentDetails CWD ON CWD.trnDocumentContainerID = CIL. trnDocumentContainerID AND CWD.flagdeleted = 0      
INNER JOIN trnContainerDestuffWorkOrderDetails CD ON CD.trnContainerGateInDetailsID = CIL.trnContainerGateInDetailsID AND CD.Flagdeleted = 0  
inner join trnContainerDestuffWorkOrder CDW ON CDW.trnContainerDestuffWorkOrderID = CD.trnContainerDestuffWorkOrderID AND CDW.FLAGDELETED = 0 AND CDW.isfinished = 1
AND WeighmentRequired = 0 AND CIL.flagdeleted = 0 AND CDW.IsFinished = 1  AND CIL.trnContainerGateInID = U.trnContainerGateInID      
 ),0) AS UsedCounter      
      
  ,U.CreatedDate      
      
FROM trnContainerGateIn U       
WHERE U.flagdeleted = 0 AND U.isFinished = 1         
      
       
      
      